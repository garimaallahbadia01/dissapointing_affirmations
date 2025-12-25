import { useEffect, useState } from 'react';
import heroSky from '@/assets/hero-sky.png';
import angelLeft from '@/assets/angel-left-hires.png';
import angelRight from '@/assets/angel-right-hires.png';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[70svh] sm:h-[75svh] md:h-[85svh] lg:h-[100svh] min-h-[400px] sm:min-h-[450px] md:min-h-[520px] lg:min-h-[680px] overflow-hidden">
      {/* Background Sky - slowest parallax */}
      <div 
        className="absolute inset-0 -top-[10%] -bottom-[10%]" 
        style={{
          transform: `translate3d(0, ${scrollY * 0.3}px, 0)`
        }}
      >
        <img 
          src={heroSky} 
          alt="Renaissance sky with rainbow" 
          className="w-full h-full object-cover object-[center_25%] sm:object-[center_35%] md:object-center" 
          draggable={false} 
        />
      </div>

      {/* Left Angel - slides in from left on load, floats gently */}
      <div 
        className={`absolute left-0 top-1/2 h-[55%] sm:h-[60%] md:h-[70%] lg:h-[85%] xl:h-[90%] pointer-events-none ${
          isLoaded ? 'animate-slide-in-left' : 'opacity-0'
        }`}
        style={{ 
          transform: `translateY(calc(-50% + ${scrollY * 0.08}px))`,
        }}
      >
        <img 
          src={angelLeft} 
          alt="Angel with coffee" 
          className={`h-full w-auto object-contain ${isLoaded ? 'animate-float' : ''}`}
          style={{ animationDelay: '0.5s' }}
          draggable={false} 
        />
      </div>

      {/* Right Angel - slides in from right on load, floats gently (delayed) */}
      <div 
        className={`absolute right-0 top-1/2 h-[55%] sm:h-[60%] md:h-[70%] lg:h-[85%] xl:h-[90%] pointer-events-none ${
          isLoaded ? 'animate-slide-in-right animation-delay-200' : 'opacity-0'
        }`}
        style={{ 
          transform: `translateY(calc(-50% + ${scrollY * 0.08}px))`,
        }}
      >
        <img 
          src={angelRight} 
          alt="Angel with scroll" 
          className={`h-full w-auto object-contain ${isLoaded ? 'animate-float-delayed' : ''}`}
          draggable={false} 
        />
      </div>

      {/* Content */}
      <div 
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6" 
        style={{
          transform: `translate3d(0, ${scrollY * 0.4}px, 0)`
        }}
      >
        <h1 
          className={`font-display italic text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-charcoal max-w-[70%] sm:max-w-md md:max-w-lg lg:max-w-2xl leading-snug sm:leading-relaxed ${
            isLoaded ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'
          }`}
        >
          Lowering expectations, one
          <br />
          affirmation at a time
        </h1>

        {/* Scroll Indicator */}
        <div 
          className={`absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 ${
            isLoaded ? 'animate-fade-in-up animation-delay-500' : 'opacity-0'
          }`}
        >
          <div className="w-5 h-8 sm:w-6 sm:h-10 md:w-7 md:h-12 border border-charcoal/50 rounded-full flex items-start justify-center p-1.5 sm:p-2 animate-scroll">
            <div className="w-0.5 h-2 sm:h-2.5 md:h-3 bg-charcoal/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
