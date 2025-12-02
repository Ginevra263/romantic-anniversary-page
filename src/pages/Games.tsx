import { useState } from "react";
import AppBar from "@/components/AppBar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Brain, Sparkles, Trophy } from "lucide-react";
import MemoryGame from "@/components/MemoryGame";
import DartsGame from "@/components/DartsGame";

type GameType = "menu" | "memory" | "darts";

interface GameInfo {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    gradient: string;
    component: GameType;
}

const Games = () => {
    const [activeGame, setActiveGame] = useState<GameType>("menu");

    const games: GameInfo[] = [
        {
            id: "memory",
            title: "Memory dell'Amore",
            description: "Sfida il tuo partner in un classico gioco di memoria con carte romantiche!",
            icon: <Brain className="w-12 h-12" />,
            gradient: "from-purple-500 to-pink-500",
            component: "memory"
        },
        {
            id: "darts",
            title: "Freccette dell'Amore",
            description: "Lancia freccette a forma di cuore! Gioco a 301 punti per 2 giocatori.",
            icon: <Target className="w-12 h-12" />,
            gradient: "from-red-500 to-rose-500",
            component: "darts"
        }
    ];

    if (activeGame === "memory") {
        return <MemoryGame onBack={() => setActiveGame("menu")} />;
    }

    if (activeGame === "darts") {
        return <DartsGame onBack={() => setActiveGame("menu")} />;
    }

    return (
        <div className="min-h-screen bg-background pb-20">
            <AppBar />

            <div className="pt-24 px-4 max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 animate-fade-in">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Trophy className="w-12 h-12 text-yellow-500 animate-bounce" />
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-rose-500 bg-clip-text text-transparent">
                            Giochi dell'Amore
                        </h1>
                        <Sparkles className="w-12 h-12 text-yellow-500 animate-pulse" />
                    </div>
                    <p className="text-muted-foreground text-lg">
                        Scegli un gioco e sfida il tuo amore! 💕
                    </p>
                </div>

                {/* Games Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {games.map((game, index) => (
                        <Card
                            key={game.id}
                            className="group relative overflow-hidden border-2 border-transparent hover:border-primary/50 transition-all duration-300 cursor-pointer"
                            style={{
                                animationDelay: `${index * 100}ms`
                            }}
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${game.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                            />

                            <div className="relative p-8">
                                <div className="flex flex-col items-center text-center space-y-4">
                                    {/* Icon */}
                                    <div className={`p-6 rounded-2xl bg-gradient-to-br ${game.gradient} text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                                        {game.icon}
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                        {game.title}
                                    </h2>

                                    {/* Description */}
                                    <p className="text-muted-foreground text-sm leading-relaxed min-h-[3rem]">
                                        {game.description}
                                    </p>

                                    {/* Play Button */}
                                    <Button
                                        size="lg"
                                        onClick={() => setActiveGame(game.component)}
                                        className={`w-full gap-2 bg-gradient-to-r ${game.gradient} hover:shadow-xl hover:scale-105 transition-all duration-300 text-white border-none`}
                                    >
                                        <Heart className="w-5 h-5 fill-white" />
                                        Gioca Ora
                                    </Button>
                                </div>
                            </div>

                            {/* Decorative corner hearts */}
                            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                                <Heart className="w-6 h-6 fill-current text-red-500" />
                            </div>
                            <div className="absolute bottom-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity">
                                <Heart className="w-6 h-6 fill-current text-pink-500" />
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Coming Soon Section */}
                <Card className="p-8 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-red-500/5 border-dashed">
                    <div className="text-center">
                        <Sparkles className="w-10 h-10 mx-auto mb-4 text-yellow-500 animate-pulse" />
                        <h3 className="text-2xl font-bold mb-2">Altri giochi in arrivo!</h3>
                        <p className="text-muted-foreground">
                            Stiamo preparando nuove sorprese romantiche per voi... 💝
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Games;
