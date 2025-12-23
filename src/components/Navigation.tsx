import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Deflated Affirmations" className="h-6 md:h-7 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#merch" className="text-sm font-sans tracking-wider uppercase transition-colors font-normal text-[#412c0b]">
              Merch
            </a>
            <a href="#custom-card" className="text-sm font-sans tracking-wider uppercase transition-colors font-normal text-[#412c0b]">
              Custom Card
            </a>
            <a href="#about" className="text-sm font-sans tracking-wider uppercase transition-colors font-normal text-[#412c0b]">
              About
            </a>
          </div>

          {/* Contact Button */}
          <button className="hidden md:block px-5 py-2 border border-foreground text-sm font-sans font-medium tracking-wider uppercase hover:bg-foreground hover:text-background transition-all duration-300">
            Contact Us
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 space-y-4">
            <a href="#merch" className="block text-sm font-sans font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors">
              Merch
            </a>
            <a href="#custom-card" className="block text-sm font-sans font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors">
              Custom Card
            </a>
            <a href="#about" className="block text-sm font-sans font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <button className="w-full px-5 py-2 border border-foreground text-sm font-sans font-medium tracking-wider uppercase hover:bg-foreground hover:text-background transition-all duration-300">
              Contact Us
            </button>
          </div>}
      </div>
    </nav>;
};
export default Navigation;