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
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          {/* Left Section: Angels + Content */}
          <div className="flex flex-col sm:flex-row flex-[1.6]">
            {/* Left Image - hidden on mobile, visible on sm+ */}
            <div className="hidden sm:block sm:w-[35%] lg:w-[40%]">
              <img src={newsletterAngels} alt="Angels with laptop" className="w-full h-full object-cover" />
            </div>

            {/* Center Content */}
            <div className="flex-1 bg-cream-dark p-6 sm:p-8 md:p-12 flex flex-col justify-center">
              <h2 className="italic text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug sm:leading-relaxed mb-3 sm:mb-4 font-semibold font-serif">
                The ancients foretold<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>thy struggles
              </h2>
              <p className="font-sans text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                Receive their wisdom weekly in your inbox.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <label className="block text-xs font-sans font-medium tracking-widest uppercase text-muted-foreground mb-1 sm:mb-2">
                  Enter Email
                </label>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <input 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="receive daily disappointments" 
                    className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-border text-sm font-sans placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
                    required 
                  />
                  <button 
                    type="submit" 
                    className="px-5 sm:px-6 py-2.5 sm:py-3 text-primary-foreground text-xs sm:text-sm font-sans font-medium tracking-wider uppercase hover:bg-burnt-orange-dark transition-colors duration-300 bg-burnt-orange"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Image with Overlay */}
          <div className="lg:w-[25%] relative min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]">
            <img src={newsletterLandscape} alt="Renaissance landscape" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8">
              <p className="text-[10px] sm:text-xs font-sans tracking-widest uppercase text-warm-white/80 mb-1 sm:mb-2">
                Deflated Affirmations
              </p>
              <p className="font-display italic text-lg sm:text-xl md:text-2xl text-warm-white leading-snug sm:leading-relaxed">
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