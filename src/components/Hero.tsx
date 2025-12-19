import { ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';
import mascotJoia from '@/assets/mascot-joia.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
      
      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 right-[10%] w-[600px] h-[600px] rounded-full blur-[120px] animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, hsl(204 37% 36% / 0.15) 0%, transparent 70%)' }} 
        />
        <div 
          className="absolute bottom-20 left-[5%] w-[500px] h-[500px] rounded-full blur-[100px] animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, hsl(189 60% 45% / 0.12) 0%, transparent 70%)', animationDelay: '1.5s' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-30"
          style={{ background: 'radial-gradient(circle, hsl(204 37% 36% / 0.1) 0%, transparent 60%)' }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8 animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Soluções digitais que transformam</span>
            </div>

            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.05] tracking-tight mb-6 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Crie fácil.
              <br />
              <span className="relative inline-block">
                <span className="gradient-text">Cresça rápido.</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path 
                    d="M2 10C50 4 100 2 150 6C200 10 250 8 298 4" 
                    stroke="url(#gradient)" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    className="animate-fade-in"
                    style={{ animationDelay: '0.8s' }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(204 37% 36%)" />
                      <stop offset="100%" stopColor="hsl(189 60% 45%)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p 
              className="text-muted-foreground text-lg lg:text-xl mb-10 leading-relaxed animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              Desenvolvimento de software, soluções tecnológicas e marketing digital. 
              <span className="text-foreground font-medium"> Tudo em um só lugar.</span>
            </p>

            <div 
              className="flex flex-wrap gap-4 mb-12 animate-fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              <a 
                href="#contato" 
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-full font-semibold text-base overflow-hidden transition-all duration-300 hover:shadow-primary-lg hover:scale-[1.02]"
              >
                <span className="relative z-10">Fale Conosco</span>
                <ArrowRight size={18} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
              <a 
                href="#sobre" 
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent border-2 border-border text-foreground rounded-full font-semibold text-base hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                Por que nós?
              </a>
            </div>

            {/* Feature badges */}
            <div 
              className="flex flex-wrap gap-8 text-sm text-muted-foreground animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">Entregas ágeis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">Tecnologia de ponta</span>
              </div>
            </div>
          </div>

          {/* Visual side */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="relative w-full max-w-lg">
              {/* Decorative ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full border border-primary/10 animate-[spin_30s_linear_infinite]" />
                <div className="absolute w-72 h-72 rounded-full border border-accent/10 animate-[spin_25s_linear_infinite_reverse]" />
              </div>

              {/* Main mascot with enhanced glow */}
              <div className="relative z-10 flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="relative">
                  <div 
                    className="absolute inset-0 rounded-full blur-[80px] scale-150 opacity-50 animate-pulse-glow"
                    style={{ background: 'radial-gradient(circle, hsl(204 37% 36% / 0.4) 0%, hsl(189 60% 45% / 0.2) 50%, transparent 70%)' }}
                  />
                  <img 
                    src={mascotJoia} 
                    alt="Sharkle Mascot" 
                    className="relative z-10 w-72 h-auto animate-float drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Floating card 1 */}
              <div 
                className="absolute -left-4 top-1/4 bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50 p-4 shadow-soft-lg animate-fade-in hover:shadow-primary transition-shadow duration-300"
                style={{ animationDelay: '0.5s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-xl">🚀</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">+50 Projetos</p>
                    <p className="text-xs text-muted-foreground">Entregues com sucesso</p>
                  </div>
                </div>
              </div>

              {/* Floating card 2 */}
              <div 
                className="absolute -right-4 bottom-1/4 bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50 p-4 shadow-soft-lg animate-fade-in hover:shadow-primary transition-shadow duration-300"
                style={{ animationDelay: '0.7s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <span className="text-xl">⭐</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">100% Dedicação</p>
                    <p className="text-xs text-muted-foreground">Em cada projeto</p>
                  </div>
                </div>
              </div>

              {/* Floating card 3 - New */}
              <div 
                className="absolute left-1/2 -translate-x-1/2 -bottom-4 bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50 p-4 shadow-soft-lg animate-fade-in hover:shadow-primary transition-shadow duration-300"
                style={{ animationDelay: '0.9s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-xl">💡</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Inovação</p>
                    <p className="text-xs text-muted-foreground">Soluções criativas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
