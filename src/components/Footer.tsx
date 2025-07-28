import { Button } from '@/components/ui/button';
import { Heart, Mail, Phone } from 'lucide-react';

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
              TÆNK STØRRE • Vækst, velfærd, Viuff
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Mærkesager</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Unges trivsel</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kvalitet i folkeskolen</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lokale virksomheder</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vinge i balance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Udvikling ikke afvikling</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/80">
                <Mail size={16} />
                <span className="text-sm">niels@detkonservativefolkeparti.dk</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Phone size={16} />
                <span className="text-sm">+45 12 34 56 78</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Button variant="conservative-light" size="sm">
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
          
          <div className="flex items-center gap-2 text-white/80">
            <span className="text-sm">Lavet med</span>
            <Heart size={16} className="text-red-400" />
            <span className="text-sm">for Frederikssund Kommune</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;