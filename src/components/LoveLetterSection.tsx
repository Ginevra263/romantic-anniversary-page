import { Heart } from "lucide-react";

const LoveLetterSection = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Heart className="w-12 h-12 mx-auto mb-6 text-accent fill-accent" />
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Una Promessa per Sempre
          </h2>
        </div>

        <div className="bg-card p-10 md:p-16 rounded-3xl soft-shadow animate-fade-in">
          <div className="text-script text-2xl md:text-3xl text-center mb-8 text-primary">
            Amore mio,
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
            <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-accent first-letter:mr-2 first-letter:float-left">
              Quando penso a questo primo anno insieme, il mio cuore si riempie di gratitudine. 
              Hai portato nella mia vita una luce che non sapevo potesse esistere, trasformando 
              ogni giorno ordinario in un'avventura straordinaria.
            </p>

            <p>
              Ogni sorriso che condividiamo, ogni momento di silenzio confortevole, ogni risata 
              che riempie le nostre giornate - tutto questo è diventato la melodia della mia vita. 
              Sei il mio rifugio nelle tempeste e la mia energia nei momenti di quiete.
            </p>

            <p>
              In questo primo anno ho imparato che l'amore vero non è solo passione, ma è anche 
              pazienza, comprensione e crescita condivisa. Con te, ho scoperto una versione migliore 
              di me stesso, ispirato dalla tua forza, dalla tua gentilezza e dal tuo spirito luminoso.
            </p>

            <p>
              Questo anniversario non è solo la celebrazione di 365 giorni trascorsi insieme, 
              ma è la promessa di tutti i domani che costruiremo. Prometto di amarti nei giorni 
              di sole e in quelli di tempesta, di sostenerti nei tuoi sogni e di celebrare ogni 
              tuo successo come se fosse il mio.
            </p>

            <p className="text-xl text-primary font-semibold italic">
              Grazie per aver scelto di camminare al mio fianco. Ti amo oggi, domani e per sempre.
            </p>
          </div>

          <div className="text-script text-3xl text-right mt-12 text-accent">
            Per sempre tuo ❤️
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
