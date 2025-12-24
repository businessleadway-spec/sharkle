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
    <section id="sobre" className="section-padding relative overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0 aurora-bg opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <ScrollReveal animation="fade-right" className="flex justify-center order-2 lg:order-1">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-8">
                <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-primary/30 rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-accent/30 rounded-br-3xl" />
              </div>
              
              {/* Aurora glow effect - optimized */}
              <div 
                className="absolute inset-0 rounded-full blur-[80px] scale-125 opacity-40"
                style={{ 
                  background: 'radial-gradient(circle, hsl(204 80% 60% / 0.25) 0%, hsl(280 70% 60% / 0.15) 50%, transparent 70%)',
                  willChange: 'auto',
                }}
              />
              
              <img 
                src={mascotHandshake} 
                alt="Sharkle Partnership" 
                className="relative z-10 w-64 lg:w-80 h-auto drop-shadow-2xl animate-float"
              />
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <ScrollReveal animation="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6 shadow-glow">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Sobre nós</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={0.1}>
              <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-6">
                Parceria que impulsiona 
                <span className="gradient-text"> resultados.</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={0.2}>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Somos a Sharkle — seu parceiro estratégico em desenvolvimento de software, 
                soluções tecnológicas e marketing digital. Com uma equipe apaixonada por inovação, 
                desenvolvemos soluções personalizadas que ajudam empresas a crescerem no ambiente digital.
              </p>
            </ScrollReveal>

            {/* Feature list */}
            <StaggerContainer className="grid sm:grid-cols-2 gap-4 mb-10" staggerDelay={0.1}>
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <div 
                    className="flex items-center gap-4 p-4 rounded-2xl glass border border-border/30 hover:border-primary/30 hover:shadow-glow transition-all duration-500 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-primary group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{feature.text}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Stats */}
            <StaggerContainer className="grid grid-cols-3 gap-4" staggerDelay={0.1}>
              {[
                { value: '50+', label: 'Projetos' },
                { value: '100%', label: 'Dedicação' },
                { value: '∞', label: 'Ideias' },
              ].map((stat, index) => (
                <StaggerItem key={index}>
                  <div 
                    className="text-center p-6 rounded-2xl glass border border-primary/10 hover:border-primary/30 hover:shadow-glow transition-all duration-500"
                  >
                    <p className="text-3xl lg:text-4xl font-display font-bold gradient-text">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-1 font-medium">{stat.label}</p>
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
