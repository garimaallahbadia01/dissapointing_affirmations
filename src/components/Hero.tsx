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
      {/* Background Sky - slowest parallax (extra bleed to prevent mobile stretching/gaps) */}
      <div className="absolute inset-0 -top-[10%] -bottom-[10%]" style={{
        transform: `translate3d(0, ${scrollY * 0.35}px, 0)`
      }}>
        <img src={heroSky} alt="Renaissance sky with rainbow" className="w-full h-full object-cover object-[center_25%] sm:object-[center_35%] md:object-center" draggable={false} />
      </div>

      {/* Left Angel - positioned at left edge, vertically centered */}
      <div 
        className={`absolute left-0 top-1/2 -translate-y-1/2 h-[55%] sm:h-[60%] md:h-[70%] lg:h-[85%] xl:h-[90%] pointer-events-none transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}
        style={{ transform: `translate3d(${isLoaded ? 0 : -64}px, calc(-50% + ${scrollY * 0.15}px), 0)` }}
      >
        <img src={angelLeft} alt="Angel with coffee" className="h-full w-auto object-contain" draggable={false} />
      </div>

      {/* Right Angel - positioned at right edge, vertically centered */}
      <div 
        className={`absolute right-0 top-1/2 -translate-y-1/2 h-[55%] sm:h-[60%] md:h-[70%] lg:h-[85%] xl:h-[90%] pointer-events-none transition-all duration-1000 ease-out delay-200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}
        style={{ transform: `translate3d(${isLoaded ? 0 : 64}px, calc(-50% + ${scrollY * 0.15}px), 0)` }}
      >
        <img src={angelRight} alt="Angel with scroll" className="h-full w-auto object-contain" draggable={false} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6" style={{
        transform: `translate3d(0, ${scrollY * 0.45}px, 0)`
      }}>
        <h1 className="font-display italic text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-charcoal max-w-[70%] sm:max-w-md md:max-w-lg lg:max-w-2xl leading-snug sm:leading-relaxed animate-fade-in-up">
          Lowering expectations, one
          <br />
          affirmation at a time
        </h1>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 animate-scroll">
          <div className="w-5 h-8 sm:w-6 sm:h-10 md:w-7 md:h-12 border border-charcoal/50 rounded-full flex items-start justify-center p-1.5 sm:p-2">
            <div className="w-0.5 h-2 sm:h-2.5 md:h-3 bg-charcoal/50 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;