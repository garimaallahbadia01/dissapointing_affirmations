import { useState } from 'react';
import { ArrowLeft, ArrowRight, RotateCw } from 'lucide-react';
import cardSunflower from '@/assets/card-sunflower.png';
import cardMirror from '@/assets/card-mirror.png';
import cardWine from '@/assets/card-wine.png';
import cardHeadphones from '@/assets/card-headphones.png';
import cardBus from '@/assets/card-bus.png';
import cardBackTemplate from '@/assets/card-back-template.png';

interface Card {
  id: number;
  frontImage: string;
  backQuote: string;
  backPunchline: string;
}

const cards: Card[] = [{
  id: 1,
  frontImage: cardSunflower,
  backQuote: "The best is yet to come.",
  backPunchline: "Statistically unlikely, but we admire your optimism."
}, {
  id: 2,
  frontImage: cardMirror,
  backQuote: "You are loved.",
  backPunchline: "By your mother. Who is contractually obligated."
}, {
  id: 3,
  frontImage: cardWine,
  backQuote: "What doesn't kill you makes you stronger.",
  backPunchline: "Your life choices are really testing this theory."
}, {
  id: 4,
  frontImage: cardHeadphones,
  backQuote: "You've got this.",
  backPunchline: "You don't. But the confidence is endearing."
}, {
  id: 5,
  frontImage: cardBus,
  backQuote: "Follow your dreams.",
  backPunchline: "They're running away for a reason. Take the hint."
}];
const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    if (diff === 0) {
      return {
        transform: 'translateX(0) rotate(0deg) scale(1)',
        zIndex: 30,
        opacity: 1
      };
    } else if (diff === -1 || currentIndex === 0 && index === cards.length - 1) {
      return {
        transform: 'translateX(-55%) rotate(-8deg) scale(0.85)',
        zIndex: 20,
        opacity: 1
      };
    } else if (diff === 1 || currentIndex === cards.length - 1 && index === 0) {
      return {
        transform: 'translateX(55%) rotate(8deg) scale(0.85)',
        zIndex: 20,
        opacity: 1
      };
    }
    return {
      transform: 'translateX(0) scale(0.7)',
      zIndex: 10,
      opacity: 0
    };
  };
  const nextCard = () => {
    setCurrentIndex(prev => (prev + 1) % cards.length);
    setFlippedCards(new Set());
  };
  const prevCard = () => {
    setCurrentIndex(prev => (prev - 1 + cards.length) % cards.length);
    setFlippedCards(new Set());
  };
  const flipCard = () => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(currentIndex)) {
        newSet.delete(currentIndex);
      } else {
        newSet.add(currentIndex);
      }
      return newSet;
    });
  };
  return <section className="py-16 md:py-24 px-6 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Cards Container with Navigation */}
        <div className="relative flex items-center justify-center">
          {/* Navigation Arrows - positioned absolutely outside the card stack */}
          <button onClick={prevCard} className="absolute left-0 md:left-4 lg:left-8 z-40 w-12 h-12 rounded-full border border-[#412d0b]/30 bg-background/80 backdrop-blur-sm flex items-center justify-center text-[#412d0b] hover:bg-[#412d0b] hover:text-primary-foreground transition-all duration-300" aria-label="Previous card">
            <ArrowLeft size={20} />
          </button>

          {/* Cards */}
          <div className="relative w-72 md:w-80 lg:w-96 mx-16 md:mx-24 lg:mx-32">
            {cards.map((card, index) => <div 
              key={card.id} 
              className="transition-all duration-500 ease-out perspective-1000 cursor-pointer" 
              style={{
                ...getCardStyle(index),
                position: index === currentIndex ? 'relative' : 'absolute',
                inset: index === currentIndex ? undefined : 0
              }}
              onClick={() => {
                if (index === currentIndex) {
                  flipCard();
                }
              }}
            >
                <div className={`relative w-full preserve-3d transition-transform duration-700 ${flippedCards.has(index) ? 'rotate-y-180' : ''}`}>
                  {/* Front */}
                  <div className="backface-hidden rounded-xl overflow-hidden shadow-2xl">
                    <img src={card.frontImage} alt="Affirmation card" className="w-full h-auto" />
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden shadow-2xl">
                    <img src={cardBackTemplate} alt="Card back" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-10">
                      <h3 className="font-display italic text-2xl md:text-3xl text-charcoal text-center leading-tight mb-4">
                        {card.backQuote}
                      </h3>
                      <p className="font-sans text-sm md:text-base text-charcoal/80 text-center leading-relaxed max-w-[80%]">
                        {card.backPunchline}
                      </p>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>

          <button onClick={nextCard} className="absolute right-0 md:right-4 lg:right-8 z-40 w-12 h-12 rounded-full border border-[#412d0b]/30 bg-background/80 backdrop-blur-sm flex items-center justify-center text-[#412d0b] hover:bg-[#412d0b] hover:text-primary-foreground transition-all duration-300" aria-label="Next card">
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Flip Button */}
        <div className="flex justify-center mt-8">
          <button onClick={flipCard} className="flex items-center gap-2 px-6 py-3 text-primary-foreground font-sans text-sm font-medium tracking-[0.1em] uppercase hover:bg-burnt-orange-dark transition-colors duration-300 bg-burnt-orange">
            <RotateCw size={16} />
            Flip Card
          </button>
        </div>
      </div>
    </section>;
};
export default CardCarousel;