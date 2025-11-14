import { Music } from "lucide-react";

const MusicFutureSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Music Section */}
        <div className="mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <Music className="w-12 h-12 mx-auto mb-6 text-accent" />
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              La nostra canzone
            </h2>
            <p className="text-xl text-muted-foreground">
              la colonna sonora del nostro amore
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

      </div>
    </section>
  );
};

export default MusicFutureSection;
