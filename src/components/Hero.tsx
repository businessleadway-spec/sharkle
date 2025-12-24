import { ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import mascotJoia from '@/assets/mascot-joia.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden aurora-bg noise">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Animated aurora orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-[10%] w-[700px] h-[700px] rounded-full blur-[150px]"
          style={{ background: 'radial-gradient(circle, hsl(204 80% 60% / 0.2) 0%, transparent 60%)' }}
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-10 left-[5%] w-[600px] h-[600px] rounded-full blur-[130px]"
          style={{ background: 'radial-gradient(circle, hsl(280 70% 60% / 0.15) 0%, transparent 60%)' }}
          animate={{ 
            scale: [1, 1.15, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, hsl(189 90% 50% / 0.12) 0%, transparent 60%)' }}
          animate={{ 
            scale: [1, 1.08, 1],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <motion.div 
            className="max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Soluções digitais que transformam</span>
            </motion.div>

            <motion.h1 
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.05] tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Seja um tubarão
              <br />
              <span className="relative inline-block">
                <span className="gradient-text">no mundo empresarial.</span>
                <motion.svg 
                  className="absolute -bottom-2 left-0 w-full" 
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
              className="text-muted-foreground text-lg lg:text-xl mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Desenvolvimento de software, soluções tecnológicas e marketing digital. 
              <span className="text-foreground font-medium"> Tudo em um só lugar.</span>
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a 
                href="#contato" 
                className="btn-primary"
              >
                <span className="relative z-10">Fale Conosco</span>
                <ArrowRight size={18} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a 
                href="#sobre" 
                className="btn-secondary"
              >
                Por que nós?
              </a>
            </motion.div>

            {/* Feature badges */}
            <motion.div 
              className="flex flex-wrap gap-8 text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl glass border border-primary/20 flex items-center justify-center shadow-glow">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">Entregas ágeis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl glass border border-accent/20 flex items-center justify-center shadow-glow">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <span className="font-medium">Tecnologia de ponta</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual side */}
          <motion.div 
            className="hidden lg:flex justify-center items-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full max-w-lg">
              {/* Decorative rings with aurora colors */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-80 h-80 rounded-full"
                  style={{ border: '1px solid hsl(204 80% 60% / 0.15)' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute w-72 h-72 rounded-full"
                  style={{ border: '1px solid hsl(280 70% 60% / 0.1)' }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute w-64 h-64 rounded-full"
                  style={{ border: '1px solid hsl(189 90% 50% / 0.1)' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Main mascot with enhanced glow */}
              <motion.div 
                className="relative z-10 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
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
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
};

export default Hero;
