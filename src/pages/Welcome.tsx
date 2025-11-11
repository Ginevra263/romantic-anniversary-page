import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

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
          className="text-lg px-8 py-6 elegant-transition hover:scale-105"
        >
          <Heart className="w-5 h-5 mr-2" />
          Entra
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
