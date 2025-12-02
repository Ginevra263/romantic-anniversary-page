import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Gamepad2, Home, Camera, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const AppBar = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = (path: string) => location.pathname === path;

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        { path: "/anniversary", icon: Home, label: "Home" },
        { path: "/games", icon: Gamepad2, label: "Giochi" },
        { path: "/gallery", icon: Camera, label: "Galleria" },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <Heart className="w-6 h-6 text-primary animate-pulse" fill="currentColor" />
                            <span className="text-xl font-script font-bold text-primary">
                                Anniversary
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-4">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        className={cn(
                                            "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300",
                                            isActive(item.path)
                                                ? "bg-primary text-primary-foreground shadow-md"
                                                : "hover:bg-accent/10 text-foreground/80"
                                        )}
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span className="font-medium">{item.label}</span>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Mobile Burger Menu Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden text-primary hover:bg-primary/10"
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden animate-fade-in"
                    onClick={closeMobileMenu}
                />
            )}

            {/* Mobile Sidebar */}
            <div
                className={cn(
                    "fixed top-0 right-0 h-full w-64 bg-background border-l border-border shadow-2xl z-50 md:hidden transition-transform duration-300 ease-in-out",
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col h-full">
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between p-4 border-b border-border">
                        <div className="flex items-center gap-2">
                            <Heart className="w-5 h-5 text-primary animate-pulse" fill="currentColor" />
                            <span className="text-lg font-script font-bold text-primary">
                                Menu
                            </span>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={closeMobileMenu}
                            className="text-primary hover:bg-primary/10"
                        >
                            <X className="w-5 h-5" />
                        </Button>
                    </div>

                    {/* Sidebar Navigation */}
                    <div className="flex-1 overflow-y-auto py-6">
                        <div className="flex flex-col gap-2 px-4">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        onClick={closeMobileMenu}
                                        className={cn(
                                            "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300",
                                            isActive(item.path)
                                                ? "bg-primary text-primary-foreground shadow-md"
                                                : "hover:bg-accent/10 text-foreground/80"
                                        )}
                                    >
                                        <Icon className="w-5 h-5" />
                                        <span className="font-medium text-lg">{item.label}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Sidebar Footer */}
                    <div className="p-4 border-t border-border">
                        <div className="text-center">
                            <p className="text-sm text-muted-foreground">Fatto con</p>
                            <div className="flex items-center justify-center gap-1 mt-1">
                                <Heart className="w-4 h-4 text-primary animate-pulse" fill="currentColor" />
                                <span className="text-sm font-medium text-primary">amore</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppBar;
