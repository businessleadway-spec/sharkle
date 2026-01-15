import mascotHandshake from '@/assets/mascot-handshake.png';
import { Check, TrendingUp, Users, Clock } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/scroll-reveal';

const features = [
  { icon: TrendingUp, text: 'Desenvolvimento personalizado' },
  { icon: Users, text: 'Estratégias orientadas por dados' },
  { icon: Clock, text: 'Suporte contínuo' },
  { icon: Check, text: 'Metodologias ágeis' },
];

const About = () => {
  return (
    <section id="sobre" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden noise">
      {/* Soft gradient background */}
      <div className="absolute inset-0 gradient-section" />
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center order-2 lg:order-1">
            <ScrollReveal animation="fade-right">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 sm:-inset-8">
                  <div className="absolute top-0 left-0 w-16 sm:w-24 h-16 sm:h-24 border-l-2 border-t-2 border-primary/30 rounded-tl-2xl sm:rounded-tl-3xl" />
                  <div className="absolute bottom-0 right-0 w-16 sm:w-24 h-16 sm:h-24 border-r-2 border-b-2 border-accent/30 rounded-br-2xl sm:rounded-br-3xl" />
                </div>
                
                {/* Soft glow effect */}
                <div 
                  className="absolute inset-0 rounded-full blur-[60px] sm:blur-[80px] scale-125 opacity-50"
                  style={{ background: 'radial-gradient(circle, hsl(200 50% 85% / 0.4) 0%, hsl(205 40% 75% / 0.2) 50%, transparent 70%)' }}
                />
                
                <img 
                  src={mascotHandshake} 
                  alt="Sharkle Partnership" 
                  loading="lazy"
                  decoding="async"
                  className="relative z-10 w-48 sm:w-64 lg:w-80 h-auto drop-shadow-2xl animate-float"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <ScrollReveal animation="fade-up">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 mb-4 sm:mb-6 shadow-sm">
                <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider">Sobre nós</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={0.1}>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-4 sm:mb-6">
                Parceria que impulsiona 
                <span className="gradient-text"> resultados.</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={0.2}>
              <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
                Somos a Sharkle — seu parceiro estratégico em desenvolvimento de software, 
                soluções tecnológicas e marketing digital. Com uma equipe apaixonada por inovação, 
                desenvolvemos soluções personalizadas que ajudam empresas a crescerem no ambiente digital.
              </p>
            </ScrollReveal>

            {/* Feature list */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10" staggerDelay={0.1}>
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <div 
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-500 group"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-primary group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium text-sm sm:text-base">{feature.text}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Stats */}
            <StaggerContainer className="grid grid-cols-3 gap-2 sm:gap-4" staggerDelay={0.1}>
              {[
                { value: '50+', label: 'Projetos' },
                { value: '100%', label: 'Dedicação' },
                { value: '∞', label: 'Ideias' },
              ].map((stat, index) => (
                <StaggerItem key={index}>
                  <div 
                    className="text-center p-3 sm:p-6 rounded-xl sm:rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-500"
                  >
                    <p className="text-xl sm:text-3xl lg:text-4xl font-display font-bold gradient-text">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1 font-medium">{stat.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
