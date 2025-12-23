import { useState } from 'react';
import { ArrowLeft, ArrowRight, RotateCw } from 'lucide-react';
import cardSunflower from '@/assets/card-sunflower.png';
import cardMirror from '@/assets/card-mirror.png';
import cardWine from '@/assets/card-wine.png';

interface Card {
  id: number;
  frontImage: string;
  backText: string;
}

const cards: Card[] = [
  {
    id: 1,
    frontImage: cardSunflower,
    backText: "Your potential is as fleeting as that bubble you are blowing.",
  },
  {
    id: 2,
    frontImage: cardMirror,
    backText: "The mirror does not lie. But maybe you should.",
  },
  {
    id: 3,
    frontImage: cardWine,
    backText: "Wine helps. But not that much.",
  },
];

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    
    if (diff === 0) {
      return {
        transform: 'translateX(0) rotate(0deg) scale(1)',
        zIndex: 30,
        opacity: 1,
      };
    } else if (diff === -1 || (currentIndex === 0 && index === cards.length - 1)) {
      return {
        transform: 'translateX(-55%) rotate(-8deg) scale(0.9)',
        zIndex: 20,
        opacity: 1,
      };
    } else if (diff === 1 || (currentIndex === cards.length - 1 && index === 0)) {
      return {
        transform: 'translateX(55%) rotate(8deg) scale(0.9)',
        zIndex: 20,
        opacity: 1,
      };
    }
    
    return {
      transform: 'translateX(0) scale(0.7)',
      zIndex: 10,
      opacity: 0,
    };
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
    setFlippedCards(new Set());
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    setFlippedCards(new Set());
  };

  const flipCard = () => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(currentIndex)) {
        newSet.delete(currentIndex);
      } else {
        newSet.add(currentIndex);
      }
      return newSet;
    });
  };

  return (
    <section className="py-16 md:py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Cards Container */}
        <div className="relative h-[450px] md:h-[550px] flex items-center justify-center">
          {/* Navigation Arrows */}
          <button
            onClick={prevCard}
            className="absolute left-0 md:left-8 z-40 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="Previous card"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            onClick={nextCard}
            className="absolute right-0 md:right-8 z-40 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="Next card"
          >
            <ArrowRight size={20} />
          </button>

          {/* Cards */}
          <div className="relative w-52 md:w-64 h-72 md:h-[420px]">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className="absolute inset-0 transition-all duration-500 ease-out perspective-1000"
                style={getCardStyle(index)}
              >
                <div
                  className={`relative w-full h-full preserve-3d transition-transform duration-700 ${
                    flippedCards.has(index) ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Front */}
                  <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src={card.frontImage}
                      alt="Affirmation card"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl bg-charcoal flex items-center justify-center p-6 shadow-2xl">
                    <p className="font-display italic text-lg md:text-xl text-warm-white text-center leading-relaxed">
                      &ldquo;{card.backText}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flip Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={flipCard}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-sans text-sm font-medium tracking-wider uppercase hover:bg-burnt-orange-dark transition-colors duration-300"
          >
            <RotateCw size={16} />
            Flip Card
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardCarousel;
