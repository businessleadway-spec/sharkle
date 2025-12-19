import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import logo from '@/assets/logo.png';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [{
    name: 'Sobre',
    href: '#sobre'
  }, {
    name: 'Serviços',
    href: '#servicos'
  }, {
    name: 'FAQ',
    href: '#faq'
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img alt="Sharkle" className="h-8 w-auto" src="/lovable-uploads/b3a367cb-bf12-4c24-9ffd-364d2b882b3a.png" />
            <span className="text-xl font-bold text-[#395979]">
              Sharkle
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
                {link.name}
              </a>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#contato" className="btn-primary text-sm">
              Fale Conosco
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden text-foreground p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="lg:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => <a key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </a>)}
              <a href="#contato" className="btn-primary text-sm justify-center mt-2" onClick={() => setIsMenuOpen(false)}>
                Fale Conosco
                <ArrowRight size={16} />
              </a>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;