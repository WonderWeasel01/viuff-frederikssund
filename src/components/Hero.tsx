// Changes:
// - Increased portrait image size for large screens (w-[420px] h-[540px] on lg)
// - Moved the scroll indicator arrow to bottom-right on large screens, remains centered on mobile

import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import nielsPtrait from '@/assets/niels-portrait.jpg';
import frederikssundFjord from '@/assets/frederikssund-fjord.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hjem" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={frederikssundFjord}
          alt="Frederikssund fjord"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
                Spidskandidat • Det Konservative Folkeparti
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4">
                TÆNK
                <span className="block bg-gradient-to-r from-conservative-light to-conservative-accent bg-clip-text text-transparent">
                  STØRRE
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-6">
                Vækst, velfærd, Viuff
              </p>
              <p className="text-lg text-white/80 mb-8 max-w-2xl">
                Vi skal droppe udkantsmentaliteten. Vi skal ud over stepperne i Frederikssund Kommune.
                Et ja er svært - men det er det, vores fællesskab har brug for.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="conservative-light" 
                size="xl"
                onClick={() => scrollToSection('maerkesager')}
              >
                Se mærkesagerne
              </Button>
              <Button 
                variant="conservative-accent" 
                size="xl"
                onClick={() => scrollToSection('om-niels')}
              >
                Lær Niels at kende
              </Button>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative">
            <div className="relative mx-auto lg:mx-0 w-80 h-96 lg:w-[420px] lg:h-[540px]">
              <img 
                src={nielsPtrait}
                alt="Niels Martin Viuff"
                className="w-full h-full object-cover rounded-2xl shadow-elegant"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-elegant">
                <p className="text-sm font-bold text-primary">Niels Martin Viuff</p>
                <p className="text-xs text-muted-foreground">Spidskandidat</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-8 lg:translate-x-0">
          <button
            onClick={() => scrollToSection('maerkesager')}
            className="text-white/70 hover:text-white transition-colors animate-bounce"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;