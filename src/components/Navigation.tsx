import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="text-foreground"
            >
              <path 
                d="M12 4C10.5 4 9.5 5 9.5 6.5C9.5 8 10.5 9 12 9C13.5 9 14.5 8 14.5 6.5C14.5 5 13.5 4 12 4Z" 
                fill="currentColor"
              />
              <path 
                d="M7 10C5.5 10 4.5 11 4.5 12.5C4.5 14 5.5 15 7 15C8.5 15 9.5 14 9.5 12.5C9.5 11 8.5 10 7 10Z" 
                fill="currentColor"
              />
              <path 
                d="M17 10C15.5 10 14.5 11 14.5 12.5C14.5 14 15.5 15 17 15C18.5 15 19.5 14 19.5 12.5C19.5 11 18.5 10 17 10Z" 
                fill="currentColor"
              />
              <path 
                d="M12 16C10.5 16 9.5 17 9.5 18.5C9.5 20 10.5 21 12 21C13.5 21 14.5 20 14.5 18.5C14.5 17 13.5 16 12 16Z" 
                fill="currentColor"
              />
            </svg>
            <span className="font-sans text-sm font-semibold tracking-widest uppercase">
              Deflated Affirmations
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#merch" 
              className="text-sm font-sans font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              Merch
            </a>
            <a 
              href="#custom-card" 
              className="text-sm font-sans font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              Custom Card
            </a>
            <a 
              href="#about" 
              className="text-sm font-sans font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
          </div>

          {/* Contact Button */}
          <button className="hidden md:block px-5 py-2 border border-foreground text-sm font-sans font-medium tracking-wider uppercase hover:bg-foreground hover:text-background transition-all duration-300">
            Contact Us
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 space-y-4">
            <a 
              href="#merch" 
              className="block text-sm font-sans font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              Merch
            </a>
            <a 
              href="#custom-card" 
              className="block text-sm font-sans font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              Custom Card
            </a>
            <a 
              href="#about" 
              className="block text-sm font-sans font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <button className="w-full px-5 py-2 border border-foreground text-sm font-sans font-medium tracking-wider uppercase hover:bg-foreground hover:text-background transition-all duration-300">
              Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
