import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      setIsMenuOpen(false);
    } else {
      // Always update the hash in the URL
      window.history.replaceState(null, "", `#${sectionId}`);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  useEffect(() => {
    if (window.location.hash) {
      const sectionId = window.location.hash.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // Delay to ensure DOM is ready
      }
    }
  }, []);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/Logo.png" alt="" className='w-10' />
            <h1 className="text-xl font-bold text-primary">Niels Martin Viuff</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('hjem')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Hjem
            </button>
            <button 
              onClick={() => scrollToSection('maerkesager')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Mærkesager
            </button>
            <button 
              onClick={() => scrollToSection('om-niels')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Om Niels
            </button>
            <button 
              onClick={() => window.location.href = "/cv"}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Karriere
            </button>
            <button 
              onClick={() => scrollToSection('kontakt')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Kontakt
            </button>
            <Button
              variant="conservative"
              size="sm"
              onClick={() => scrollToSection('kontakt')}
            >
              Støt Niels
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('hjem')}
                className="text-left py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Hjem
              </button>
              <button 
                onClick={() => scrollToSection('maerkesager')}
                className="text-left py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Mærkesager
              </button>
              <button 
                onClick={() => scrollToSection('om-niels')}
                className="text-left py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Om Niels
              </button>
              <button 
                onClick={() => window.location.href = "/cv"}
                className="text-left py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Karriere
              </button>
              <button 
                onClick={() => scrollToSection('kontakt')}
                className="text-left py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Kontakt
              </button>
              <Button variant="conservative" size="sm" className="self-start" onClick={() => scrollToSection('kontakt')}>
                Støt Niels
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;