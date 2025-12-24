import footerVermeer from '@/assets/footer-vermeer.jpg';
const Footer = () => {
  return <footer className="text-warm-white bg-burnt-orange">
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

          {/* Image and Status Card */}
          <div className="col-span-2 md:col-span-6 relative rounded-lg overflow-hidden h-40 md:h-48">
            {/* Background Image */}
            <img 
              alt="Vermeer style portrait" 
              src="/lovable-uploads/43b96dc9-edd4-4990-bdb6-0f6e39aab1f2.png" 
              className="absolute inset-0 w-full h-full object-cover object-left z-0" 
            />
            {/* Text Overlay - higher z-index */}
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-end text-right p-6 md:p-8">
              <p className="font-display italic text-lg md:text-2xl text-warm-white leading-relaxed mb-3">
                All systems are<br />functioning normally
              </p>
              <a href="#" className="text-xs font-sans text-warm-white/80 hover:text-warm-white transition-colors inline-flex items-center gap-1">
                Check back later for updates
                <span>→</span>
              </a>
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
    </footer>;
};
export default Footer;