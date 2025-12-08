import { useState } from "react";
import { Play, Pause, Music, Heart } from "lucide-react";

const songs = [
  {
    id: 0,
    title: "Ordinary",
    artist: "Artista",
    description: "Una delle nostre canzoni speciali",
    spotifyUrl: "https://open.spotify.com/embed/track/2eAZfqOm4EnOF9VvN50Tyc?utm_source=generator",
  },
  {
    id: 1,
    title: "Sola",
    artist: "Artista",
    description: "La canzone che ci emoziona sempre",
    spotifyUrl: "https://open.spotify.com/embed/track/5MxNLUsfh7uzROypsoO5qe?utm_source=generator",
  },
  {
    id: 2,
    title: "Rivivere",
    artist: "Artista",
    description: "Ogni volta che la sento penso a te",
    spotifyUrl: "https://open.spotify.com/embed/track/1GWKxhaIvhOF0pGKlXaKIF?utm_source=generator",
  },
  {
    id: 3,
    title: "Toro Loco",
    artist: "Artista",
    description: "La nostra energia insieme",
    spotifyUrl: "https://open.spotify.com/embed/track/18yTgk0VgjB9DPOLgn1Kbp?utm_source=generator",
  },
  {
    id: 4,
    title: "Piccola Stella",
    artist: "Artista",
    description: "Tu sei la mia piccola stella",
    spotifyUrl: "https://open.spotify.com/embed/track/60jFaQV7Z4boGC4ob5B5c6?utm_source=generator",
  },
  {
    id: 5,
    title: "Neon",
    artist: "Artista",
    description: "Brilliamo insieme come luci al neon",
    spotifyUrl: "https://open.spotify.com/embed/track/6Im9k8u9iIzKMrmV7BWtlF?utm_source=generator",
  },
  {
    id: 6,
    title: "Battito",
    artist: "Artista",
    description: "Il battito del mio cuore per te",
    spotifyUrl: "https://open.spotify.com/embed/track/3ee8shdfOIncDb5LUdxOar?utm_source=generator",
  },
  {
    id: 7,
    title: "Pleasantville",
    artist: "Artista",
    description: "Il nostro mondo perfetto insieme",
    spotifyUrl: "https://open.spotify.com/embed/track/2KH4HmqwFKFjxMNOm4e0af?utm_source=generator",
  }
];

const PlaylistSection = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);

  const togglePlay = (id: number) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6">
            <Music className="w-10 h-10 text-primary" />
            <Heart className="w-6 h-6 text-accent fill-accent animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Le Nostre Canzoni
          </h2>
          <p className="text-lg text-muted-foreground">
            La colonna sonora della nostra storia d'amore
          </p>
        </div>

        {/* Playlist Container */}
        <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
          {/* Playlist Header */}
          <div className="px-6 py-4 border-b border-border flex items-center gap-4 bg-muted/30">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary-foreground fill-primary-foreground" />
            </div>
            <div>
              <h3 className="text-foreground font-semibold">La Nostra Playlist</h3>
              <p className="text-muted-foreground text-sm">{songs.length} canzoni del cuore</p>
            </div>
          </div>

          {/* Songs List */}
          <div className="max-h-[600px] overflow-y-auto">
            {songs.map((song, index) => (
              <div key={song.id}>
                {/* Song Item */}
                <div
                  className={`group px-6 py-4 flex items-center gap-4 hover:bg-muted/50 transition-all duration-300 cursor-pointer ${
                    playingId === song.id ? "bg-primary/10" : ""
                  }`}
                  onClick={() => togglePlay(song.id)}
                >
                  {/* Number / Play Icon */}
                  <div className="w-10 flex-shrink-0 flex items-center justify-center">
                    {playingId === song.id ? (
                      <Pause className="w-5 h-5 text-primary fill-primary" />
                    ) : (
                      <>
                        <span className="text-muted-foreground text-sm group-hover:hidden">
                          #{String(index + 1).padStart(2, "0")}
                        </span>
                        <Play className="w-5 h-5 text-primary hidden group-hover:block" />
                      </>
                    )}
                  </div>

                  {/* Song Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-semibold truncate ${
                      playingId === song.id ? "text-primary" : "text-foreground"
                    }`}>
                      {song.title}
                    </h4>
                    <p className="text-muted-foreground text-sm truncate">{song.artist}</p>
                  </div>

                  {/* Description */}
                  <div className="hidden md:block flex-1 min-w-0">
                    <p className="text-muted-foreground text-sm truncate italic">
                      "{song.description}"
                    </p>
                  </div>

                  {/* Play indicator */}
                  {playingId === song.id && (
                    <div className="flex items-center gap-1">
                      <span className="w-1 h-3 bg-primary rounded-full animate-pulse" />
                      <span className="w-1 h-4 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.1s" }} />
                      <span className="w-1 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
                    </div>
                  )}
                </div>

                {/* Spotify Player (shown when playing) */}
                {playingId === song.id && (
                  <div className="px-6 pb-4 animate-fade-in">
                    <div className="bg-muted/30 rounded-xl p-4 border border-border">
                      <iframe
                        style={{ borderRadius: "12px" }}
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
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            <Heart className="w-4 h-4 text-accent fill-accent" />
            Ogni canzone racconta un pezzo di noi
            <Heart className="w-4 h-4 text-accent fill-accent" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlaylistSection;
