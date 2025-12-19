import mascotHandshake from '@/assets/mascot-handshake.png';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Image */}
          <div className="animate-slide-in-left flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-75" />
              <img 
                src={mascotHandshake} 
                alt="Sharkle Partnership" 
                className="relative z-10 w-72 h-auto drop-shadow-xl"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="section-subtitle mb-4">SOBRE NÓS</div>
            <h2 className="section-title mb-6">
              Parceria que impulsiona resultados.
            </h2>
            <p className="text-primary text-lg font-medium">
              Somos a Sharkle — seu parceiro estratégico em desenvolvimento de software, soluções tecnológicas e marketing digital.
            </p>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Com uma equipe apaixonada por inovação, desenvolvemos soluções personalizadas que ajudam empresas a crescerem no ambiente digital. Da concepção à execução, estamos presentes em cada etapa do seu projeto.
              </p>
              <p>
                Nossa abordagem combina <strong className="text-foreground">criatividade, tecnologia de ponta e estratégias orientadas por dados</strong> para entregar resultados que realmente fazem a diferença para o seu negócio.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Projetos Entregues</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Dedicação</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">∞</p>
                <p className="text-sm text-muted-foreground">Ideias</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;