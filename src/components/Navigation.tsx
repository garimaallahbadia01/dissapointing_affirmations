import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Deflated Affirmations" className="h-5 sm:h-6 lg:h-7 w-auto" />
          </div>

          {/* Desktop Navigation - only on lg+ */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="#merch" className="text-xs xl:text-sm font-sans tracking-[0.1em] uppercase transition-colors font-normal text-[#412c0b] hover:text-[#AD4F21]">
              Merch
            </a>
            <a href="#custom-card" className="text-xs xl:text-sm font-sans tracking-[0.1em] uppercase transition-colors font-normal text-[#412c0b] hover:text-[#AD4F21]">
              Custom Card
            </a>
            <a href="#about" className="text-xs xl:text-sm font-sans tracking-[0.1em] uppercase transition-colors font-normal text-[#412c0b] hover:text-[#AD4F21]">
              About
            </a>
          </div>

          {/* Contact Button - only on lg+ */}
          <button className="hidden lg:block px-4 xl:px-5 py-2 border-[#412d0b] text-[#412d0b] text-xs xl:text-sm font-sans font-medium tracking-[0.1em] uppercase hover:bg-burnt-orange hover:border-burnt-orange hover:text-primary-foreground transition-all duration-300 bg-transparent border">
            Contact Us
          </button>

          {/* Hamburger Menu Button - visible on mobile + tablet */}
          <button 
            className="lg:hidden p-2 -mr-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile/Tablet Menu - cleaner layout */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 pb-4 border-t border-border pt-4">
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <a 
                href="#merch" 
                className="text-xs sm:text-sm font-sans font-medium tracking-[0.1em] uppercase text-[#412c0b] hover:text-[#AD4F21] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Merch
              </a>
              <a 
                href="#custom-card" 
                className="text-xs sm:text-sm font-sans font-medium tracking-[0.1em] uppercase text-[#412c0b] hover:text-[#AD4F21] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Custom Card
              </a>
              <a 
                href="#about" 
                className="text-xs sm:text-sm font-sans font-medium tracking-[0.1em] uppercase text-[#412c0b] hover:text-[#AD4F21] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-xs sm:text-sm font-sans font-medium tracking-[0.1em] uppercase text-[#412c0b] hover:text-[#AD4F21] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;