import { useState } from "react";
import { Gift, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const SurpriseSection = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        {!isRevealed ? (
          <div className="animate-fade-in">
            <Gift className="w-16 h-16 mx-auto mb-8 text-accent animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Una Sorpresa per Te
            </h2>
            <Button
              onClick={() => setIsRevealed(true)}
              size="lg"
              className="text-xl px-8 py-6 hover-scale"
            >
              <Heart className="w-6 h-6 mr-2" />
              Schiaccia qui per una sorpresa
            </Button>
          </div>
        ) : (
          <Card className="p-12 animate-fade-in bg-gradient-to-br from-accent/10 to-primary/10">
            <Heart className="w-16 h-16 mx-auto mb-8 text-accent fill-accent animate-pulse" />
            <p className="text-2xl md:text-4xl font-bold text-foreground leading-relaxed">
              [Inserisci qui la tua dedica speciale per l'anno insieme] 💕
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mt-8">
              Con tutto il mio amore
            </p>
          </Card>
        )}
      </div>
    </section>
  );
};

export default SurpriseSection;
