import { Mouse } from 'lucide-react';
import heroImage from '@/assets/hero-angels.jpg';

const Hero = () => {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Renaissance angels on clouds with rainbow" 
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="font-display italic text-3xl md:text-4xl lg:text-5xl text-charcoal max-w-2xl leading-relaxed animate-fade-in-up">
          Lowering expectations, one<br />affirmation at a time
        </h1>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-scroll">
          <div className="w-6 h-10 border-2 border-charcoal/60 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-charcoal/60 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
