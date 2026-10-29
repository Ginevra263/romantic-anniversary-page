import { useState, useEffect } from "react";
import { HeartIcon, PenguinIcon, SparkleIcon } from "@/components/CuteIcons";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

type CardType = {
  id: number;
  content: string | "heart" | "penguin";
  isFlipped: boolean;
  isMatched: boolean;
};

const MemoryGameSection = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const cardPairs = [
      { content: "mao" },
      { content: "ti amo" },
      { content: "heart" },
      { content: "penguin" },
    ];

    const duplicatedCards = [...cardPairs, ...cardPairs]
      .map((card, index) => ({
        ...card,
        id: index,
        isFlipped: false,
        isMatched: false,
      }))
      .sort(() => Math.random() - 0.5);

    setCards(duplicatedCards);
    setFlippedCards([]);
    setMoves(0);
    setIsComplete(false);
  };

  const handleCardClick = (index: number) => {
    if (
      flippedCards.length === 2 ||
      cards[index].isMatched ||
      cards[index].isFlipped ||
      flippedCards.includes(index)
    ) {
      return;
    }

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      checkMatch(newFlippedCards);
    }
  };

  const checkMatch = (flipped: number[]) => {
    const [first, second] = flipped;
    const firstCard = cards[first];
    const secondCard = cards[second];

    if (firstCard.content === secondCard.content) {
      setTimeout(() => {
        const newCards = [...cards];
        newCards[first].isMatched = true;
        newCards[second].isMatched = true;
        setCards(newCards);
        setFlippedCards([]);

        if (newCards.every((card) => card.isMatched)) {
          setIsComplete(true);
        }
      }, 500);
    } else {
      setTimeout(() => {
        const newCards = [...cards];
        newCards[first].isFlipped = false;
        newCards[second].isFlipped = false;
        setCards(newCards);
        setFlippedCards([]);
      }, 1000);
    }
  };

  const renderCardContent = (card: CardType) => {
    if (!card.isFlipped && !card.isMatched) {
      return <HeartIcon className="w-9 h-9" />;
    }

    if (card.content === "heart") {
      return <HeartIcon face className="w-14 h-14" />;
    }
    if (card.content === "penguin") {
      return <PenguinIcon className="w-14 h-14" />;
    }
    return <span className="text-xl font-bold text-primary">{card.content}</span>;
  };

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <SparkleIcon className="w-16 h-16 mx-auto mb-6 animate-wiggle" />
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Gioco Memory d'Amore
          </h2>
          <p className="text-xl text-muted-foreground mb-4 flex items-center justify-center gap-2">
            Trova tutte le coppie!
            <HeartIcon className="w-6 h-6" />
          </p>
          <p className="text-lg text-foreground/80">
            Mosse: <span className="font-bold text-primary">{moves}</span>
          </p>
        </div>

        {isComplete && (
          <div className="text-center mb-8 animate-fade-in">
            <Card className="p-6 rounded-3xl bg-gradient-to-r from-accent/20 to-primary/20">
              <p className="text-2xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
                Bravo! almeno a questo vinci hihi
                <HeartIcon face className="w-8 h-8" />
              </p>
              <p className="text-lg text-foreground/90 mb-4">
                Hai completato il gioco in {moves} mosse!
              </p>
              <button
                onClick={initializeGame}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
              >
                Gioca Ancora
              </button>
            </Card>
          </div>
        )}

        <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto animate-fade-in">
          {cards.map((card, index) => (
            <Card
              key={card.id}
              onClick={() => handleCardClick(index)}
              className={`
                aspect-square flex items-center justify-center cursor-pointer rounded-2xl
                transition-all duration-300 hover:scale-105 hover:-rotate-2
                ${card.isMatched ? "opacity-50 cursor-not-allowed" : ""}
                ${card.isFlipped || card.isMatched ? "bg-card" : "bg-gradient-to-br from-pink-100 to-rose-200"}
              `}
            >
              {renderCardContent(card)}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoryGameSection;
