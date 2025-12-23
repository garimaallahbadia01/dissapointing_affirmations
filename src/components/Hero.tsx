import heroSky from '@/assets/hero-sky.png';
import angelLeft from '@/assets/angel-left.png';
import angelRight from '@/assets/angel-right.png';
const Hero = () => {
  return <section className="relative w-full h-screen min-h-[500px] overflow-hidden">
      {/* Background Sky */}
      <div className="absolute inset-0">
        <img src={heroSky} alt="Renaissance sky with rainbow" className="w-full h-full object-cover object-center" />
      </div>

      {/* Left Angel */}
      <div className="absolute left-0 bottom-0 h-[70%] md:h-[80%] lg:h-[85%] pointer-events-none">
        <img src={angelLeft} alt="Angel with coffee" className="h-full w-auto object-contain object-left-bottom" />
      </div>

      {/* Right Angel */}
      <div className="absolute right-0 bottom-0 h-[70%] md:h-[80%] lg:h-[85%] pointer-events-none">
        <img src={angelRight} alt="Angel with scroll" className="h-full w-auto object-contain object-right-bottom" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="font-display italic text-3xl md:text-4xl text-charcoal max-w-2xl leading-relaxed animate-fade-in-up lg:text-6xl">
          Lowering expectations, one<br />affirmation at a time
        </h1>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-scroll">
          <div className="w-6 h-10 border-2 border-charcoal/60 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-charcoal/60 rounded-full" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;