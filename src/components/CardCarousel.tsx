import { useState } from 'react';
import { ArrowLeft, ArrowRight, RotateCw } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
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
  
  // Check if we're on mobile (show only 2 cards) or tablet+ (show 3 cards)
  const getCardStyle = (index: number, isMobile: boolean) => {
    const diff = index - currentIndex;
    const normalizedDiff = diff === 0 ? 0 : 
      (diff === -1 || (currentIndex === 0 && index === cards.length - 1)) ? -1 :
      (diff === 1 || (currentIndex === cards.length - 1 && index === 0)) ? 1 : null;

    if (normalizedDiff === 0) {
      return {
        transform: 'translateX(0) rotate(0deg) scale(0.95)',
        zIndex: 30,
        opacity: 1
      };
    } else if (normalizedDiff === -1) {
      return {
        transform: isMobile ? 'translateX(-55%) rotate(-5deg) scale(0.7)' : 'translateX(-62%) rotate(-6deg) scale(0.68)',
        zIndex: 20,
        opacity: 1
      };
    } else if (normalizedDiff === 1) {
      return {
        transform: isMobile ? 'translateX(55%) rotate(5deg) scale(0.7)' : 'translateX(62%) rotate(6deg) scale(0.68)',
        zIndex: 20,
        opacity: 1
      };
    }
    return {
      transform: 'translateX(0) scale(0.6)',
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
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  // Check window width for mobile detection
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-[12vh] xl:py-[14vh] 2xl:py-[16vh] px-4 sm:px-6 bg-background overflow-hidden flex items-center min-h-[auto] lg:min-h-[70vh] xl:min-h-[75vh]">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Cards Container with Navigation */}
        <div className="relative flex items-center justify-center">
          {/* Navigation Arrows */}
          <button
            onClick={prevCard}
            className="absolute left-0 sm:left-2 md:left-4 lg:left-8 z-40 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border border-[#412d0b]/30 bg-background/80 backdrop-blur-sm flex items-center justify-center text-[#412d0b] hover:bg-[#412d0b] hover:text-primary-foreground transition-all duration-300"
            aria-label="Previous card"
          >
            <ArrowLeft size={16} className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" />
          </button>

          {/* Cards */}
          <div className="relative w-36 sm:w-48 md:w-60 lg:w-72 mx-8 sm:mx-12 md:mx-16 lg:mx-20">
            {cards.map((card, index) => <div 
              key={card.id} 
              className="transition-all duration-500 ease-out perspective-1000 cursor-pointer" 
              style={{
                ...getCardStyle(index, isMobile),
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
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 xs:p-5 sm:p-6 md:p-8">
                      <h3 className="font-display italic text-base xs:text-lg sm:text-xl md:text-2xl text-charcoal text-center leading-tight mb-2 sm:mb-3">
                        {card.backQuote}
                      </h3>
                      <p className="font-sans text-[10px] xs:text-xs sm:text-sm text-charcoal/80 text-center leading-relaxed max-w-[90%] sm:max-w-[85%]">
                        {card.backPunchline}
                      </p>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>

          <button onClick={nextCard} className="absolute right-0 sm:right-2 md:right-4 lg:right-8 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#412d0b]/30 bg-background/80 backdrop-blur-sm flex items-center justify-center text-[#412d0b] hover:bg-[#412d0b] hover:text-primary-foreground transition-all duration-300" aria-label="Next card">
            <ArrowRight size={18} className="sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Flip Button */}
        <div className="flex justify-center mt-6 sm:mt-8">
          <button onClick={flipCard} className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-primary-foreground font-sans text-xs sm:text-sm font-medium tracking-[0.1em] uppercase hover:bg-burnt-orange-dark transition-colors duration-300 bg-burnt-orange hover-glow press-effect">
            <RotateCw size={14} className="sm:w-4 sm:h-4" />
            Flip Card
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardCarousel;