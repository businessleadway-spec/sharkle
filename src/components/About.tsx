const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <div className="animate-slide-in-left">
            <div className="section-subtitle mb-4">SOBRE NÓS</div>
            <h2 className="section-title mb-6">
              Proteção Proativa para os seus negócios.
            </h2>
            <p className="text-primary text-lg">
              Nossa missão é proteger sua empresa das ameaças virtuais. Onde elas estiverem!
            </p>
          </div>

          {/* Right column */}
          <div className="space-y-6 text-muted-foreground animate-slide-in-right">
            <p>
              A NETDEEP iniciou sua trajetória em 2009, no interior do Brasil. Desde então temos ampliado nossa presença em todo o território nacional por meio de uma sólida rede de parceiros, implementando soluções avançadas em cibersegurança.
            </p>
            <p>
              Um de nossos principais produtos é o <strong className="text-foreground">Netdeep Secure Firewall</strong> uma solução de firewall de próxima geração com Segurança Zero Trust, SD-WAN e Detecção e Resposta à Ameaças.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
