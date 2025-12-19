import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import mascotSagaz from '@/assets/mascot-sagaz.png';

const faqs = [
  {
    question: 'Quanto tempo leva para desenvolver um projeto?',
    answer: 'O prazo varia de acordo com a complexidade. Um site institucional pode levar de 2 a 4 semanas, enquanto sistemas mais complexos podem levar de 2 a 6 meses. Faremos uma estimativa detalhada na primeira conversa.',
  },
  {
    question: 'Vocês oferecem suporte após a entrega?',
    answer: 'Sim! Oferecemos planos de suporte e manutenção contínua. Também estamos sempre disponíveis para evoluções e novas funcionalidades.',
  },
  {
    question: 'Como funciona o processo de desenvolvimento?',
    answer: 'Trabalhamos com metodologias ágeis. Primeiro entendemos suas necessidades, depois criamos protótipos para validação e iniciamos o desenvolvimento com entregas incrementais.',
  },
  {
    question: 'Vocês trabalham com empresas de qualquer tamanho?',
    answer: 'Absolutamente! Atendemos desde startups até grandes empresas. Cada projeto é tratado com a mesma dedicação e profissionalismo.',
  },
  {
    question: 'Quais formas de pagamento vocês aceitam?',
    answer: 'Aceitamos PIX, transferência bancária, cartão de crédito e parcelamento. O modelo de pagamento é definido junto com o escopo do projeto.',
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding gradient-section">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Content */}
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-4">
              FAQ
            </p>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-8">
              Perguntas 
              <span className="gradient-text"> frequentes</span>
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-2xl px-6 shadow-soft data-[state=open]:shadow-primary-lg data-[state=open]:border-primary/30 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5 text-base font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Mascot */}
          <div className="hidden lg:flex justify-center items-center sticky top-32">
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-3xl scale-75 opacity-60"
                style={{ background: 'radial-gradient(circle, hsl(189 60% 45% / 0.25) 0%, hsl(204 37% 36% / 0.15) 50%, transparent 70%)' }}
              />
              <img 
                src={mascotSagaz} 
                alt="Sharkle Mascot" 
                className="relative z-10 w-56 h-auto drop-shadow-xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;