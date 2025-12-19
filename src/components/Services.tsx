import { 
  Code, 
  Smartphone, 
  Globe, 
  Megaphone, 
  BarChart3, 
  Palette,
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Desenvolvimento Web',
    description: 'Sites, landing pages e aplicações web modernas que convertem visitantes em clientes.',
  },
  {
    icon: Smartphone,
    title: 'Aplicativos Mobile',
    description: 'Apps nativos e híbridos para iOS e Android com foco em usabilidade e performance.',
  },
  {
    icon: Globe,
    title: 'Sistemas Personalizados',
    description: 'Soluções sob medida para automatizar processos e otimizar a gestão do seu negócio.',
  },
  {
    icon: Megaphone,
    title: 'Marketing Digital',
    description: 'Gestão de redes sociais, tráfego pago, SEO e estratégias de conteúdo.',
  },
  {
    icon: BarChart3,
    title: 'Análise de Dados',
    description: 'Transformamos dados em insights para decisões mais inteligentes.',
  },
  {
    icon: Palette,
    title: 'Design & UX/UI',
    description: 'Interfaces bonitas e funcionais que encantam usuários e fortalecem sua marca.',
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-4">
            Nossos Serviços
          </p>
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
              className="card-feature group cursor-pointer"
            >
              <div className="icon-container icon-container-lg mb-6 group-hover:shadow-primary transition-shadow duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;