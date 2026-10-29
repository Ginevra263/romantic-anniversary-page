import { useState } from "react";
import AppBar from "@/components/AppBar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { CuteIcon, CameraIcon, HeartIcon, type CuteIconName } from "@/components/CuteIcons";
import FloatingHearts from "@/components/FloatingHearts";

// Import gallery images
import photo1 from "@/assets/gallery/photo_1_2025-12-02_15-11-05.jpg";
import photo2 from "@/assets/gallery/photo_2_2025-12-02_15-11-05.jpg";
import photo3 from "@/assets/gallery/photo_3_2025-12-02_15-11-05.jpg";
import photo4 from "@/assets/gallery/photo_4_2025-12-02_15-11-05.jpg";
import photo5 from "@/assets/gallery/photo_5_2025-12-02_15-11-05.jpg";
import photo6 from "@/assets/gallery/photo_6_2025-12-02_15-11-05.jpg";
import photo7 from "@/assets/gallery/photo_7_2025-12-02_15-11-05.jpg";
import photo8 from "@/assets/gallery/photo_8_2025-12-02_15-11-05.jpg";
import photo9 from "@/assets/gallery/photo_9_2025-12-02_15-11-05.jpg";
import photo10 from "@/assets/gallery/photo_10_2025-12-02_15-11-05.jpg";
import photo12 from "@/assets/gallery/photo_12_2025-12-02_15-11-05.jpg";
import photo13 from "@/assets/gallery/photo_13_2025-12-02_15-11-05.jpg";
import photo14 from "@/assets/gallery/photo_14_2025-12-02_15-11-05.jpg";
import photoFirenze from "@/assets/gallery/photo_2026-10-29_15-58-29.jpg";
import photoBarcellona from "@/assets/gallery/photo_2026-10-29_15-59-18.jpg";
import photoToscana from "@/assets/gallery/photo_2026-10-29_15-59-29.jpg";

type Photo = {
    id: number;
    src: string;
    caption: string;
    icon: CuteIconName;
    place?: string;
};

const photos: Photo[] = [
    { id: 1, src: photo1, caption: "Il nostro primo sorriso insieme", icon: "heart" },
    { id: 2, src: photo2, caption: "Un momento di pura felicità", icon: "sparkle" },
    { id: 3, src: photo3, caption: "Avventure che ricorderemo per sempre", icon: "star" },
    { id: 4, src: photo4, caption: "L'amore nei piccoli gesti", icon: "heartFace" },
    { id: 5, src: photo5, caption: "Guardando verso il nostro futuro", icon: "rainbow" },
    { id: 6, src: photo6, caption: "Risate che riempiono il cuore", icon: "smile" },
    { id: 7, src: photo7, caption: "Insieme è dove voglio essere", icon: "twoHearts" },
    { id: 8, src: photo8, caption: "Creando ricordi indimenticabili", icon: "camera" },
    { id: 9, src: photo9, caption: "Il tuo sorriso illumina le mie giornate", icon: "sun" },
    { id: 10, src: photo10, caption: "Ogni momento con te è speciale", icon: "flower" },
    { id: 11, src: photo12, caption: "Momenti di tenerezza infinita", icon: "heartFace" },
    { id: 12, src: photo13, caption: "Il nostro amore cresce ogni giorno", icon: "flower" },
    { id: 13, src: photo14, caption: "Per sempre insieme, per sempre innamorati", icon: "twoHearts" },
    { id: 14, src: photoFirenze, caption: "Baci e linguacce nella cabina delle foto", icon: "camera", place: "Firenze · 29.09.2025" },
    { id: 15, src: photoBarcellona, caption: "Un cuore sotto i mosaici di Gaudí", icon: "plane", place: "Barcellona · 5-7.05.2026" },
    { id: 16, src: photoToscana, caption: "Sole, mare e noi due", icon: "beach", place: "Toscana · 8-11.08.2026" },
];

