import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import heroImage from "@/assets/hero-couple.jpg";

const HeroSection = () => {
  const scrollToTimeline = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-20 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <Heart className="w-16 h-16 mx-auto mb-6 text-accent fill-accent" />

          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Il Nostro Primo Capitolo
          </h1>

          <div className="text-2xl md:text-3xl text-accent font-semibold mb-8 tracking-wide">
            365 giorni di noi
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Un anno di amore, crescita e tante risate
          </p>

          <Button
            size="lg"
            onClick={scrollToTimeline}
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-medium rounded-full elegant-transition romantic-shadow group"
          >
            SCOPRI LA SORPRESA
            <Heart className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
          </Button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
