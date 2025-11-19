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
            <p className="text-lg md:text-2xl font-playfair text-foreground leading-relaxed">
              A te che sei la persona migliore che potessi chiedere al mio fianco, a te che mi ascolti sempre senza mai farmi sentire giudicata, a te che sei la prima persona con cui riesco ad essere al 100% me stessa, a te voglio dire che so che non sono perfetta ma prometto che non ci sarà giorno in cui non proverò a migliorarmi per il nostro futuro e per dei papabili mini noi
            </p>
            <p className="text-xl md:text-2xl font-semibold text-accent mt-6">
              Buon anniversario amore
            </p>
            <p className="text-2xl md:text-3xl font-script text-foreground mt-4 font-semibold">
              Ti amo per sempre e anche dopo
            </p>
          </Card>
        )}
      </div>
    </section>
  );
};

export default SurpriseSection;
