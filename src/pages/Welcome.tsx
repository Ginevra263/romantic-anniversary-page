import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Welcome = () => {
  const navigate = useNavigate();
  const [canClick, setCanClick] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleButtonHover = () => {
    if (!canClick) {
      // Sposta il bottone in una posizione casuale
      const randomX = Math.random() * 200 - 100; // tra -100 e 100
      const randomY = Math.random() * 200 - 100;
      setPosition({ x: randomX, y: randomY });
      setCanClick(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-accent/10 px-6">
      <div className="max-w-2xl mx-auto text-center animate-fade-in">
        {/* Welcome Message */}
        <h1 className="text-6xl md:text-7xl font-script text-primary mb-8">
          Mao benvenuto hehe
        </h1>
        
        {/* Decorative Hearts */}
        <div className="flex justify-center gap-4 mb-12">
          <Heart className="w-8 h-8 text-accent animate-pulse" fill="currentColor" />
          <Heart className="w-10 h-10 text-primary animate-pulse" fill="currentColor" style={{ animationDelay: '0.2s' }} />
          <Heart className="w-8 h-8 text-accent animate-pulse" fill="currentColor" style={{ animationDelay: '0.4s' }} />
        </div>

        {/* Enter Button */}
        <Button
          size="lg"
          onClick={() => navigate('/anniversary')}
          onMouseEnter={handleButtonHover}
          className="text-lg px-8 py-6 elegant-transition hover:scale-105"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            transition: canClick ? 'transform 0.3s ease' : 'transform 0.2s ease',
          }}
        >
          <Heart className="w-5 h-5 mr-2" />
          Entra
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
