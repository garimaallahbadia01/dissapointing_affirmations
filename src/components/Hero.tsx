import { useEffect, useState } from 'react';
import heroSky from '@/assets/hero-sky.png';
import angelLeft from '@/assets/angel-left.png';
import angelRight from '@/assets/angel-right.png';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[100svh] min-h-[500px] max-h-[900px] md:max-h-none overflow-hidden">
      {/* Background Sky - slowest parallax */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <img 
          src={heroSky} 
          alt="Renaissance sky with rainbow" 
          className="w-full h-[120%] object-cover object-top md:h-full md:object-center" 
        />
      </div>

      {/* Mobile: Angels positioned top and bottom */}
      {/* Left Angel - top left on mobile, bottom left on desktop */}
      <div 
        className="absolute left-0 top-0 md:top-auto md:bottom-0 h-[35%] sm:h-[40%] md:h-[70%] lg:h-[85%] pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <img 
          src={angelLeft} 
          alt="Angel with coffee" 
          className="h-full w-auto object-contain object-left-top md:object-left-bottom" 
        />
      </div>

      {/* Right Angel - bottom right on all sizes */}
      <div 
        className="absolute right-0 bottom-0 h-[35%] sm:h-[40%] md:h-[70%] lg:h-[85%] pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <img 
          src={angelRight} 
          alt="Angel with scroll" 
          className="h-full w-auto object-contain object-right-bottom" 
        />
      </div>

      {/* Content - faster parallax for depth effect */}
      <div 
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <h1 className="font-display italic text-xl sm:text-2xl md:text-4xl lg:text-6xl text-charcoal max-w-[85%] sm:max-w-xl md:max-w-2xl leading-snug sm:leading-relaxed animate-fade-in-up">
          Lowering expectations, one<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>affirmation at a time
        </h1>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 animate-scroll">
          <div className="w-4 h-6 sm:w-5 sm:h-8 md:w-6 md:h-10 border-2 border-charcoal/60 rounded-full flex items-start justify-center p-0.5 sm:p-1">
            <div className="w-0.5 sm:w-1 h-1 sm:h-1.5 md:h-2 bg-charcoal/60 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;