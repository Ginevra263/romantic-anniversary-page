import { Button } from "@/components/ui/button";
import { HeartIcon, TwoHeartsIcon } from "@/components/CuteIcons";
import FloatingHearts from "@/components/FloatingHearts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Welcome = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [canClick, setCanClick] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleButtonHover = () => {
    if (!canClick) {
      // Sposta il bottone in una posizione casuale
      const randomX = Math.random() * 200 - 100; // tra -100 e 100
      const randomY = Math.random() * 200 - 100;
      setPosition({ x: randomX, y: randomY });
      setCanClick(true);
      
      // Mostra il messaggio
      toast({
        description: "Ups, prova ancora hehe",
        duration: 3500,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-accent/10 px-6">
      <FloatingHearts />
      <div className="max-w-2xl mx-auto text-center animate-fade-in">
        {/* Welcome Message */}
        <h1 className="text-6xl md:text-7xl font-script text-primary mb-8">
          Mao benvenuto hehe
        </h1>
        
        {/* Decorative Hearts */}
        <div className="flex justify-center gap-4 mb-12">
          <TwoHeartsIcon className="w-10 h-10 animate-float" />
          <HeartIcon face className="w-16 h-16 animate-heartbeat" />
          <TwoHeartsIcon className="w-10 h-10 animate-float-delayed" />
        </div>

        {/* Enter Button */}
        <Button
          size="lg"
          onClick={() => navigate('/anniversary')}
          onMouseEnter={handleButtonHover}
          className="text-lg px-8 py-6 rounded-full romantic-shadow elegant-transition hover:scale-105"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            transition: canClick ? 'transform 0.3s ease' : 'transform 0.2s ease',
          }}
        >
          <HeartIcon className="w-6 h-6 mr-2" />
          Entra
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
