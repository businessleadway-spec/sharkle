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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <ScrollReveal animation="fade-right" className="flex justify-center order-2 lg:order-1">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-8">
                <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-primary/20 rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-accent/20 rounded-br-3xl" />
              </div>
              
              {/* Glow effect */}
              <div 
                className="absolute inset-0 rounded-full blur-[80px] scale-125 opacity-40"
                style={{ background: 'radial-gradient(circle, hsl(204 37% 36% / 0.3) 0%, hsl(189 60% 45% / 0.2) 50%, transparent 70%)' }}
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Sobre nós</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={0.1}>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-6">
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
                    className="flex items-center gap-4 p-4 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-white" />
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
                    className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/10 border border-primary/10 hover:border-primary/30 transition-all duration-300"
                  >
                    <p className="text-3xl lg:text-4xl font-bold gradient-text">{stat.value}</p>
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
