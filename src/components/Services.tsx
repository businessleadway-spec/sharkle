import { 
  Code, 
  Smartphone, 
  Globe, 
  Megaphone, 
  BarChart3, 
  Palette,
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/scroll-reveal';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';

const services = [
  {
    Icon: Code,
    name: 'Desenvolvimento Web',
    description: 'Sites, landing pages e aplicações web modernas que convertem visitantes em clientes.',
    href: '#contato',
    cta: 'Saiba mais',
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    gradient: "from-primary/20 to-accent/10",
  },
  {
    Icon: Smartphone,
    name: 'Aplicativos Mobile',
    description: 'Apps nativos e híbridos para iOS e Android com foco em usabilidade e performance.',
    href: '#contato',
    cta: 'Saiba mais',
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    gradient: "from-purple-500/20 to-pink-500/10",
  },
  {
    Icon: Globe,
    name: 'Sistemas Personalizados',
    description: 'Soluções sob medida para automatizar processos e otimizar a gestão do seu negócio.',
    href: '#contato',
    cta: 'Saiba mais',
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    gradient: "from-green-500/20 to-emerald-500/10",
  },
  {
    Icon: Megaphone,
    name: 'Marketing Digital',
    description: 'Gestão de redes sociais, tráfego pago, SEO e estratégias de conteúdo.',
    href: '#contato',
    cta: 'Saiba mais',
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    gradient: "from-orange-500/20 to-yellow-500/10",
  },
  {
    Icon: BarChart3,
    name: 'Análise de Dados',
    description: 'Transformamos dados em insights para decisões mais inteligentes.',
    href: '#contato',
    cta: 'Saiba mais',
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4",
    gradient: "from-indigo-500/20 to-violet-500/10",
  },
  {
    Icon: Palette,
    name: 'Design & UX/UI',
    description: 'Interfaces bonitas e funcionais que encantam usuários e fortalecem sua marca.',
    href: '#contato',
    cta: 'Saiba mais',
    className: "lg:col-start-1 lg:col-end-4 lg:row-start-4 lg:row-end-5",
    gradient: "from-rose-500/20 to-red-500/10",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding relative overflow-hidden bg-background">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal animation="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Nossos Serviços</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={0.1}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-6">
              Soluções completas para 
              <span className="gradient-text"> seu negócio</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={0.2}>
            <p className="text-muted-foreground text-lg">
              Da ideia à execução, oferecemos um ecossistema completo de serviços para impulsionar sua presença digital.
            </p>
          </ScrollReveal>
        </div>

        {/* Services Bento Grid */}
        <StaggerContainer staggerDelay={0.15}>
          <BentoGrid className="lg:grid-rows-4">
            {services.map((service) => (
              <StaggerItem key={service.name} className={service.className}>
                <BentoCard {...service} className="h-full" />
              </StaggerItem>
            ))}
          </BentoGrid>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Services;
