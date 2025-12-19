import { 
  Shield, 
  Search, 
  Monitor, 
  Headphones, 
  HardDrive, 
  Network,
  Lock,
  Zap,
  Bug,
  Users,
  Eye,
  FileWarning
} from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Next-Gen Firewall e Antimalware (XDR)',
    description: 'Infraestrutura segura de rede com a Próxima Geração de Proteção de Ameaças em Tempo Real.',
  },
  {
    icon: Search,
    title: 'Análise de Riscos, Vulnerabilidades e Pentest',
    description: 'Identificamos as falhas em processos, aplicações e dispositivos e desenvolvemos o plano de ação para reduzir o risco.',
  },
  {
    icon: Monitor,
    title: 'SOC (Centro de Operações de Segurança)',
    description: 'Nossa abordagem proativa de gerenciamento e a experiência de nosso time (Blue/Red/Purple Team) ajuda a prevenir problemas antes que eles cresçam.',
  },
  {
    icon: Headphones,
    title: 'Atendimento Remoto ou Presencial',
    description: 'Nosso time de especialistas está disponível para prover suporte onde você estiver.',
  },
  {
    icon: HardDrive,
    title: 'Backup & Recuperação de Desastres',
    description: 'Desenvolvemos estratégias de Cópia, Replicação e Contingência para elevar a continuidade dos negócios de sua empresa.',
  },
  {
    icon: Network,
    title: 'Infraestrutura de Rede',
    description: 'Trabalhamos duro para projetar uma infraestrutura de rede que atenda às necessidades do seu negócio.',
  },
];

const additionalServices = [
  {
    icon: Lock,
    title: 'Políticas de Controles de Acessos',
    description: 'Criptografia e Monitoramento para detectar e impedir ameaças avançadas.',
  },
  {
    icon: Zap,
    title: 'Velocidade e eficiência',
    description: 'Detecção e resposta em endpoints, identidades, redes, aplicativos, nuvens e dispositivos móveis.',
  },
  {
    icon: Bug,
    title: 'Detecção e Correção de Vulnerabilidades',
    description: 'Antes que sejam exploradas pelos atores de ameaças.',
  },
  {
    icon: Users,
    title: 'Firewall Humano',
    description: 'Construímos um firewall humano através de treinamentos contínuos, testes de phishing e campanhas de conscientização.',
  },
  {
    icon: Eye,
    title: 'Monitoramento de Dados Sensíveis',
    description: 'Detectamos e monitoramos dados confidenciais e de propriedade intelectual.',
  },
  {
    icon: FileWarning,
    title: 'Proteção contra Vazamentos',
    description: 'Interrompemos vazamentos e protegemos as empresas contra ameaças internas e externas.',
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Experience badge */}
        <div className="text-center mb-16">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos desde <strong className="text-primary">2009</strong> atendendo instituições de todos os tamanhos, sendo elas privadas ou públicas.
          </p>
          <p className="text-muted-foreground mt-4 max-w-4xl mx-auto">
            Nossa experiência em frameworks de Governança, Segurança e Privacidade de dados{' '}
            <strong className="text-foreground">(ISO 27001/27002, NIST, LGPD, GDPR, ITIL, COBIT, etc.)</strong>{' '}
            reforça a prevenção e recuperação contra violações, fraudes, intrusões, sequestros e demais ataques críticos.
          </p>
        </div>

        {/* Main services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
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
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">{service.title}</h4>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
