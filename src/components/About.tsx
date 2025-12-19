import mascotHandshake from '@/assets/mascot-handshake.png';
import { Check } from 'lucide-react';

const features = [
  'Desenvolvimento personalizado',
  'Estratégias orientadas por dados',
  'Suporte contínuo',
  'Metodologias ágeis',
];

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl scale-75" />
              <img 
                src={mascotHandshake} 
                alt="Sharkle Partnership" 
                className="relative z-10 w-64 lg:w-80 h-auto drop-shadow-xl animate-float"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-4">
              Sobre nós
            </p>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-6">
              Parceria que impulsiona 
              <span className="gradient-text"> resultados.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Somos a Sharkle — seu parceiro estratégico em desenvolvimento de software, 
              soluções tecnológicas e marketing digital. Com uma equipe apaixonada por inovação, 
              desenvolvemos soluções personalizadas que ajudam empresas a crescerem no ambiente digital.
            </p>

            {/* Feature list */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Projetos</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Dedicação</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-bold text-primary">∞</p>
                <p className="text-sm text-muted-foreground">Ideias</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;