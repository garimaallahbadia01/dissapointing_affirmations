import { useState } from 'react';
import { toast } from 'sonner';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import newsletterAngels from '@/assets/newsletter-angels.png';
import newsletterLandscape from '@/assets/newsletter-landscape.png';
const Newsletter = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation({
    threshold: 0.15
  });
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Welcome to the disappointment. Check your inbox soon.');
      setEmail('');
    }
  };
  return <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-background">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 lg:gap-6">
          {/* Left Section: Angels + Content */}
          <div className="flex flex-col sm:flex-row lg:flex-[1.6] overflow-hidden">
            {/* Angels Image (always visible) */}
            <div className="relative h-40 sm:h-auto sm:w-[30%] md:w-[32%] lg:w-[40%]">
              <img src={newsletterAngels} alt="Angels with laptop" className="w-full h-full object-cover object-[center_20%]" draggable={false} />
            </div>

            {/* Center Content */}
            <div className="flex-1 bg-cream-dark p-5 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="italic text-lg sm:text-xl md:text-[1.75rem] lg:text-3xl text-foreground leading-snug sm:leading-relaxed mb-2 sm:mb-3 md:mb-4 font-semibold font-serif">
                The ancients foretold thy struggles
              </h2>
              <p className="font-sans text-xs sm:text-sm md:text-base text-muted-foreground mb-4 sm:mb-5 md:mb-6">
                Receive their wisdom weekly in your inbox.
              </p>

              <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
                <label className="block text-[10px] sm:text-xs font-sans font-medium tracking-widest uppercase text-muted-foreground mb-1">
                  Enter Email
                </label>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="receive daily disappointments" className="flex-1 min-w-0 px-3 py-2.5 bg-background border border-border text-xs sm:text-sm font-sans placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" required />
                  <button type="submit" className="w-full sm:w-auto px-4 sm:px-5 py-2.5 text-primary-foreground text-xs font-sans font-medium tracking-wider uppercase hover:bg-burnt-orange-dark transition-colors duration-300 bg-burnt-orange">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Image with Overlay - stacks below on mobile/tablet, side-by-side on lg+ */}
          <div className="w-full lg:w-[25%] relative overflow-hidden rounded-md bg-muted">
            <div className="h-44 sm:h-48 md:h-52 lg:h-full lg:min-h-[220px]">
              <img src={newsletterLandscape} alt="Renaissance landscape" className="w-full h-full object-cover object-center" draggable={false} />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end items-end text-right p-3 sm:p-4 lg:p-6 gap-1 sm:gap-2">
              <p className="text-[9px] sm:text-[10px] md:text-xs font-sans tracking-widest uppercase text-warm-white/80">
                Deflated Affirmations
              </p>
              <p className="font-display italic text-base sm:text-lg lg:text-2xl text-warm-white leading-snug md:text-3xl">
                We are all just doing our mediocre best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Newsletter;