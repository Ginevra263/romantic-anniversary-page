import { useState } from "react";
import { Play, Pause, Music, Heart } from "lucide-react";

const songs = [
  {
    id: 0,
    title: "La nostra canzone",
    artist: "La nostra storia",
    description: "Il nostro primo ballo insieme",
    spotifyUrl: "https://open.spotify.com/embed/track/6qqrTXSdwiJaq8SO0X2lSe?utm_source=generator",
  },
  {
    id: 1,
    title: "Il Primo Bacio",
    artist: "Momenti speciali",
    description: "Quando tutto è iniziato",
    spotifyUrl: "https://open.spotify.com/embed/track/5r9wBfbbK4JcZUEAGFg6su?utm_source=generator",
  },
  {
    id: 2,
    title: "Momenti Indimenticabili",
    artist: "I nostri ricordi",
    description: "Ogni nota mi riporta a quei momenti magici",
    spotifyUrl: "https://open.spotify.com/embed/track/2Kiojd0gMDcuUKXgwkXPkb?utm_source=generator",
  },
  {
    id: 3,
    title: "Sotto le Stelle",
    artist: "Notti romantiche",
    description: "La colonna sonora delle nostre passeggiate",
    spotifyUrl: "https://open.spotify.com/embed/track/4lTFQjsjvuxTTq4L9qe82c?utm_source=generator",
  },
  {
    id: 4,
    title: "Cuore a Cuore",
    artist: "Distanza e vicinanza",
    description: "Ci fa sentire vicini anche da lontano",
    spotifyUrl: "https://open.spotify.com/embed/track/05GjY7oLDOgcXQPHpAdKNi?utm_source=generator",
  },
  {
    id: 5,
    title: "Insieme Per Sempre",
    artist: "La nostra promessa",
    description: "Le parole del nostro futuro insieme",
    spotifyUrl: "https://open.spotify.com/embed/track/0jkAr7eZsvWDLYiQCfaxak?utm_source=generator&theme=0",
  },
  {
    id: 6,
    title: "Danza dell'Amore",
    artist: "Balli in cucina",
    description: "Quella che ci fa ballare abbracciati",
    spotifyUrl: "https://open.spotify.com/embed/track/6bfy5e5jWNcNSFAJzsMPED?utm_source=generator&theme=0",
  },
  {
    id: 7,
    title: "Per Sempre Tuo",
    artist: "Il nostro futuro",
    description: "Le melodie dei nostri sogni",
    spotifyUrl: "https://open.spotify.com/embed/track/4T7nI6RllPyFPXJtIAtC7l?utm_source=generator&theme=0",
  }
];

const PlaylistSection = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);

  const togglePlay = (id: number) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <section className="py-24 px-6 bg-[#0a0a0f]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6">
            <Music className="w-10 h-10 text-accent" />
            <Heart className="w-6 h-6 text-pink-400 fill-pink-400 animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Le Nostre Canzoni
          </h2>
          <p className="text-lg text-gray-400">
            La colonna sonora della nostra storia d'amore
          </p>
        </div>

        {/* Playlist Container */}
        <div className="bg-[#12121a] rounded-2xl border border-white/10 overflow-hidden">
          {/* Playlist Header */}
          <div className="px-6 py-4 border-b border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">La Nostra Playlist</h3>
              <p className="text-gray-400 text-sm">{songs.length} canzoni del cuore</p>
            </div>
          </div>

          {/* Songs List */}
          <div className="max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            {songs.map((song, index) => (
              <div key={song.id}>
                {/* Song Item */}
                <div
                  className={`group px-6 py-4 flex items-center gap-4 hover:bg-white/5 transition-all duration-300 cursor-pointer ${
                    playingId === song.id ? "bg-white/10" : ""
                  }`}
                  onClick={() => togglePlay(song.id)}
                >
                  {/* Number / Play Icon */}
                  <div className="w-10 flex-shrink-0 flex items-center justify-center">
                    {playingId === song.id ? (
                      <Pause className="w-5 h-5 text-accent fill-accent" />
                    ) : (
                      <>
                        <span className="text-gray-500 text-sm group-hover:hidden">
                          #{String(index + 1).padStart(2, "0")}
                        </span>
                        <Play className="w-5 h-5 text-white hidden group-hover:block" />
                      </>
                    )}
                  </div>

                  {/* Song Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-semibold truncate ${
                      playingId === song.id ? "text-accent" : "text-white"
                    }`}>
                      {song.title}
                    </h4>
                    <p className="text-gray-400 text-sm truncate">{song.artist}</p>
                  </div>

                  {/* Description */}
                  <div className="hidden md:block flex-1 min-w-0">
                    <p className="text-gray-500 text-sm truncate italic">
                      "{song.description}"
                    </p>
                  </div>

                  {/* Play indicator */}
                  {playingId === song.id && (
                    <div className="flex items-center gap-1">
                      <span className="w-1 h-3 bg-accent rounded-full animate-pulse" />
                      <span className="w-1 h-4 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.1s" }} />
                      <span className="w-1 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
                    </div>
                  )}
                </div>

                {/* Spotify Player (shown when playing) */}
                {playingId === song.id && (
                  <div className="px-6 pb-4 animate-fade-in">
                    <div className="bg-[#1a1a25] rounded-xl p-4 border border-white/5">
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
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
            Ogni canzone racconta un pezzo di noi
            <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlaylistSection;
