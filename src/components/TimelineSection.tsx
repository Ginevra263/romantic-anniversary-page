import { CuteIcon, HeartIcon, type CuteIconName } from "@/components/CuteIcons";
import firenzePhoto from "@/assets/gallery/photo_2026-10-29_15-58-29.jpg";
import barcellonaPhoto from "@/assets/gallery/photo_2026-10-29_15-59-18.jpg";
import toscanaPhoto from "@/assets/gallery/photo_2026-10-29_15-59-29.jpg";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: CuteIconName;
  image?: string;
  place?: string;
  landscape?: boolean;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "Ottobre 2022",
    title: "Il Primo Incontro",
    description: "Il momento in cui quel ragazzo con il maglioncino bordeaux mi chiese cosa prendessi alle macchinette di discreto",
    icon: "cup",
  },
  {
    date: "Giugno 2023",
    title: "L'inizio di tutto",
    description: "La sera della mia festa che ha dato inizio alla nostra storia, strana ma bellissima",
    icon: "party",
  },
  {
    date: "Novembre 2023",
    title: "L'ostacolo",
    description: "Quel momento in cui mi sono allontanata e ho iniziato a frequentare un altro ragazzo",
    icon: "cloud",
  },
  {
    date: "Febbraio 2024",
    title: "La wake up call",
    description: "Quel momento in cui abbiamo vissuto la litigata che ha svoltato la nostra storia",
    icon: "sun",
  },
  {
    date: "Giugno 2024",
    title: "La dichiarazione",
    description: "Quel momento in cui hai deciso di aprirmi il tuo cuore e dirmi cosa provavi davvero",
    icon: "envelope",
  },
  {
    date: "Novembre 2024",
    title: "Finalmente insieme",
    description: "L'inizio della storia d'amore che ho sempre sognato",
    icon: "twoHearts",
  },
  {
    date: "29 Settembre 2025",
    title: "La nostra serata a Firenze",
    description: "Tutti eleganti, una cabina delle foto e quattro scatti tra baci e linguacce da custodire per sempre",
    icon: "camera",
    image: firenzePhoto,
    place: "Firenze",
  },
  {
    date: "Novembre 2025",
    title: "Il nostro primo anniversario",
    description: "Celebrando un anno insieme e guardando avanti a tutti quelli che verranno.",
    icon: "heartFace",
  },
  {
    date: "5 - 7 Maggio 2026",
    title: "Barcellona, noi due",
    description: "Tre giorni tra i mosaici di Gaudí, e un cuore fatto con le nostre mani sotto i soffitti di Park Güell",
    icon: "plane",
    image: barcellonaPhoto,
    place: "Barcellona",
  },
  {
    date: "8 - 11 Agosto 2026",
    title: "La nostra estate in Toscana",
    description: "Quattro giorni di mare, sabbia, capelli bagnati e sorrisi che sanno di sole",
    icon: "beach",
    image: toscanaPhoto,
    place: "Toscana",
    landscape: true,
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="relative py-24 px-6 bg-gradient-to-b from-background via-secondary/60 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <HeartIcon face className="w-16 h-16 mx-auto mb-4 animate-wiggle" />
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            La nostra storia
          </h2>
          <p className="text-xl text-muted-foreground">
            Dal 2022 a oggi, un ricordo alla volta
          </p>
        </div>

        <div className="relative">
          {/* Dotted love line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full border-l-4 border-dotted border-accent/40 hidden md:block" />

          {/* Timeline Events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-8 animate-fade-in ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content Card */}
                <div className="flex-1 w-full md:text-right md:pr-12">
                  <div
                    className={`cute-card p-8 elegant-transition hover:-translate-y-1 hover:romantic-shadow ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left md:pl-12 md:pr-0'
                    }`}
                  >
                    {event.image && (
                      <div
                        className={`relative inline-block mb-6 bg-white p-3 pb-12 rounded-md shadow-lg elegant-transition hover:rotate-0 hover:scale-[1.03] ${
                          index % 2 === 0 ? 'rotate-2' : '-rotate-2'
                        }`}
                      >
                        {/* Washi tape */}
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 -rotate-3 w-20 h-6 rounded-sm bg-accent/30 backdrop-blur-sm" />
                        <img
                          src={event.image}
                          alt={event.title}
                          loading="lazy"
                          className={`max-w-full object-cover rounded-sm ${event.landscape ? "w-80 aspect-[4/3]" : "w-64 aspect-[4/5]"}`}
                        />
                        <span className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-1.5 text-script text-2xl text-primary">
                          {event.place}
                          <HeartIcon className="w-5 h-5" />
                        </span>
                      </div>
                    )}
                    <div className="inline-block mb-3 px-4 py-1 rounded-full bg-accent/10 text-accent font-semibold text-sm tracking-wide">
                      {event.date}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-primary">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Cute marker */}
                <div className="relative z-10 flex-shrink-0 order-first md:order-none">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center romantic-shadow ring-4 ring-accent/20 elegant-transition hover:scale-110 hover:rotate-6">
                    <CuteIcon name={event.icon} className="w-10 h-10" />
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
