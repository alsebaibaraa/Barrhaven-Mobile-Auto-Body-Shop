import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Car } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Damage Repairs', path: '/damage-repairs' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-red p-1.5 rounded-lg group-hover:scale-110 transition-transform">
              <Car className="w-6 h-6 text-white" />
            </div>
            <span className={`font-display font-bold text-xl tracking-tighter ${scrolled ? 'text-brand-dark' : 'text-brand-dark'}`}>
              BARRHAVEN<span className="text-brand-red">MOBILE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-red ${
                  location.pathname === link.path ? 'text-brand-red' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="tel:3439993672" 
              className="flex items-center gap-2 bg-brand-dark text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-brand-red transition-colors shadow-lg shadow-brand-dark/10"
            >
              <Phone className="w-4 h-4" />
              (343) 999-3672
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-base font-semibold rounded-lg ${
                    location.pathname === link.path ? 'bg-slate-50 text-brand-red' : 'text-slate-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <a 
                  href="tel:3439993672" 
                  className="flex items-center justify-center gap-2 bg-brand-red text-white w-full py-4 rounded-xl font-bold"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: (343) 999-3672
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
