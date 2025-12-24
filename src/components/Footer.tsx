import footerVermeer from '@/assets/footer-vermeer.jpg';

const Footer = () => {
  return (
    <footer className="text-warm-white bg-burnt-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-12 gap-6 sm:gap-4 md:gap-6 lg:gap-8">
          {/* Navigation Column */}
          <div className="col-span-1 sm:col-span-1 md:col-span-2">
            <h4 className="text-[10px] sm:text-xs font-sans font-medium tracking-widest uppercase text-warm-white/60 mb-3 sm:mb-4">
              Navigation
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a href="#" className="text-xs sm:text-sm font-sans text-warm-white/80 hover:text-warm-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#custom-card" className="text-xs sm:text-sm font-sans text-warm-white/80 hover:text-warm-white transition-colors">
                  Custom Card
                </a>
              </li>
              <li>
                <a href="#merch" className="text-xs sm:text-sm font-sans text-warm-white/80 hover:text-warm-white transition-colors">
                  Merch
                </a>
              </li>
              <li>
                <a href="#contact" className="text-xs sm:text-sm font-sans text-warm-white/80 hover:text-warm-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div className="col-span-1 sm:col-span-1 md:col-span-2">
            <h4 className="text-[10px] sm:text-xs font-sans font-medium tracking-widest uppercase text-warm-white/60 mb-3 sm:mb-4">
              About
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a href="#" className="text-xs sm:text-sm font-sans text-warm-white/80 hover:text-warm-white transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm font-sans text-warm-white/80 hover:text-warm-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm font-sans text-warm-white/80 hover:text-warm-white transition-colors">
                  Business
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm font-sans text-warm-white/80 hover:text-warm-white transition-colors">
                  Collaborations
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="col-span-1 sm:col-span-1 md:col-span-2">
            <h4 className="text-[10px] sm:text-xs font-sans font-medium tracking-widest uppercase text-warm-white/60 mb-3 sm:mb-4">
              Connect With Us
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a href="#" className="text-xs sm:text-sm font-sans text-warm-white/80 hover:text-warm-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm font-sans text-warm-white/80 hover:text-warm-white transition-colors">
                  Youtube
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm font-sans text-warm-white/80 hover:text-warm-white transition-colors">
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm font-sans text-warm-white/80 hover:text-warm-white transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Image and Status Card - aligned with top of columns */}
          <div className="col-span-1 sm:col-span-1 md:col-span-6 relative rounded-lg overflow-hidden h-24 sm:h-28 md:h-32 lg:h-36 self-start">
            {/* Background Image */}
            <img 
              alt="Vermeer style portrait" 
              src="/lovable-uploads/43b96dc9-edd4-4990-bdb6-0f6e39aab1f2.png" 
              className="absolute inset-0 w-full h-full object-cover object-left z-0" 
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-start text-left p-2 sm:p-3 md:p-4 lg:p-6">
              <p className="font-display italic text-xs sm:text-sm md:text-base lg:text-xl text-warm-white leading-snug mb-1 sm:mb-1.5 md:mb-2">
                All systems are<br />functioning normally
              </p>
              <a href="#" className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs font-sans text-warm-white/80 hover:text-warm-white transition-colors inline-flex items-center gap-0.5 sm:gap-1">
                Check back later
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-warm-white/10">
          <p className="text-[10px] sm:text-xs font-sans text-warm-white/40">
            © DEFLATED AFFIRMATIONS 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;