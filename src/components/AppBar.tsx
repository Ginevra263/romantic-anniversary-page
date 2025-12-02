import { Link, useLocation } from "react-router-dom";
import { Heart, Gamepad2, Home, Camera } from "lucide-react";
import { cn } from "@/lib/utils";

const AppBar = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2">
                        <Heart className="w-6 h-6 text-primary animate-pulse" fill="currentColor" />
                        <span className="text-xl font-script font-bold text-primary">
                            Anniversary
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link
                            to="/anniversary"
                            className={cn(
                                "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300",
                                isActive("/anniversary")
                                    ? "bg-primary text-primary-foreground shadow-md"
                                    : "hover:bg-accent/10 text-foreground/80"
                            )}
                        >
                            <Home className="w-4 h-4" />
                            <span className="font-medium">Home</span>
                        </Link>

                        <Link
                            to="/games"
                            className={cn(
                                "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300",
                                isActive("/games")
                                    ? "bg-primary text-primary-foreground shadow-md"
                                    : "hover:bg-accent/10 text-foreground/80"
                            )}
                        >
                            <Gamepad2 className="w-4 h-4" />
                            <span className="font-medium">Giochi</span>
                        </Link>

                        <Link
                            to="/gallery"
                            className={cn(
                                "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300",
                                isActive("/gallery")
                                    ? "bg-primary text-primary-foreground shadow-md"
                                    : "hover:bg-accent/10 text-foreground/80"
                            )}
                        >
                            <Camera className="w-4 h-4" />
                            <span className="font-medium">Galleria</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default AppBar;
