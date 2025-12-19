import { 
  Code, 
  Smartphone, 
  Globe, 
  Megaphone, 
  BarChart3, 
  Palette,
  ArrowUpRight,
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Desenvolvimento Web',
    description: 'Sites, landing pages e aplicações web modernas que convertem visitantes em clientes.',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: Smartphone,
    title: 'Aplicativos Mobile',
    description: 'Apps nativos e híbridos para iOS e Android com foco em usabilidade e performance.',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: Globe,
    title: 'Sistemas Personalizados',
    description: 'Soluções sob medida para automatizar processos e otimizar a gestão do seu negócio.',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    icon: Megaphone,
    title: 'Marketing Digital',
    description: 'Gestão de redes sociais, tráfego pago, SEO e estratégias de conteúdo.',
    color: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    icon: BarChart3,
    title: 'Análise de Dados',
    description: 'Transformamos dados em insights para decisões mais inteligentes.',
    color: 'from-indigo-500/20 to-violet-500/20',
  },
  {
    icon: Palette,
    title: 'Design & UX/UI',
    description: 'Interfaces bonitas e funcionais que encantam usuários e fortalecem sua marca.',
    color: 'from-rose-500/20 to-red-500/20',
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Nossos Serviços</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-6">
            Soluções completas para 
            <span className="gradient-text"> seu negócio</span>
          </h2>
          
          <p className="text-muted-foreground text-lg">
            Da ideia à execução, oferecemos um ecossistema completo de serviços para impulsionar sua presença digital.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-soft-lg overflow-hidden"
            >
              {/* Hover gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary group-hover:to-accent flex items-center justify-center mb-6 transition-all duration-500">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center justify-between">
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
