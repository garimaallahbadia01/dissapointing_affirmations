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
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <section className="relative w-full h-[85svh] md:h-[90svh] lg:h-[100svh] min-h-[480px] md:min-h-[560px] lg:min-h-[680px] overflow-hidden">
      {/* Background Sky - slowest parallax (extra bleed to prevent mobile stretching/gaps) */}
      <div className="absolute inset-0 -top-[10%] -bottom-[10%]" style={{
      transform: `translate3d(0, ${scrollY * 0.2}px, 0)`
    }}>
        <img src={heroSky} alt="Renaissance sky with rainbow" className="w-full h-full object-cover object-[center_25%] sm:object-[center_35%] md:object-center" draggable={false} />
      </div>

      {/* Angels - slightly larger for parallax visibility */}
      <div className="absolute left-0 top-0 h-[28%] sm:h-[30%] md:h-[38%] lg:h-[50%] pointer-events-none" style={{
      transform: `translate3d(0, ${scrollY * 0.1}px, 0)`
    }}>
        <img src={angelLeft} alt="Angel with coffee" className="h-full w-auto object-contain object-left-top" draggable={false} />
      </div>

      <div className="absolute right-0 bottom-0 h-[28%] sm:h-[30%] md:h-[38%] lg:h-[50%] pointer-events-none" style={{
      transform: `translate3d(0, ${scrollY * 0.1}px, 0)`
    }}>
        <img src={angelRight} alt="Angel with scroll" className="h-full w-auto object-contain object-right-bottom" draggable={false} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6" style={{
      transform: `translate3d(0, ${scrollY * 0.25}px, 0)`
    }}>
        <h1 className="font-display italic text-xl sm:text-2xl lg:text-5xl xl:text-6xl text-charcoal max-w-[78%] sm:max-w-lg md:max-w-xl lg:max-w-2xl leading-snug sm:leading-relaxed animate-fade-in-up md:text-5xl">
          Lowering expectations, one
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          affirmation at a time
        </h1>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 animate-scroll">
          <div className="w-4 h-6 sm:w-5 sm:h-8 md:w-6 md:h-10 border-2 border-charcoal/60 rounded-full flex items-start justify-center p-0.5 sm:p-1">
            <div className="w-0.5 sm:w-1 h-1 sm:h-1.5 md:h-2 bg-charcoal/60 rounded-full" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;