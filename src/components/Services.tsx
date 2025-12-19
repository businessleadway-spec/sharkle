import { 
  Code, 
  Smartphone, 
  Globe, 
  Megaphone, 
  BarChart3, 
  Palette,
  Server,
  Zap,
  Users,
  Target,
  Lightbulb,
  Rocket
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Desenvolvimento Web',
    description: 'Criamos sites, landing pages e aplicações web responsivas e modernas que convertem visitantes em clientes.',
  },
  {
    icon: Smartphone,
    title: 'Aplicativos Mobile',
    description: 'Desenvolvemos apps nativos e híbridos para iOS e Android com foco em usabilidade e performance.',
  },
  {
    icon: Globe,
    title: 'Sistemas Personalizados',
    description: 'Soluções sob medida para automatizar processos, integrar sistemas e otimizar a gestão do seu negócio.',
  },
  {
    icon: Megaphone,
    title: 'Marketing Digital',
    description: 'Estratégias completas de marketing: gestão de redes sociais, tráfego pago, SEO e conteúdo.',
  },
  {
    icon: BarChart3,
    title: 'Análise de Dados',
    description: 'Transformamos dados em insights acionáveis para tomadas de decisão mais inteligentes.',
  },
  {
    icon: Palette,
    title: 'Design & UX/UI',
    description: 'Interfaces bonitas e funcionais que encantam usuários e fortalecem sua marca.',
  },
];

const additionalServices = [
  {
    icon: Server,
    title: 'Infraestrutura Cloud',
    description: 'Hospedagem, servidores e arquitetura escalável na nuvem.',
  },
  {
    icon: Zap,
    title: 'Automação de Processos',
    description: 'Automatize tarefas repetitivas e ganhe eficiência operacional.',
  },
  {
    icon: Users,
    title: 'Consultoria Tecnológica',
    description: 'Orientamos sua empresa na jornada de transformação digital.',
  },
  {
    icon: Target,
    title: 'Campanhas de Performance',
    description: 'Google Ads, Meta Ads e estratégias focadas em ROI.',
  },
  {
    icon: Lightbulb,
    title: 'Branding & Identidade',
    description: 'Construímos marcas memoráveis e posicionamento estratégico.',
  },
  {
    icon: Rocket,
    title: 'Growth Hacking',
    description: 'Estratégias criativas e ágeis para acelerar seu crescimento.',
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-secondary text-sm uppercase tracking-widest font-medium mb-4">
            ▶ NOSSOS SERVIÇOS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sharkle-cream leading-tight mb-6">
            Soluções completas para seu negócio
          </h2>
          <p className="text-sharkle-cream/70 max-w-3xl mx-auto">
            Da ideia à execução, oferecemos um ecossistema completo de serviços para impulsionar sua presença digital e acelerar seus resultados.
          </p>
        </div>

        {/* Main services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-sharkle-cream/10 backdrop-blur-sm p-6 rounded-lg border border-secondary/30 hover:border-secondary/60 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                <service.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-sharkle-cream mb-2">{service.title}</h3>
              <p className="text-sharkle-cream/70 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Additional services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <service.icon className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h4 className="font-medium text-sharkle-cream mb-1">{service.title}</h4>
                <p className="text-sharkle-cream/60 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;