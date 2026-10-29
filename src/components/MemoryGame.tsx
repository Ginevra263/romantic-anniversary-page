import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RotateCcw, ArrowLeft } from "lucide-react";
import { HeartIcon, PartyIcon, StarIcon, PenguinIcon, SmileIcon, SparkleIcon } from "@/components/CuteIcons";
import FloatingHearts from "@/components/FloatingHearts";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import cuteDogGif from "@/assets/cute_dog.gif";
import cuteGhostImg from "@/assets/cute_ghost.jpg";
import cutePenguinImg from "@/assets/cute_penguin.jpg";
import cuteHeartImg from "@/assets/cute_heart.png";

type CardContent =
    | { type: "text"; value: string }
    | { type: "icon"; value: "heart" | "sparkles" }
    | { type: "emoji"; value: string }
    | { type: "gif"; value: string }
    | { type: "image"; value: string };

type GameCard = {
    id: number;
    content: CardContent;
    isFlipped: boolean;
    isMatched: boolean;
};

interface MemoryGameProps {
    onBack: () => void;
}

const MemoryGame = ({ onBack }: MemoryGameProps) => {
    const [cards, setCards] = useState<GameCard[]>([]);
    const [flippedCards, setFlippedCards] = useState<number[]>([]);
    const [turn, setTurn] = useState<1 | 2>(1);
    const [scores, setScores] = useState({ 1: 0, 2: 0 });
    const [isGameActive, setIsGameActive] = useState(false);

    const initializeGame = () => {
        const cardTypes: CardContent[] = [
            { type: "text", value: "Mao" },
            { type: "text", value: "Shiu" },
            { type: "text", value: "Ti amo" },
            { type: "text", value: "hehehe" },
            { type: "image", value: cuteHeartImg },
            { type: "gif", value: cuteDogGif },
            { type: "image", value: cuteGhostImg },
            { type: "image", value: cutePenguinImg },
        ];

        const deck = [...cardTypes, ...cardTypes]
            .map((content, index) => ({
                id: index,
                content,
                isFlipped: false,
                isMatched: false,
            }))
            .sort(() => Math.random() - 0.5);

        setCards(deck);
        setFlippedCards([]);
        setTurn(1);
        setScores({ 1: 0, 2: 0 });
        setIsGameActive(true);
        toast.success("Nuova partita iniziata! Tocca al Andre");
    };

    useEffect(() => {
        initializeGame();
    }, []);

    const handleCardClick = (index: number) => {
        if (
            !isGameActive ||
            cards[index].isMatched ||
            cards[index].isFlipped ||
            flippedCards.length >= 2
        ) {
            return;
        }

        const newCards = [...cards];
        newCards[index].isFlipped = true;
        setCards(newCards);

        const newFlipped = [...flippedCards, index];
        setFlippedCards(newFlipped);

        if (newFlipped.length === 2) {
            checkMatch(newFlipped, newCards);
        }
    };

    const checkMatch = (flipped: number[], currentCards: GameCard[]) => {
        const [firstIndex, secondIndex] = flipped;
        const firstCard = currentCards[firstIndex];
        const secondCard = currentCards[secondIndex];

        const isMatch =
            firstCard.content.type === secondCard.content.type &&
            firstCard.content.value === secondCard.content.value;

        if (isMatch) {
            setTimeout(() => {
                const newCards = [...currentCards];
                newCards[firstIndex].isMatched = true;
                newCards[secondIndex].isMatched = true;
                setCards(newCards);
                setFlippedCards([]);

                setScores(prev => ({
                    ...prev,
                    [turn]: prev[turn] + 1
                }));

                toast.success(`Bravo Giocatore ${turn}! Un punto!`);

                if (newCards.every(c => c.isMatched)) {
                    setIsGameActive(false);
                    toast.success("Partita completata!");
                }
            }, 500);
        } else {
            setTimeout(() => {
                const newCards = [...currentCards];
                newCards[firstIndex].isFlipped = false;
                newCards[secondIndex].isFlipped = false;
                setCards(newCards);
                setFlippedCards([]);
                setTurn(prev => prev === 1 ? 2 : 1);
            }, 1000);
        }
    };

    const renderCardContent = (card: GameCard) => {
        if (!card.isFlipped && !card.isMatched) {
            return <HeartIcon className="w-9 h-9 animate-heartbeat" />;
        }

        switch (card.content.type) {
            case "icon":
                if (card.content.value === "heart") return <HeartIcon face className="w-12 h-12" />;
                if (card.content.value === "sparkles") return <SparkleIcon className="w-12 h-12" />;
                return null;
            case "emoji":
                return <span className="text-4xl">{card.content.value}</span>;
            case "text":
                return <span className="text-lg font-bold text-primary">{card.content.value}</span>;
            case "gif":
                return <img src={card.content.value} alt="gif" className="w-20 h-20 object-cover rounded-lg" />;
            case "image":
                return <img src={card.content.value} alt="image" className="w-20 h-20 object-cover rounded-lg" />;
        }
    };

    return (
        <div className="min-h-screen pb-20">
            <FloatingHearts />
            <div className="pt-24 px-4 max-w-4xl mx-auto">
                <Button
                    variant="ghost"
                    onClick={onBack}
                    className="mb-4 gap-2 rounded-full"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Torna ai Giochi
                </Button>

                <div className="text-center mb-8 animate-fade-in">
                    <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                        <StarIcon className="w-12 h-12 animate-wiggle" />
                        Sfida Memory
                    </h1>
                    <p className="text-muted-foreground">
                        Sfida il tuo amore in questo gioco di memoria!
                    </p>
                </div>

                {/* Scoreboard */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <Card className={cn(
                        "p-4 flex flex-col items-center justify-center transition-all duration-300 border-2 rounded-3xl",
                        turn === 1 ? "border-primary bg-primary/10 scale-105 shadow-lg" : "border-transparent bg-muted/50"
                    )}>
                        <div className="flex items-center gap-2 mb-2">
                            <PenguinIcon className="w-7 h-7" />
                            <span className="font-bold">Andre</span>
                        </div>
                        <span className="text-3xl font-bold text-primary">{scores[1]}</span>
                    </Card>

                    <Card className={cn(
                        "p-4 flex flex-col items-center justify-center transition-all duration-300 border-2 rounded-3xl",
                        turn === 2 ? "border-primary bg-primary/10 scale-105 shadow-lg" : "border-transparent bg-muted/50"
                    )}>
                        <div className="flex items-center gap-2 mb-2">
                            <SmileIcon className="w-7 h-7" />
                            <span className="font-bold">Gine</span>
                        </div>
                        <span className="text-3xl font-bold text-primary">{scores[2]}</span>
                    </Card>
                </div>

                {/* Game Grid */}
                <div className="grid grid-cols-4 gap-3 sm:gap-4 max-w-lg mx-auto mb-8">
                    {cards.map((card, index) => (
                        <Card
                            key={card.id}
                            onClick={() => handleCardClick(index)}
                            className={cn(
                                "aspect-square flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:-rotate-2 relative overflow-hidden rounded-2xl",
                                card.isMatched ? "opacity-70 ring-2 ring-pink-300" : "",
                                card.isFlipped ? "bg-card ring-2 ring-accent" : "bg-gradient-to-br from-pink-100 to-rose-200 hover:from-pink-200"
                            )}
                        >
                            {renderCardContent(card)}
                        </Card>
                    ))}
                </div>

                {/* Controls */}
                <div className="flex justify-center">
                    <Button
                        size="lg"
                        onClick={initializeGame}
                        className="gap-2 rounded-full shadow-lg hover:shadow-xl transition-all"
                    >
                        <RotateCcw className="w-5 h-5" />
                        Ricomincia Partita
                    </Button>
                </div>

                {!isGameActive && cards.every(c => c.isMatched) && (
                    <div className="mt-8 text-center animate-bounce">
                        <h2 className="text-2xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                            {scores[1] > scores[2] ? "Vince Andre!" : scores[2] > scores[1] ? "Vince Gine!" : "Pareggio!"}
                            {scores[1] === scores[2] ? <HeartIcon face className="w-9 h-9" /> : <PartyIcon className="w-9 h-9" />}
                        </h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MemoryGame;
