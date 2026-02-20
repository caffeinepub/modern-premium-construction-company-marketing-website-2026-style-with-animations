import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/utils/scrollToSection';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const navLinks = [
  { label: 'Home', target: 'hero' },
  { label: 'About', target: 'about' },
  { label: 'Services', target: 'services' },
  { label: 'Projects', target: 'projects' },
  { label: 'Why Us', target: 'why-choose-us' },
  { label: 'Testimonials', target: 'testimonials' },
  { label: 'Contact', target: 'contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrolled = useScrollPosition(50);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (target: string) => {
    scrollToSection(target);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-charcoal/95 backdrop-blur-md shadow-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            className="text-2xl font-bold text-white hover:text-construction-yellow transition-colors"
          >
            BuildCo
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className="text-white/90 hover:text-construction-yellow transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick('contact')}
              className="bg-construction-yellow text-charcoal hover:bg-construction-yellow/90 font-semibold"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:text-construction-yellow transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-charcoal/98 backdrop-blur-lg z-40">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => handleNavClick(link.target)}
                  className="text-white text-xl hover:text-construction-yellow transition-colors text-left font-medium"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => handleNavClick('contact')}
                className="bg-construction-yellow text-charcoal hover:bg-construction-yellow/90 font-semibold w-full"
                size="lg"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
