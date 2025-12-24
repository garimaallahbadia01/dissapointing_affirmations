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
            <img src={logo} alt="Deflated Affirmations" className="h-5 sm:h-6 md:h-7 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#merch" className="text-sm font-sans tracking-[0.1em] uppercase transition-colors font-normal text-[#412c0b] hover:text-[#AD4F21]">
              Merch
            </a>
            <a href="#custom-card" className="text-sm font-sans tracking-[0.1em] uppercase transition-colors font-normal text-[#412c0b] hover:text-[#AD4F21]">
              Custom Card
            </a>
            <a href="#about" className="text-sm font-sans tracking-[0.1em] uppercase transition-colors font-normal text-[#412c0b] hover:text-[#AD4F21]">
              About
            </a>
          </div>

          {/* Contact Button */}
          <button className="hidden md:block px-4 lg:px-5 py-2 border-[#412d0b] text-[#412d0b] text-sm font-sans font-medium tracking-[0.1em] uppercase hover:bg-burnt-orange hover:border-burnt-orange hover:text-primary-foreground transition-all duration-300 bg-transparent border">
            Contact Us
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 -mr-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-4 border-t border-border pt-4 space-y-3">
            <a 
              href="#merch" 
              className="block text-sm font-sans font-medium tracking-[0.1em] uppercase text-[#412c0b] hover:text-[#AD4F21] transition-colors py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Merch
            </a>
            <a 
              href="#custom-card" 
              className="block text-sm font-sans font-medium tracking-[0.1em] uppercase text-[#412c0b] hover:text-[#AD4F21] transition-colors py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Custom Card
            </a>
            <a 
              href="#about" 
              className="block text-sm font-sans font-medium tracking-[0.1em] uppercase text-[#412c0b] hover:text-[#AD4F21] transition-colors py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <button className="w-full mt-2 px-5 py-2.5 bg-burnt-orange text-primary-foreground text-sm font-sans font-medium tracking-[0.1em] uppercase hover:bg-burnt-orange-dark transition-all duration-300">
              Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;