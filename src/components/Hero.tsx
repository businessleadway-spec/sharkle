import { ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import mascotJoia from '@/assets/mascot-joia.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 sm:pt-20 lg:pt-0 lg:pb-0 overflow-hidden aurora-bg noise">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Optimized aurora orbs using pure CSS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 right-[10%] w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] rounded-full blur-[80px] lg:blur-[100px] animate-aurora-orb-1"
          style={{ background: 'radial-gradient(circle, hsl(204 80% 60% / 0.15) 0%, transparent 60%)' }}
        />
        <div 
          className="absolute bottom-10 left-[5%] w-[250px] sm:w-[300px] lg:w-[400px] h-[250px] sm:h-[300px] lg:h-[400px] rounded-full blur-[60px] lg:blur-[80px] animate-aurora-orb-2"
          style={{ background: 'radial-gradient(circle, hsl(280 70% 60% / 0.1) 0%, transparent 60%)' }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Text content */}
          <motion.div 
            className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass border border-primary/20 mb-6 sm:mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-primary">Soluções digitais que transformam</span>
            </motion.div>

            <motion.h1 
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Seja um tubarão
              <br />
              <span className="relative inline-block">
                <span className="gradient-text">no mundo empresarial.</span>
                <motion.svg 
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full" 
                  viewBox="0 0 300 12" 
                  fill="none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <motion.path 
                    d="M2 10C50 4 100 2 150 6C200 10 250 8 298 4" 
                    stroke="url(#gradient)" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(204 80% 60%)" />
                      <stop offset="50%" stopColor="hsl(189 90% 50%)" />
                      <stop offset="100%" stopColor="hsl(280 70% 60%)" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
            </motion.h1>

            <motion.p 
              className="text-muted-foreground text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Desenvolvimento de software, soluções tecnológicas e marketing digital. 
              <span className="text-foreground font-medium"> Tudo em um só lugar.</span>
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a 
                href="#contato" 
                className="btn-primary w-full sm:w-auto"
              >
                <span className="relative z-10">Fale Conosco</span>
                <ArrowRight size={18} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a 
                href="#sobre" 
                className="btn-secondary w-full sm:w-auto"
              >
                Por que nós?
              </a>
            </motion.div>

            {/* Feature badges */}
            <motion.div 
              className="flex flex-wrap gap-4 sm:gap-8 text-sm text-muted-foreground justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl glass border border-primary/20 flex items-center justify-center shadow-glow">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <span className="font-medium text-sm sm:text-base">Entregas ágeis</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl glass border border-accent/20 flex items-center justify-center shadow-glow">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                </div>
                <span className="font-medium text-sm sm:text-base">Tecnologia de ponta</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual side - Mobile version */}
          <motion.div 
            className="flex lg:hidden justify-center items-center mt-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <div 
                className="absolute inset-0 rounded-full blur-[60px] scale-125 animate-pulse-glow"
                style={{ 
                  background: 'radial-gradient(circle, hsl(204 80% 60% / 0.3) 0%, hsl(280 70% 60% / 0.15) 40%, transparent 70%)' 
                }}
              />
              <img 
                src={mascotJoia} 
                alt="Sharkle Mascot" 
                className="relative z-10 w-40 sm:w-52 h-auto animate-float drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Visual side - Desktop version */}
          <motion.div 
            className="hidden lg:flex justify-center items-center relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full max-w-lg">
              {/* Decorative rings with CSS animations */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-72 h-72 rounded-full animate-spin-slow border border-primary/10"
                />
                <div 
                  className="absolute w-60 h-60 rounded-full animate-spin-reverse border border-accent/10"
                />
              </div>

              {/* Main mascot with enhanced glow */}
              <motion.div 
                className="relative z-10 flex justify-center"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="relative">
                  <div 
                    className="absolute inset-0 rounded-full blur-[100px] scale-150 animate-pulse-glow"
                    style={{ 
                      background: 'radial-gradient(circle, hsl(204 80% 60% / 0.4) 0%, hsl(280 70% 60% / 0.2) 40%, transparent 70%)' 
                    }}
                  />
                  <img 
                    src={mascotJoia} 
                    alt="Sharkle Mascot" 
                    className="relative z-10 w-72 h-auto animate-float drop-shadow-2xl"
                  />
                </div>
              </motion.div>

              {/* Floating glass card 1 */}
              <motion.div 
                className="absolute -left-4 top-1/4 float-card"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-xl">🚀</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">+50 Projetos</p>
                    <p className="text-xs text-muted-foreground">Entregues com sucesso</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating glass card 2 */}
              <motion.div 
                className="absolute -right-4 bottom-1/4 float-card"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-aurora-2/30 to-aurora-3/30 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-xl">⭐</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">100% Dedicação</p>
                    <p className="text-xs text-muted-foreground">Em cada projeto</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating glass card 3 */}
              <motion.div 
                className="absolute left-1/2 -translate-x-1/2 -bottom-4 float-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-aurora-1/30 to-primary/30 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-xl">💡</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Inovação</p>
                    <p className="text-xs text-muted-foreground">Soluções criativas</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
};

export default Hero;
