import footerVermeer from '@/assets/footer-vermeer.jpg';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-warm-white">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12">
          {/* Navigation Column */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-xs font-sans font-medium tracking-widest uppercase text-warm-white/60 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm font-sans text-warm-white/80 hover:text-warm-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#custom-card" className="text-sm font-sans text-warm-white/80 hover:text-warm-white transition-colors">
                  Custom Card
                </a>
              </li>
              <li>
                <a href="#merch" className="text-sm font-sans text-warm-white/80 hover:text-warm-white transition-colors">
                  Merch
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm font-sans text-warm-white/80 hover:text-warm-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-xs font-sans font-medium tracking-widest uppercase text-warm-white/60 mb-4">
              About
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm font-sans text-warm-white/80 hover:text-warm-white transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-sans text-warm-white/80 hover:text-warm-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-sans text-warm-white/80 hover:text-warm-white transition-colors">
                  Business
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-sans text-warm-white/80 hover:text-warm-white transition-colors">
                  Collaborations
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="text-xs font-sans font-medium tracking-widest uppercase text-warm-white/60 mb-4">
              Connect With Us
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm font-sans text-warm-white/80 hover:text-warm-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-sans text-warm-white/80 hover:text-warm-white transition-colors">
                  Youtube
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-sans text-warm-white/80 hover:text-warm-white transition-colors">
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-sans text-warm-white/80 hover:text-warm-white transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-2" />

          {/* Image and Status */}
          <div className="col-span-2 md:col-span-4 flex flex-col items-end justify-between">
            <div className="flex items-end gap-4">
              <div className="w-24 h-32 md:w-32 md:h-40 overflow-hidden">
                <img
                  src={footerVermeer}
                  alt="Vermeer style portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-right">
                <p className="font-display italic text-lg md:text-xl text-warm-white leading-relaxed mb-2">
                  All systems are<br />functioning normally
                </p>
                <a 
                  href="#" 
                  className="text-xs font-sans text-primary hover:text-burnt-orange-light transition-colors inline-flex items-center gap-1"
                >
                  Check back later for updates
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-warm-white/10">
          <p className="text-xs font-sans text-warm-white/40">
            © DEFLATED AFFIRMATIONS 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
