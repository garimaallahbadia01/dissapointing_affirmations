import footerVermeer from '@/assets/footer-vermeer.jpg';

const Footer = () => {
  return (
    <footer className="text-warm-white bg-burnt-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-12 gap-6 sm:gap-8 md:gap-12">
          {/* Navigation Column */}
          <div className="col-span-1 md:col-span-2">
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
          <div className="col-span-1 md:col-span-2">
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
          <div className="col-span-2 sm:col-span-1 md:col-span-2">
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

          {/* Image and Status Card */}
          <div className="col-span-2 sm:col-span-3 md:col-span-6 relative rounded-lg overflow-hidden h-28 sm:h-32 md:h-40 lg:h-48">
            {/* Background Image */}
            <img 
              alt="Vermeer style portrait" 
              src="/lovable-uploads/43b96dc9-edd4-4990-bdb6-0f6e39aab1f2.png" 
              className="absolute inset-0 w-full h-full object-cover object-left z-0" 
            />
            {/* Text Overlay - higher z-index */}
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-end text-right p-3 sm:p-4 md:p-6 lg:p-8">
              <p className="font-display italic text-sm sm:text-base md:text-lg lg:text-2xl text-warm-white leading-snug mb-1.5 sm:mb-2 md:mb-3">
                All systems are<br />functioning normally
              </p>
              <a href="#" className="text-[9px] sm:text-[10px] md:text-xs font-sans text-warm-white/80 hover:text-warm-white transition-colors inline-flex items-center gap-1">
                Check back later for updates
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