import { ArrowRight } from 'lucide-react';
import mascotJoia from '@/assets/mascot-joia.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start pt-32 pb-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(204 37% 36%) 0%, hsl(204 37% 25%) 50%, hsl(189 30% 85% / 0.3) 100%)',
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="animate-fade-in-up">
            <p className="text-secondary text-lg mb-4 font-medium">
              Soluções que transformam negócios
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-sharkle-cream leading-tight mb-6">
              Desenvolvimento,
              <br />
              <span className="text-secondary">Tecnologia</span>
              <br />
              & Marketing
            </h1>
            <p className="text-sharkle-cream/80 text-lg mb-8 max-w-lg">
              Transformamos ideias em soluções digitais inovadoras. Da estratégia à execução, somos seu parceiro de crescimento.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#sobre" className="bg-secondary text-primary px-8 py-4 rounded-lg font-medium hover:bg-secondary/90 transition-all duration-300 inline-flex items-center gap-2 shadow-lg">
                Saiba Mais
              </a>
              <a href="#contato" className="bg-transparent border-2 border-sharkle-cream text-sharkle-cream px-8 py-4 rounded-lg font-medium hover:bg-sharkle-cream hover:text-primary transition-all duration-300 inline-flex items-center gap-2">
                Fale Conosco
                <ArrowRight size={20} />
              </a>
            </div>
          </div>

          {/* Mascot */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/30 rounded-full blur-3xl scale-75" />
              <img 
                src={mascotJoia} 
                alt="Sharkle Mascot" 
                className="relative z-10 w-80 h-auto animate-float drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Service preview cards */}
      <div className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2 space-y-4">
        <ServicePreviewCard
          title="Desenvolvimento de Software"
          description="Aplicações web e mobile sob medida para seu negócio."
        />
        <ServicePreviewCard
          title="Soluções Tecnológicas"
          description="Automação, integração e infraestrutura moderna."
        />
        <ServicePreviewCard
          title="Marketing Digital"
          description="Estratégias que conectam sua marca ao público certo."
        />
      </div>
    </section>
  );
};

const ServicePreviewCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-sharkle-cream/10 backdrop-blur-md p-4 rounded-lg border border-secondary/30 max-w-xs hover:border-secondary/60 transition-colors duration-300">
    <h3 className="text-sm font-semibold text-sharkle-cream mb-1">{title}</h3>
    <p className="text-xs text-sharkle-cream/70 line-clamp-2">{description}</p>
  </div>
);

export default Hero;