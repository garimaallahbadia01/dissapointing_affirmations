import { useState } from 'react';
import { toast } from 'sonner';
import newsletterAngels from '@/assets/newsletter-angels.png';
import newsletterLandscape from '@/assets/newsletter-landscape.png';
import logoWhite from '@/assets/logo-white.png';
const Newsletter = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Welcome to the disappointment. Check your inbox soon.');
      setEmail('');
    }
  };
  return <section className="py-16 md:py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Image */}
          <div className="hidden lg:block lg:col-span-3">
            <img src={newsletterAngels} alt="Angels with laptop" className="w-full h-full object-cover" />
          </div>

          {/* Center Content */}
          <div className="lg:col-span-4 bg-cream-dark p-8 md:p-12 flex flex-col justify-center">
            <h2 className="font-display italic text-2xl md:text-3xl text-foreground leading-relaxed mb-4">
              The ancients foretold<br />thy struggles
            </h2>
            <p className="font-sans text-muted-foreground mb-8">
              Receive their wisdom weekly in your inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block text-xs font-sans font-medium tracking-[0.1em] uppercase text-muted-foreground mb-2">
                Enter Email
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="receive daily disappointments" className="flex-1 px-4 py-3 bg-background border border-border text-sm font-sans placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" required />
                <button type="submit" className="px-6 py-3 text-primary-foreground text-sm font-sans font-medium tracking-[0.1em] uppercase hover:bg-[#8a3f1a] transition-colors duration-300 bg-[#ab4f21]">
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Right Image with Overlay */}
          <div className="lg:col-span-4 relative min-h-[300px]">
            <img src={newsletterLandscape} alt="Renaissance landscape" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
              {/* Logo */}
              <img src={logoWhite} alt="Deflated Affirmations logo" className="h-4 w-auto object-contain object-left mb-2" />
              <p className="font-display italic text-xl md:text-2xl text-warm-white leading-relaxed">
                We are all just doing our mediocre best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Newsletter;