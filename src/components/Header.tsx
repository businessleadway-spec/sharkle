import { useState, useEffect, useCallback, memo } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'FAQ', href: '#faq' },
];

const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'glass border-b border-border/30 shadow-soft'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                alt="Sharkle"
                className="h-9 w-auto relative z-10 transition-transform duration-200 group-hover:scale-105"
                src="/lovable-uploads/516deee8-ebbd-4d3f-a29d-9dfb84cc652b.png"
                loading="eager"
                decoding="async"
              />
            </div>
            <span className="text-xl font-display font-bold text-primary tracking-tight">
              Sharkle
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium group"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 scale-90 group-hover:scale-100" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contato"
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-semibold text-sm overflow-hidden transition-all duration-200 hover:shadow-primary-lg active:scale-[0.98]"
            >
              <span className="relative z-10">Fale Conosco</span>
              <ArrowRight size={16} className="relative z-10 transition-transform duration-200 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-foreground p-2 hover:bg-muted/50 rounded-xl transition-colors active:scale-95"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence mode="wait">
          {isMenuOpen && (
            <motion.nav
              className="lg:hidden py-6 border-t border-border/30"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-colors duration-200 py-3 px-4 rounded-xl font-medium"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contato"
                  className="btn-primary justify-center mt-4"
                  onClick={closeMenu}
                >
                  <span className="relative z-10">Fale Conosco</span>
                  <ArrowRight size={16} className="relative z-10" />
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
});

Header.displayName = 'Header';

export default Header;