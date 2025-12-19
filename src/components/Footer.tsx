import { Mail, Phone } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-flex items-center gap-3 mb-4">
              <img src={logo} alt="Sharkle" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-sharkle-cream">
                Sharkle
              </span>
            </a>
            <p className="text-sharkle-cream/70 mb-4 max-w-md">
              Transformamos ideias em soluções digitais inovadoras. Desenvolvimento de software, soluções tecnológicas e marketing para impulsionar seu negócio.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/_sharkle/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-sharkle-cream/70 hover:text-secondary hover:bg-secondary/30 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sharkle-cream mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-sharkle-cream/70 hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#sobre" className="text-sharkle-cream/70 hover:text-secondary transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="text-sharkle-cream/70 hover:text-secondary transition-colors">Serviços</a></li>
              <li><a href="#contato" className="text-sharkle-cream/70 hover:text-secondary transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sharkle-cream mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div className="text-sharkle-cream/70">
                  <p>(16) 99355-5072</p>
                  <p>(16) 99233-4868</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <a href="mailto:sharklemkt@gmail.com" className="text-sharkle-cream/70 hover:text-secondary transition-colors">
                  sharklemkt@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-sharkle-cream/10 mt-12 pt-8 text-center">
          <p className="text-sharkle-cream/60 text-sm">
            © {new Date().getFullYear()} Sharkle. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;