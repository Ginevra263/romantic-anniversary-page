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
        {/* Quote */}
        <div className="mb-12">
          <Heart className="w-16 h-16 mx-auto mb-8 text-accent fill-accent animate-pulse" />
          
          <blockquote className="text-2xl md:text-3xl text-script text-primary leading-relaxed mb-6">
            "In ogni mio respiro, in ogni battito del mio cuore,<br />
            ci sei tu, oggi e per sempre."
          </blockquote>
        </div>

        {/* Signature */}
        <div className="mb-16">
          <div className="inline-block bg-card px-12 py-8 rounded-2xl soft-shadow">
            <div className="text-4xl text-script text-accent mb-2">
              Con tutto il mio amore
            </div>
            <div className="flex items-center justify-center gap-2 text-primary">
              <Heart className="w-5 h-5 fill-accent text-accent" />
              <Heart className="w-6 h-6 fill-accent text-accent" />
              <Heart className="w-5 h-5 fill-accent text-accent" />
            </div>
          </div>
        </div>

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
