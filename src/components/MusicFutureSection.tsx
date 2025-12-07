import { Music, Heart } from "lucide-react";

// Array di canzoni romantiche con i nostri momenti speciali
const songs = [
  {
    id: 0,
    title: "La nostra canzone",
    moment: "Il nostro primo ballo",
    description: "Quella sera i nostri cuori hanno ballato all'unisono per la prima volta",
    spotifyUrl: "https://open.spotify.com/embed/track/6qqrTXSdwiJaq8SO0X2lSe?utm_source=generator",
  },
  {
    id: 1,
    title: "Il Primo Bacio",
    moment: "Quando tutto è iniziato",
    description: "Quella canzone che suonava quando ci siamo guardati negli occhi per la prima volta",
    spotifyUrl: "https://open.spotify.com/embed/track/5r9wBfbbK4JcZUEAGFg6su?utm_source=generator",
  },
  {
    id: 2,
    title: "Momenti Indimenticabili",
    moment: "I nostri ricordi più belli",
    description: "Ogni nota mi riporta a quei momenti magici vissuti insieme a te",
    spotifyUrl: "https://open.spotify.com/embed/track/2Kiojd0gMDcuUKXgwkXPkb?utm_source=generator",
  },
  {
    id: 3,
    title: "Sotto le Stelle",
    moment: "Le nostre notti romantiche",
    description: "La melodia che accompagna i nostri sogni e le nostre passeggiate notturne",
    spotifyUrl: "https://open.spotify.com/embed/track/4lTFQjsjvuxTTq4L9qe82c?utm_source=generator",
  },
  {
    id: 4,
    title: "Cuore a Cuore",
    moment: "Quando siamo lontani",
    description: "La canzone che mi fa sentire vicino a te anche quando siamo distanti",
    spotifyUrl: "https://open.spotify.com/embed/track/05GjY7oLDOgcXQPHpAdKNi?utm_source=generator",
  },
  {
    id: 5,
    title: "Insieme Per Sempre",
    moment: "La nostra promessa",
    description: "Le parole che descrivono il nostro futuro insieme, mano nella mano",
    spotifyUrl: "https://open.spotify.com/embed/track/0jkAr7eZsvWDLYiQCfaxak?utm_source=generator&theme=0",
  },
  {
    id: 6,
    title: "Danza dell'Amore",
    moment: "I nostri balli in cucina",
    description: "Quella canzone che ci fa ballare abbracciati in ogni momento",
    spotifyUrl: "https://open.spotify.com/embed/track/6bfy5e5jWNcNSFAJzsMPED?utm_source=generator&theme=0",
  },
  {
    id: 7,
    title: "Per Sempre Tuo",
    moment: "Il nostro futuro insieme",
    description: "Le melodie che accompagneranno tutti i nostri sogni e avventure future",
    spotifyUrl: "https://open.spotify.com/embed/track/4T7nI6RllPyFPXJtIAtC7l?utm_source=generator&theme=0",
  }
];

const MusicFutureSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <Music className="w-12 h-12 mx-auto mb-6 text-accent" />
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            La Nostra Playlist del Cuore
          </h2>
          <p className="text-xl text-muted-foreground">
            Ogni canzone racconta un momento del nostro viaggio insieme
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30 hidden md:block" />

          {/* Timeline Events */}
          <div className="space-y-16">
            {songs.map((song, index) => (
              <div
                key={song.id}
                className={`relative flex flex-col md:flex-row items-center gap-8 animate-fade-in ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content Card with Spotify Player */}
                <div className="flex-1 w-full">
                  <div
                    className={`bg-card p-8 rounded-2xl soft-shadow elegant-transition hover:romantic-shadow ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                      }`}
                  >
                    {/* Song Info */}
                    <div className="text-accent font-semibold text-sm mb-2 tracking-wide">
                      {song.moment}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-primary">
                      {song.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 italic">
                      "{song.description}"
                    </p>

                    {/* Spotify Player */}
                    <div className="rounded-lg overflow-hidden">
                      <iframe
                        style={{ borderRadius: '12px' }}
                        src={song.spotifyUrl}
                        width="100%"
                        height="152"
                        frameBorder="0"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Heart Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center romantic-shadow animate-pulse">
                    <Heart className="w-6 h-6 text-accent-foreground fill-accent-foreground" />
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom message */}
        <div className="text-center mt-20 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full border border-accent/30">
            <Heart className="w-5 h-5 text-accent fill-current animate-pulse" />
            <p className="text-lg font-medium text-foreground">
              Ogni nota è un battito del mio cuore per te
            </p>
            <Heart className="w-5 h-5 text-accent fill-current animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicFutureSection;
