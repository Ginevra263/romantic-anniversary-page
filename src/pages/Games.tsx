import { useState } from "react";
import AppBar from "@/components/AppBar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CuteIcon, HeartIcon, SparkleIcon, StarIcon, GiftIcon, type CuteIconName } from "@/components/CuteIcons";
import FloatingHearts from "@/components/FloatingHearts";
import MemoryGame from "@/components/MemoryGame";
import DartsGame from "@/components/DartsGame";

type GameType = "menu" | "memory" | "darts";

interface GameInfo {
    id: string;
    title: string;
    description: string;
    icon: CuteIconName;
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
            icon: "penguin",
            gradient: "from-purple-300 to-pink-400",
            component: "memory"
        },
        {
            id: "darts",
            title: "Freccette dell'Amore",
            description: "Lancia freccette a forma di cuore! Gioco a 301 punti per 2 giocatori.",
            icon: "heartFace",
            gradient: "from-pink-400 to-rose-400",
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
        <div className="min-h-screen pb-20">
            <AppBar />
            <FloatingHearts />

            <div className="pt-24 px-4 max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 animate-fade-in">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <StarIcon className="w-14 h-14 animate-wiggle" />
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-rose-500 bg-clip-text text-transparent">
                            Giochi dell'Amore
                        </h1>
                        <SparkleIcon className="w-14 h-14 animate-heartbeat" />
                    </div>
                    <p className="text-muted-foreground text-lg flex items-center justify-center gap-2">
                        Scegli un gioco e sfida il tuo amore!
                        <HeartIcon className="w-6 h-6" />
                    </p>
                </div>

                {/* Games Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {games.map((game, index) => (
                        <Card
                            key={game.id}
                            className="group relative overflow-hidden rounded-[2rem] border-2 border-pink-100 hover:border-accent hover:-translate-y-1 hover:romantic-shadow transition-all duration-300 cursor-pointer"
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
                                    <div className={`p-5 rounded-full bg-gradient-to-br ${game.gradient} transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                                        <CuteIcon name={game.icon} className="w-16 h-16" />
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
                                        className={`w-full gap-2 rounded-full bg-gradient-to-r ${game.gradient} hover:shadow-xl hover:scale-105 transition-all duration-300 text-white border-none`}
                                    >
                                        <HeartIcon className="w-6 h-6" />
                                        Gioca Ora
                                    </Button>
                                </div>
                            </div>

                            {/* Decorative corner hearts */}
                            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                                <HeartIcon className="w-7 h-7" />
                            </div>
                            <div className="absolute bottom-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity">
                                <HeartIcon className="w-7 h-7" />
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Coming Soon Section */}
                <Card className="p-8 rounded-[2rem] border-2 border-pink-200 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-red-500/5 border-dashed">
                    <div className="text-center">
                        <GiftIcon className="w-14 h-14 mx-auto mb-4 animate-wiggle" />
                        <h3 className="text-2xl font-bold mb-2">Altri giochi in arrivo!</h3>
                        <p className="text-muted-foreground flex items-center justify-center gap-2">
                            Stiamo preparando nuove sorprese romantiche per voi...
                            <HeartIcon face className="w-6 h-6" />
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Games;
