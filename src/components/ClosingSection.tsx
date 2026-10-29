import { ArrowUp } from "lucide-react";
import { HeartIcon, TwoHeartsIcon } from "@/components/CuteIcons";
import { Button } from "@/components/ui/button";
import stitchLove from "@/assets/stitch_innamorato.png";

const ClosingSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className=" text-center animate-fade-in">
        {/* Stitch Love Image */}
        <div className="mb-8 flex justify-center">
          <img
            src={stitchLove}
            alt="Me + You equals love with Stitch"
            className="w-full h-auto rounded-3xl soft-shadow"
          />
        </div>

        {/* Back to Top */}
        <Button
          variant="ghost"
          onClick={scrollToTop}
          className="group rounded-full hover:bg-accent/10 text-accent font-medium"
        >
          <HeartIcon className="w-5 h-5 mr-2 group-hover:animate-heartbeat" />
          Torna all'inizio
          <ArrowUp className="w-4 h-4 ml-2 group-hover:-translate-y-1 transition-transform" />
        </Button>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Un anno insieme, infiniti ancora da vivere
            <TwoHeartsIcon className="w-6 h-6 animate-heartbeat" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
