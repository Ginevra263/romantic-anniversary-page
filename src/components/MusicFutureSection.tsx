import { Music, Heart, Plane, Home, Camera, Sparkles } from "lucide-react";

interface Goal {
  icon: any;
  title: string;
  description: string;
}

const futureGoals: Goal[] = [
  {
    icon: Plane,
    title: "Viaggiare nel Mondo",
    description: "Esplorare nuove destinazioni e creare ricordi indimenticabili insieme",
  },
  {
    icon: Home,
    title: "Costruire Casa Nostra",
    description: "Creare uno spazio che rifletta i nostri sogni e la nostra storia",
  },
  {
    icon: Camera,
    title: "Catturare Ogni Momento",
    description: "Riempire album di foto con i nostri sorrisi e avventure",
  },
  {
    icon: Sparkles,
    title: "Crescere Insieme",
    description: "Sostenerci nei nostri sogni individuali mentre costruiamo il nostro futuro",
  },
];

const MusicFutureSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Music Section */}
        <div className="mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <Music className="w-12 h-12 mx-auto mb-6 text-accent" />
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Musica e Prossime Avventure
            </h2>
            <p className="text-xl text-muted-foreground">
              La nostra colonna sonora
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl soft-shadow max-w-2xl mx-auto">
            <div className="rounded-lg overflow-hidden">
              <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/track/6qqrTXSdwiJaq8SO0X2lSe?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Future Goals Section */}
        <div className="animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              I Nostri Prossimi Capitoli
            </h3>
            <p className="text-lg text-muted-foreground">
              Sogni da realizzare insieme
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {futureGoals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-8 rounded-2xl soft-shadow elegant-transition hover:romantic-shadow group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Heart className="w-6 h-6 text-accent fill-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                        <h4 className="text-xl font-bold text-primary">
                          {goal.title}
                        </h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicFutureSection;
