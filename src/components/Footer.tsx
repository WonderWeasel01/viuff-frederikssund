import { Button } from '@/components/ui/button';
import { Heart, Mail, Phone } from 'lucide-react';

const scrollToSection = (sectionId: string) => {
  if (window.location.pathname !== "/") {
    window.location.href = `/#${sectionId}`;
  } else {
    window.history.replaceState(null, "", `#${sectionId}`);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Niels Martin Viuff</h3>
            <p className="text-white/80 mb-4">
              Spidskandidat for Det Konservative Folkeparti i Frederikssund Kommune
            </p>
            <p className="text-white/60 text-sm">
              TÆNK STØRRE • Vækst, Velfærd, Viuff
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Mærkesager</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <button
                  type="button"
                  className="hover:text-white transition-colors bg-transparent p-0 border-0 underline cursor-pointer"
                  onClick={() => scrollToSection('maerkesag-0')}
                >
                  Unges trivsel
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="hover:text-white transition-colors bg-transparent p-0 border-0 underline cursor-pointer"
                  onClick={() => scrollToSection('maerkesag-1')}
                >
                  Kvalitet i folkeskolen
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="hover:text-white transition-colors bg-transparent p-0 border-0 underline cursor-pointer"
                  onClick={() => scrollToSection('maerkesag-2')}
                >
                  Lokale virksomheder
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="hover:text-white transition-colors bg-transparent p-0 border-0 underline cursor-pointer"
                  onClick={() => scrollToSection('maerkesag-3')}
                >
                  Vinge i balance
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="hover:text-white transition-colors bg-transparent p-0 border-0 underline cursor-pointer"
                  onClick={() => scrollToSection('maerkesag-4')}
                >
                  De dyre mursten
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="hover:text-white transition-colors bg-transparent p-0 border-0 underline cursor-pointer"
                  onClick={() => scrollToSection('maerkesag-5')}
                >
                  Udvikling ikke afvikling
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/80">
                <Mail size={16} />
                <a
                  href="mailto:Niels@viuff.as"
                  className="text-sm underline"
                >
                  Niels@viuff.as
                </a>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Phone size={16} />
                <a
                  href="tel:+4521731120"
                  className="text-sm underline"
                >
                  +45 21 73 11 20
                </a>
              </div>
            </div>
            
            <div className="mt-6">
              <Button
                variant="conservative-light"
                size="sm"
                onClick={() => scrollToSection('kontakt')}
              >
                Støt Niels
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2024 Niels Martin Viuff. Alle rettigheder forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;