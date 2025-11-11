import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import romanticHearts from "@/assets/romantic-hearts.jpg";

const ClosingSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-3xl mx-auto text-center animate-fade-in">
        {/* Romantic Hearts GIF */}
        <div className="mb-8">
          <img 
            src={romanticHearts} 
            alt="Romantic hearts animation" 
            className="w-64 h-auto mx-auto rounded-2xl soft-shadow"
          />
        </div>

        {/* Back to Top */}
        <Button
          variant="ghost"
          onClick={scrollToTop}
          className="group hover:bg-accent/10 text-accent font-medium"
        >
          <Heart className="w-4 h-4 mr-2 group-hover:animate-pulse" />
          Torna all'inizio
          <ArrowUp className="w-4 h-4 ml-2 group-hover:-translate-y-1 transition-transform" />
        </Button>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            Un anno insieme, infiniti ancora da vivere ❤️
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
