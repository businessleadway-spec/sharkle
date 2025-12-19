const partners = [
  { name: 'Kaspersky', logo: '🛡️' },
  { name: 'Linux', logo: '🐧' },
  { name: 'Fortinet', logo: '🔒' },
  { name: 'Veeam', logo: '💾' },
  { name: 'Cisco', logo: '🌐' },
  { name: 'Microsoft', logo: '🪟' },
  { name: 'AWS', logo: '☁️' },
  { name: 'XLabs', logo: '🔬' },
];

const Partners = () => {
  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-muted-foreground mb-2">
            Escolhemos a dedo os melhores fabricantes, aderentes à realidade e necessidades de nossos clientes.
          </p>
          <p className="text-primary font-medium">
            Equipe treinada e certificada em todos os produtos.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground">
              Segurança empresarial em que você pode confiar.
            </h3>
            <p className="text-muted-foreground mt-2">
              Concentre-se nos seus negócios, deixe a segurança dos dados conosco.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
              >
                <span className="text-4xl">{partner.logo}</span>
                <span className="text-xs text-muted-foreground">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
