import { useState } from 'react';
import { toast } from 'sonner';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import newsletterAngels from '@/assets/newsletter-angels.png';
import newsletterLandscape from '@/assets/newsletter-landscape.png';

const Newsletter = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Welcome to the disappointment. Check your inbox soon.');
      setEmail('');
    }
  };
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-background">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-6">
          {/* Left Section: Angels + Content */}
          <div className="flex flex-col sm:flex-row md:flex-[1.6]">
            {/* Angels Image - shows on mobile as small strip, larger on tablet+ */}
            <div className="h-32 sm:h-auto sm:w-[30%] md:w-[35%] lg:w-[40%]">
              <img src={newsletterAngels} alt="Angels with laptop" className="w-full h-full object-cover object-top sm:object-center" />
            </div>

            {/* Center Content */}
            <div className="flex-1 bg-cream-dark p-5 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="italic text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground leading-snug sm:leading-relaxed mb-2 sm:mb-3 md:mb-4 font-semibold font-serif">
                The ancients foretold<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>thy struggles
              </h2>
              <p className="font-sans text-xs sm:text-sm md:text-base text-muted-foreground mb-4 sm:mb-5 md:mb-6">
                Receive their wisdom weekly in your inbox.
              </p>

              <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
                <label className="block text-[10px] sm:text-xs font-sans font-medium tracking-widest uppercase text-muted-foreground mb-1">
                  Enter Email
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="receive daily disappointments" 
                    className="flex-1 px-3 py-2 sm:py-2.5 bg-background border border-border text-xs sm:text-sm font-sans placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
                    required 
                  />
                  <button 
                    type="submit" 
                    className="px-4 sm:px-5 py-2 sm:py-2.5 text-primary-foreground text-xs font-sans font-medium tracking-wider uppercase hover:bg-burnt-orange-dark transition-colors duration-300 bg-burnt-orange"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Image with Overlay - smaller on tablet */}
          <div className="md:w-[30%] lg:w-[25%] relative h-40 sm:h-48 md:h-auto md:min-h-[200px]">
            <img src={newsletterLandscape} alt="Renaissance landscape" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 md:p-5 lg:p-6">
              <p className="text-[9px] sm:text-[10px] md:text-xs font-sans tracking-widest uppercase text-warm-white/80 mb-1">
                Deflated Affirmations
              </p>
              <p className="font-display italic text-sm sm:text-base md:text-lg lg:text-xl text-warm-white leading-snug">
                We are all just doing our mediocre best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;