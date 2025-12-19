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
    <section id="sobre" className="section-padding gradient-section">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-3xl scale-75 opacity-60"
                style={{ background: 'radial-gradient(circle, hsl(204 37% 36% / 0.25) 0%, hsl(189 60% 45% / 0.15) 50%, transparent 70%)' }}
              />
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
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 gradient-primary">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border">
              <div className="stat-card flex-1">
                <p className="text-3xl lg:text-4xl font-bold gradient-text">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Projetos</p>
              </div>
              <div className="stat-card flex-1">
                <p className="text-3xl lg:text-4xl font-bold gradient-text">100%</p>
                <p className="text-sm text-muted-foreground mt-1">Dedicação</p>
              </div>
              <div className="stat-card flex-1">
                <p className="text-3xl lg:text-4xl font-bold gradient-text">∞</p>
                <p className="text-sm text-muted-foreground mt-1">Ideias</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;