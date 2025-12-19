import { ArrowRight } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start pt-32 pb-20"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl animate-fade-in-up">
          <p className="text-muted-foreground text-lg mb-4">
            Tecnologia com Profundidade
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-8">
            Segurança Cibernética
          </h1>
          <div className="flex flex-wrap gap-4">
            <a href="#sobre" className="btn-outline">
              Saiba Mais
            </a>
            <a href="#firewall" className="btn-primary">
              Netdeep Secure
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Floating service cards */}
      <div className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2 space-y-4">
        <ServicePreviewCard
          title="Next-Gen Firewall e Antimalware (XDR)"
          description="Infraestrutura segura de rede com a Próxima Geração de Proteção de Ameaças em Tempo Real."
        />
        <ServicePreviewCard
          title="Análise de Riscos, Vulnerabilidades e Pentest"
          description="Identificamos as falhas em processos, aplicações e dispositivos."
        />
        <ServicePreviewCard
          title="SOC (Centro de Operações de Segurança)"
          description="Nossa abordagem proativa de gerenciamento (Blue/Red/Purple Team)."
        />
      </div>
    </section>
  );
};

const ServicePreviewCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border/50 max-w-xs hover:border-primary/50 transition-colors duration-300">
    <h3 className="text-sm font-semibold text-foreground mb-1">{title}</h3>
    <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>
  </div>
);

export default Hero;
