import { Button } from "@/components/ui/button";
import { HeartIcon, SparkleIcon, TwoHeartsIcon } from "@/components/CuteIcons";
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
        <div className="absolute inset-0 bg-gradient-to-b from-pink-50/85 via-background/75 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-20 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="relative w-28 h-28 mx-auto mb-6">
            <HeartIcon face className="w-28 h-28 animate-heartbeat drop-shadow-lg" />
            <SparkleIcon className="absolute -top-3 -right-6 w-10 h-10 animate-wiggle" />
            <TwoHeartsIcon className="absolute -bottom-2 -left-8 w-9 h-9 animate-float" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Il Nostro Primo Capitolo
          </h1>

          <div className="inline-block text-2xl md:text-3xl text-accent font-semibold mb-8 tracking-wide px-6 py-2 rounded-full bg-white/70 soft-shadow">
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
            <HeartIcon className="ml-2 w-6 h-6 group-hover:scale-125 transition-transform" />
          </Button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
