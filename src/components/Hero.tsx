import { ArrowRight, Zap, Shield } from 'lucide-react';
import mascotJoia from '@/assets/mascot-joia.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden gradient-hero">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"
          style={{ background: 'radial-gradient(circle, hsl(204 37% 36% / 0.12) 0%, hsl(189 60% 45% / 0.08) 50%, transparent 70%)' }} 
        />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"
          style={{ background: 'radial-gradient(circle, hsl(189 60% 45% / 0.1) 0%, hsl(204 37% 36% / 0.05) 50%, transparent 70%)' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="animate-fade-in-up max-w-xl">
            {/* Badge */}
            <div className="badge-modern mb-8">
              <img src={mascotJoia} alt="" className="w-6 h-6 object-contain" />
              <span>Soluções digitais que transformam</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
              Crie fácil.
              <br />
              <span className="gradient-text">Cresça rápido.</span>
            </h1>

            <p className="text-muted-foreground text-lg lg:text-xl mb-8 leading-relaxed">
              Desenvolvimento de software, soluções tecnológicas e marketing digital. 
              <span className="text-foreground font-medium"> Tudo em um só lugar.</span>
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#contato" className="btn-primary">
                Fale Conosco
                <ArrowRight size={18} />
              </a>
              <a href="#sobre" className="btn-secondary">
                Por que nós?
              </a>
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="icon-container icon-container-sm">
                  <Zap className="w-4 h-4 text-accent" />
                </div>
                <span>Entregas ágeis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="icon-container icon-container-sm">
                  <Shield className="w-4 h-4 text-accent" />
                </div>
                <span>Tecnologia de ponta</span>
              </div>
            </div>
          </div>

          {/* Visual side */}
          <div className="hidden lg:flex justify-center items-center relative">
            {/* Floating cards */}
            <div className="relative w-full max-w-lg">
              {/* Main mascot with glow */}
              <div className="relative z-10 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full blur-3xl opacity-60"
                    style={{ background: 'radial-gradient(circle, hsl(204 37% 36% / 0.3) 0%, transparent 70%)' }}
                  />
                  <img 
                    src={mascotJoia} 
                    alt="Sharkle Mascot" 
                    className="relative z-10 w-72 h-auto animate-float drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Floating card 1 */}
              <div className="float-card absolute -left-8 top-1/4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-3">
                  <div className="icon-container icon-container-sm">
                    <span className="text-lg">🚀</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">+50 Projetos</p>
                    <p className="text-xs text-muted-foreground">Entregues com sucesso</p>
                  </div>
                </div>
              </div>

              {/* Floating card 2 */}
              <div className="float-card absolute -right-4 bottom-1/4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="icon-container icon-container-sm">
                    <span className="text-lg">⭐</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">100% Dedicação</p>
                    <p className="text-xs text-muted-foreground">Em cada projeto</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;