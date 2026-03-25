import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Car, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-brand-red p-1.5 rounded-lg">
                <Car className="w-6 h-6 text-white" />
              </div>
              <span className="font-display font-bold text-xl tracking-tighter">
                BARRHAVEN<span className="text-brand-red">MOBILE</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Professional mobile auto body repair serving Barrhaven, Ottawa, and Nepean. We bring the body shop to your driveway, saving you time and money.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-red transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-red transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-red transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Damage Repairs', path: '/damage-repairs' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-slate-400 hover:text-brand-red transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-4">
              {['Scratch Repair', 'Bumper Repair', 'Paint Touch-ups', 'Minor Collision'].map((item) => (
                <li key={item} className="text-slate-400 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-red shrink-0" />
                <span className="text-slate-400 text-sm">
                  1427 Meadow Drive,<br />Ottawa, ON K2J 5T1
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-red shrink-0" />
                <a href="tel:3439993672" className="text-slate-400 hover:text-white transition-colors text-sm">
                  (343) 999-3672
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-red shrink-0" />
                <a href="mailto:info@barrhavenmobile.ca" className="text-slate-400 hover:text-white transition-colors text-sm">
                  info@barrhavenmobile.ca
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Barrhaven Mobile Body Shop. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
