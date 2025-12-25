import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
            <a href="#merch" className="text-xs xl:text-sm font-sans tracking-[0.1em] uppercase transition-colors font-normal text-[#412c0b] hover:text-[#AD4F21] hover:underline underline-offset-4">
              Merch
            </a>
            <a href="#custom-card" className="text-xs xl:text-sm font-sans tracking-[0.1em] uppercase transition-colors font-normal text-[#412c0b] hover:text-[#AD4F21] hover:underline underline-offset-4">
              Custom Card
            </a>
            <Link to="/about" className="text-xs xl:text-sm font-sans tracking-[0.1em] uppercase transition-colors font-normal text-[#412c0b] hover:text-[#AD4F21] hover:underline underline-offset-4">
              About
            </Link>
          </div>

          {/* Contact Button - only on lg+ */}
          <button className="hidden lg:block px-4 xl:px-5 py-2 border-[#412d0b] text-[#412d0b] text-xs xl:text-sm font-sans font-medium tracking-[0.1em] uppercase hover:bg-burnt-orange hover:border-burnt-orange hover:text-primary-foreground transition-all duration-300 bg-transparent border">
            Contact Us
          </button>

          {/* Hamburger Menu Button - visible on mobile + tablet */}
          <button 
            className="lg:hidden p-2 -mr-2 z-[60]" 
            onClick={toggleMenu} 
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu - slide-in panel from right */}
      {/* Backdrop */}
      <div 
        className={`lg:hidden fixed inset-0 bg-charcoal/50 z-40 transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />
      
      {/* Panel */}
      <div 
        className={`lg:hidden fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-background z-50 shadow-2xl transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button inside panel */}
        <div className="flex justify-end p-4 sm:p-6">
          <button 
            onClick={closeMenu}
            className="p-2"
            aria-label="Close menu"
          >
            <X size={24} className="text-foreground" />
          </button>
        </div>
        
        {/* Menu items - centered list */}
        <div className="flex flex-col items-center justify-center h-[calc(100%-80px)] gap-8">
          <a 
            href="#merch" 
            onClick={closeMenu} 
            className="text-lg sm:text-xl font-sans tracking-[0.15em] uppercase text-foreground hover:text-burnt-orange hover:underline underline-offset-4 transition-colors duration-200 font-normal"
          >
            Merch
          </a>
          <a 
            href="#custom-card" 
            onClick={closeMenu} 
            className="text-lg sm:text-xl font-sans tracking-[0.15em] uppercase text-foreground hover:text-burnt-orange hover:underline underline-offset-4 transition-colors duration-200 font-normal"
          >
            Custom Card
          </a>
          <Link 
            to="/about" 
            onClick={closeMenu} 
            className="text-lg sm:text-xl font-sans tracking-[0.15em] uppercase text-foreground hover:text-burnt-orange hover:underline underline-offset-4 transition-colors duration-200 font-normal"
          >
            About
          </Link>
          <a 
            href="#contact" 
            onClick={closeMenu} 
            className="text-lg sm:text-xl font-sans tracking-[0.15em] uppercase text-foreground hover:text-burnt-orange hover:underline underline-offset-4 transition-colors duration-200 font-normal"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;