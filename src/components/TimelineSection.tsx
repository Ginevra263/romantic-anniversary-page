import { Heart } from "lucide-react";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  image?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "Ottobre 2022",
    title: "Il Primo Incontro",
    description: "Il momento in cui quel ragazzo con il maglioncino bordeaux mi chiesi cosa prendessi alle macchinette di discreto",
  },
  {
    date: "Giugno 2023",
    title: "L'inizio di tutto",
    description: "La sera della mia festa che ha dato inizio ad una storia strana ma bellissima",
  },
  {
    date: "Novembre 2023",
    title: "L'ostacolo",
    description: "Io che mi allontano e inizio a parlare con un altro",
  },
  {
    date: "Febbraio 2024",
    title: "La wake up call",
    description: "La litigata che ha dato la svolta alla nostra storia",
  },
  {
    date: "Giugno 2024",
    title: "La dichiarazione",
    description: "Quel momento in cui hai deciso di aprirmi il tuo cuore e dirmi cosa provavi davvero",
  },
  {
    date: "Novembre 2024",
    title: "Finalmente insieme",
    description: "L'inizio della storia d'amore che ho sempre sognato",
  },
  {
    date: "Oggi",
    title: "Il nostro primo anniversario",
    description: "Celebrando un anno insieme e guardando avanti a tutti quelli che verranno.",
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            La nostra storia
          </h2>
          <p className="text-xl text-muted-foreground">
            Dal 2022 a oggi
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30 hidden md:block" />

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
                <div className="flex-1 md:text-right md:pr-12">
                  <div
                    className={`bg-card p-8 rounded-2xl soft-shadow elegant-transition hover:romantic-shadow ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left md:pl-12 md:pr-0'
                    }`}
                  >
                    <div className="text-accent font-semibold text-sm mb-2 tracking-wide">
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

                {/* Heart Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center romantic-shadow">
                    <Heart className="w-6 h-6 text-accent-foreground fill-accent-foreground" />
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
