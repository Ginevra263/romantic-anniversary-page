import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, RotateCcw, User, ArrowLeft, Trophy } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface DartsGameProps {
    onBack: () => void;
}

type DartThrow = {
    x: number;
    y: number;
    score: number;
    multiplier: 1 | 2 | 3;
};

type Player = {
    name: string;
    score: number;
    throws: DartThrow[];
};

const DartsGame = ({ onBack }: DartsGameProps) => {
    const [players, setPlayers] = useState<Player[]>([
        { name: "Andre", score: 301, throws: [] },
        { name: "Gine", score: 301, throws: [] }
    ]);
    const [currentPlayer, setCurrentPlayer] = useState(0);
    const [throwsInTurn, setThrowsInTurn] = useState(0);
    const [isHorizontalSliding, setIsHorizontalSliding] = useState(false);
    const [isVerticalSliding, setIsVerticalSliding] = useState(false);
    const [horizontalPosition, setHorizontalPosition] = useState(50);
    const [verticalPosition, setVerticalPosition] = useState(50);
    const [dartPositions, setDartPositions] = useState<DartThrow[]>([]);
    const [winner, setWinner] = useState<string | null>(null);
    const [roundThrows, setRoundThrows] = useState<DartThrow[]>([]);

    const horizontalSliderRef = useRef<number>(0);
    const verticalSliderRef = useRef<number>(0);
    const animationFrameRef = useRef<number>();

    useEffect(() => {
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    const animateSlider = (isHorizontal: boolean) => {
        let position = 0;
        let direction = 1;
        const speed = 2;

        const animate = () => {
            position += direction * speed;
            if (position >= 100 || position <= 0) {
                direction *= -1;
            }
            position = Math.max(0, Math.min(100, position));

            if (isHorizontal) {
                setHorizontalPosition(position);
                horizontalSliderRef.current = position;
            } else {
                setVerticalPosition(position);
                verticalSliderRef.current = position;
            }

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();
    };

    const startThrow = () => {
        if (winner) return;
        setIsHorizontalSliding(true);
        animateSlider(true);
    };

    const stopHorizontalSlider = () => {
        if (!isHorizontalSliding) return;
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
        setIsHorizontalSliding(false);
        setIsVerticalSliding(true);
        animateSlider(false);
    };

    const stopVerticalSlider = () => {
        if (!isVerticalSliding) return;
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
        setIsVerticalSliding(false);

        // Calcola il punteggio basato sulla posizione
        const dartThrow = calculateScore(horizontalSliderRef.current, verticalSliderRef.current);

        // Aggiungi il lancio corrente
        const newRoundThrows = [...roundThrows, dartThrow];
        setRoundThrows(newRoundThrows);
        setDartPositions([...dartPositions, dartThrow]);

        // Aggiorna il punteggio del giocatore
        const newPlayers = [...players];
        const currentScore = newPlayers[currentPlayer].score;
        let newScore = currentScore - (dartThrow.score * dartThrow.multiplier);

        // Regola 301: non puoi andare sotto 0 e devi chiudere esattamente a 0
        if (newScore < 0) {
            toast.error("Sballato! Hai superato lo 0!");
            newScore = currentScore; // Reset del punteggio
            // Passa al giocatore successivo
            nextPlayer(newRoundThrows);
            return;
        } else if (newScore === 0) {
            newPlayers[currentPlayer].score = 0;
            setPlayers(newPlayers);
            setWinner(newPlayers[currentPlayer].name);
            toast.success(`🎉 ${newPlayers[currentPlayer].name} ha vinto! 🎉`);
            return;
        } else {
            newPlayers[currentPlayer].score = newScore;
            setPlayers(newPlayers);
            toast.success(`${dartThrow.score * dartThrow.multiplier} punti! Rimangono ${newScore}`);
        }

        // Incrementa i lanci nel turno
        const newThrowsCount = throwsInTurn + 1;
        setThrowsInTurn(newThrowsCount);

        // Dopo 3 lanci, passa al prossimo giocatore
        if (newThrowsCount >= 3) {
            nextPlayer(newRoundThrows);
        }
    };

    const nextPlayer = (throws: DartThrow[]) => {
        setTimeout(() => {
            setCurrentPlayer((currentPlayer + 1) % 2);
            setThrowsInTurn(0);
            setRoundThrows([]);
            toast.info(`Tocca a ${players[(currentPlayer + 1) % 2].name}`);
        }, 1500);
    };

    const calculateScore = (x: number, y: number): DartThrow => {
        // Converti percentuali in coordinate del tabellone (centrato)
        const centerX = 50;
        const centerY = 50;
        const dx = x - centerX;
        const dy = y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let score = 0;
        let multiplier: 1 | 2 | 3 = 1;

        // Calcola l'angolo per determinare il settore
        const angle = (Math.atan2(dy, dx) * 180 / Math.PI + 360) % 360;

        // Settori del tabellone (in senso orario partendo da 6)
        const sectors = [6, 13, 4, 18, 1, 20, 5, 12, 9, 14, 11, 8, 16, 7, 19, 3, 17, 2, 15, 10];
        const sectorIndex = Math.floor(angle / 18);
        const sectorScore = sectors[sectorIndex];

        if (distance < 3) {
            // Bullseye (centro esatto)
            score = 50;
            multiplier = 1;
        } else if (distance < 6) {
            // Bull (centro esterno)
            score = 25;
            multiplier = 1;
        } else if (distance < 35) {
            // Zona singola interna
            score = sectorScore;
            multiplier = 1;
        } else if (distance < 38) {
            // Triplo
            score = sectorScore;
            multiplier = 3;
        } else if (distance < 45) {
            // Zona singola esterna
            score = sectorScore;
            multiplier = 1;
        } else if (distance < 50) {
            // Doppio
            score = sectorScore;
            multiplier = 2;
        } else {
            // Fuori dal tabellone
            score = 0;
            multiplier = 1;
        }

        return { x, y, score, multiplier };
    };

    const resetGame = () => {
        setPlayers([
            { name: "Andre", score: 301, throws: [] },
            { name: "Gine", score: 301, throws: [] }
        ]);
        setCurrentPlayer(0);
        setThrowsInTurn(0);
        setDartPositions([]);
        setRoundThrows([]);
        setWinner(null);
        setHorizontalPosition(50);
        setVerticalPosition(50);
        toast.success("Nuova partita iniziata!");
    };

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="pt-24 px-4 max-w-6xl mx-auto">
                <Button
                    variant="ghost"
                    onClick={onBack}
                    className="mb-4 gap-2"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Torna ai Giochi
                </Button>

                <div className="text-center mb-8 animate-fade-in">
                    <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                        <Heart className="w-10 h-10 text-red-500 fill-red-500" />
                        Freccette dell'Amore
                        <Heart className="w-10 h-10 text-red-500 fill-red-500" />
                    </h1>
                    <p className="text-muted-foreground">
                        Partenza da 301 punti - Chi arriva a 0 esatto vince! 💘
                    </p>
                </div>

                {/* Scoreboard */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <Card className={cn(
                        "p-6 flex flex-col items-center justify-center transition-all duration-300 border-2",
                        currentPlayer === 0 && !winner ? "border-red-500 bg-red-500/10 scale-105 shadow-lg shadow-red-500/20" : "border-transparent bg-muted/50"
                    )}>
                        <div className="flex items-center gap-2 mb-2">
                            <User className="w-5 h-5" />
                            <span className="font-bold text-lg">Andre</span>
                        </div>
                        <span className={cn(
                            "text-5xl font-bold transition-colors",
                            players[0].score <= 50 ? "text-red-500" : "text-primary"
                        )}>
                            {players[0].score}
                        </span>
                        {winner === "Andre" && (
                            <Trophy className="w-8 h-8 text-yellow-500 mt-2 animate-bounce" />
                        )}
                    </Card>

                    <Card className={cn(
                        "p-6 flex flex-col items-center justify-center transition-all duration-300 border-2",
                        currentPlayer === 1 && !winner ? "border-red-500 bg-red-500/10 scale-105 shadow-lg shadow-red-500/20" : "border-transparent bg-muted/50"
                    )}>
                        <div className="flex items-center gap-2 mb-2">
                            <User className="w-5 h-5" />
                            <span className="font-bold text-lg">Gine</span>
                        </div>
                        <span className={cn(
                            "text-5xl font-bold transition-colors",
                            players[1].score <= 50 ? "text-red-500" : "text-primary"
                        )}>
                            {players[1].score}
                        </span>
                        {winner === "Gine" && (
                            <Trophy className="w-8 h-8 text-yellow-500 mt-2 animate-bounce" />
                        )}
                    </Card>
                </div>

                {/* Dartboard */}
                <div className="mb-8">
                    <Card className="p-8 bg-gradient-to-br from-pink-500/5 via-red-500/5 to-rose-500/5">
                        <div className="relative w-full max-w-md mx-auto aspect-square">
                            {/* Dartboard SVG */}
                            <svg viewBox="0 0 100 100" className="w-full h-full">
                                {/* Outer ring - Double */}
                                <circle cx="50" cy="50" r="48" fill="#1a1a1a" stroke="#ff1744" strokeWidth="0.5" />

                                {/* Double ring */}
                                <circle cx="50" cy="50" r="47" fill="none" stroke="#4a0e0e" strokeWidth="3" />

                                {/* Main playing area */}
                                <circle cx="50" cy="50" r="44" fill="#2d1f1f" />

                                {/* Triple ring */}
                                <circle cx="50" cy="50" r="37" fill="none" stroke="#8b0000" strokeWidth="3" />

                                {/* Inner singles */}
                                <circle cx="50" cy="50" r="34" fill="#3d2929" />

                                {/* Bull ring */}
                                <circle cx="50" cy="50" r="8" fill="#ffb3c1" />

                                {/* Bullseye */}
                                <circle cx="50" cy="50" r="4" fill="#ff1744" />

                                {/* Sectors */}
                                {Array.from({ length: 20 }).map((_, i) => {
                                    const angle = (i * 18 - 90) * Math.PI / 180;
                                    return (
                                        <line
                                            key={i}
                                            x1="50"
                                            y1="50"
                                            x2={50 + 48 * Math.cos(angle)}
                                            y2={50 + 48 * Math.sin(angle)}
                                            stroke="#000"
                                            strokeWidth="0.3"
                                            opacity="0.3"
                                        />
                                    );
                                })}

                                {/* Current round darts */}
                                {roundThrows.map((dart, idx) => (
                                    <g key={`current-${idx}`}>
                                        <path
                                            d={`M ${dart.x - 2} ${dart.y} L ${dart.x} ${dart.y - 3} L ${dart.x + 2} ${dart.y} L ${dart.x + 1.5} ${dart.y + 0.5} L ${dart.x} ${dart.y - 0.5} L ${dart.x - 1.5} ${dart.y + 0.5} Z`}
                                            fill="#ff1744"
                                            stroke="#fff"
                                            strokeWidth="0.3"
                                            className="animate-pulse"
                                        />
                                        <circle cx={dart.x} cy={dart.y} r="0.5" fill="#fff" />
                                    </g>
                                ))}

                                {/* Aim indicator when sliding */}
                                {(isHorizontalSliding || isVerticalSliding) && (
                                    <>
                                        <line
                                            x1={horizontalPosition}
                                            y1="0"
                                            x2={horizontalPosition}
                                            y2="100"
                                            stroke="#ff1744"
                                            strokeWidth="0.5"
                                            strokeDasharray="2,2"
                                            opacity="0.6"
                                        />
                                        <line
                                            x1="0"
                                            y1={verticalPosition}
                                            x2="100"
                                            y2={verticalPosition}
                                            stroke="#ff1744"
                                            strokeWidth="0.5"
                                            strokeDasharray="2,2"
                                            opacity="0.6"
                                        />
                                        <circle
                                            cx={horizontalPosition}
                                            cy={verticalPosition}
                                            r="2"
                                            fill="#ff1744"
                                            opacity="0.8"
                                            className="animate-pulse"
                                        />
                                    </>
                                )}
                            </svg>
                        </div>
                    </Card>
                </div>

                {/* Controls */}
                <div className="space-y-6">
                    {!winner && (
                        <>
                            <div className="text-center">
                                <p className="text-lg font-semibold mb-2">
                                    Tocca a {players[currentPlayer].name} - Lancio {throwsInTurn + 1}/3
                                </p>
                            </div>

                            {/* Sliders Display */}
                            {(isHorizontalSliding || isVerticalSliding) && (
                                <Card className="p-4">
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm font-medium mb-2">Posizione Orizzontale</p>
                                            <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                                                <div
                                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-500 to-red-500 transition-all duration-75"
                                                    style={{ width: `${horizontalPosition}%` }}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium mb-2">Posizione Verticale</p>
                                            <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                                                <div
                                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-rose-500 to-red-600 transition-all duration-75"
                                                    style={{ width: `${verticalPosition}%` }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            )}

                            {/* Action Button */}
                            <div className="flex justify-center">
                                {!isHorizontalSliding && !isVerticalSliding && (
                                    <Button
                                        size="lg"
                                        onClick={startThrow}
                                        className="gap-2 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 shadow-lg hover:shadow-xl transition-all text-white"
                                    >
                                        <Target className="w-5 h-5" />
                                        Lancia Freccia
                                    </Button>
                                )}
                                {isHorizontalSliding && (
                                    <Button
                                        size="lg"
                                        onClick={stopHorizontalSlider}
                                        className="gap-2 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 shadow-lg hover:shadow-xl transition-all text-white animate-pulse"
                                    >
                                        Ferma Orizzontale
                                    </Button>
                                )}
                                {isVerticalSliding && (
                                    <Button
                                        size="lg"
                                        onClick={stopVerticalSlider}
                                        className="gap-2 bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 shadow-lg hover:shadow-xl transition-all text-white animate-pulse"
                                    >
                                        Ferma Verticale e Lancia!
                                    </Button>
                                )}
                            </div>
                        </>
                    )}

                    {/* Reset Button */}
                    <div className="flex justify-center pt-4">
                        <Button
                            variant="outline"
                            onClick={resetGame}
                            className="gap-2"
                        >
                            <RotateCcw className="w-4 h-4" />
                            Nuova Partita
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DartsGame;
