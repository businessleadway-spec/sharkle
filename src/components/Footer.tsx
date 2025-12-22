import { ArrowUp } from 'lucide-react';
import { forwardRef } from 'react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
const Footer = forwardRef<HTMLElement>((_, ref) => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer ref={ref} className="relative overflow-hidden bg-foreground">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 opacity-50" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <ScrollReveal animation="fade-up" className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-3 mb-6 group">
              <img alt="Sharkle" className="h-10 w-auto brightness-0 invert transition-transform duration-300 group-hover:scale-105" src="/lovable-uploads/64fbaafe-2ba5-4ab8-8fcb-60d4111b31b6.png" />
              <span className="text-2xl font-bold text-white">Sharkle</span>
            </a>
            <p className="text-white/60 mb-8 max-w-sm leading-relaxed">
              Transformamos ideias em soluções digitais. Desenvolvimento, tecnologia e marketing para impulsionar seu negócio.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/_sharkle/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300 hover:scale-105">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </ScrollReveal>

          {/* Links */}
          <ScrollReveal animation="fade-up" delay={0.1}>
            <h4 className="font-bold mb-6 text-white text-lg">Links</h4>
            <ul className="space-y-4">
              {[{
              name: 'Home',
              href: '#'
            }, {
              name: 'Sobre',
              href: '#sobre'
            }, {
              name: 'Serviços',
              href: '#servicos'
            }, {
              name: 'FAQ',
              href: '#faq'
            }, {
              name: 'Contato',
              href: '#contato'
            }].map(link => <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-px bg-white group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal animation="fade-up" delay={0.2}>
            <h4 className="font-bold mb-6 text-white text-lg">Contato</h4>
            <ul className="space-y-4 text-white/60">
              <li className="hover:text-white transition-colors">(16) 99355-5072</li>
              <li className="hover:text-white transition-colors">(16) 99233-4868</li>
              <li>
                <a href="mailto:sharklemkt@gmail.com" className="hover:text-white transition-colors">
                  sharklemkt@gmail.com
                </a>
              </li>
            </ul>
          </ScrollReveal>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} Sharkle. Todos os direitos reservados.
          </p>
          
          <button onClick={scrollToTop} className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300 hover:-translate-y-1" aria-label="Voltar ao topo">
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>;
});
Footer.displayName = 'Footer';
export default Footer;