const Gallery = () => {
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
    const [isHovered, setIsHovered] = useState<number | null>(null);

    const openLightbox = (photo: Photo) => {
        setSelectedPhoto(photo);
    };

    const closeLightbox = () => {
        setSelectedPhoto(null);
    };

    const goToPrevious = () => {
        if (!selectedPhoto) return;
        const currentIndex = photos.findIndex(p => p.id === selectedPhoto.id);
        const prevIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
        setSelectedPhoto(photos[prevIndex]);
    };

    const goToNext = () => {
        if (!selectedPhoto) return;
        const currentIndex = photos.findIndex(p => p.id === selectedPhoto.id);
        const nextIndex = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
        setSelectedPhoto(photos[nextIndex]);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20">
            <AppBar />

            <div className="pt-24 px-4 pb-20 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 animate-fade-in">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <CameraIcon className="w-12 h-12 animate-wiggle" />
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent">
                            I Nostri Ricordi
                        </h1>
                        <HeartIcon face className="w-12 h-12 animate-heartbeat" />
                    </div>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Una collezione dei nostri momenti più preziosi insieme.
                        Ogni foto è un pezzettino del nostro cuore.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {photos.map((photo, index) => (
                        <Card
                            key={photo.id}
                            className={cn(
                                "group overflow-hidden cursor-pointer transition-all duration-500 hover:romantic-shadow hover:-translate-y-2 hover:rotate-1",
                                "bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border-2 border-pink-100 hover:border-accent",
                                "animate-fade-in"
                            )}
                            style={{
                                animationDelay: `${index * 50}ms`
                            }}
                            onMouseEnter={() => setIsHovered(photo.id)}
                            onMouseLeave={() => setIsHovered(null)}
                            onClick={() => openLightbox(photo)}
                        >
                            <div className="relative aspect-square overflow-hidden">
                                <img
                                    src={photo.src}
                                    alt={photo.caption}
                                    className={cn(
                                        "w-full h-full object-cover transition-transform duration-700",
                                        isHovered === photo.id ? "scale-110" : "scale-100"
                                    )}
                                />
                                {photo.place && (
                                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 text-xs font-semibold text-primary shadow-sm">
                                        {photo.place}
                                    </span>
                                )}
                                <div className={cn(
                                    "absolute inset-0 bg-gradient-to-t from-pink-900/60 via-pink-700/20 to-transparent transition-opacity duration-300",
                                    isHovered === photo.id ? "opacity-100" : "opacity-0"
                                )}>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-300">
                                        <HeartIcon className="w-8 h-8 mb-2 animate-heartbeat" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 flex items-center justify-center gap-2">
                                <CuteIcon name={photo.icon} className="w-6 h-6 flex-shrink-0" />
                                <p className="text-sm text-center font-medium text-foreground/90 line-clamp-2">
                                    {photo.caption}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>

            </div>

            <FloatingHearts />

            {/* Lightbox Modal */}
            {selectedPhoto && (
                <div
                    className="fixed inset-0 z-50 bg-[#2a0f1c]/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <Button
                        size="icon"
                        variant="ghost"
                        className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full z-10"
                        onClick={closeLightbox}
                    >
                        <X className="w-6 h-6" />
                    </Button>

                    {/* Navigation Buttons */}
                    <Button
                        size="icon"
                        variant="ghost"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full z-10"
                        onClick={(e) => {
                            e.stopPropagation();
                            goToPrevious();
                        }}
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </Button>

                    <Button
                        size="icon"
                        variant="ghost"
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full z-10"
                        onClick={(e) => {
                            e.stopPropagation();
                            goToNext();
                        }}
                    >
                        <ChevronRight className="w-8 h-8" />
                    </Button>

                    {/* Image Container */}
                    <div
                        className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedPhoto.src}
                            alt={selectedPhoto.caption}
                            className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl animate-scale-in"
                        />
                        <div className="mt-6 text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl">
                            <p className="text-xl text-white font-medium flex items-center justify-center gap-3">
                                <CuteIcon name={selectedPhoto.icon} className="w-8 h-8 flex-shrink-0" />
                                {selectedPhoto.caption}
                                <HeartIcon className="w-7 h-7 flex-shrink-0 animate-heartbeat" />
                            </p>
                            {selectedPhoto.place && (
                                <p className="text-script text-2xl text-pink-200 mt-2">{selectedPhoto.place}</p>
                            )}
                            <p className="text-sm text-white/70 mt-2">
                                Foto {photos.findIndex(p => p.id === selectedPhoto.id) + 1} di {photos.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
