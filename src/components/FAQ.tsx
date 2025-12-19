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
    answer: 'O prazo varia de acordo com a complexidade do projeto. Um site institucional pode levar de 2 a 4 semanas, enquanto sistemas mais complexos podem levar de 2 a 6 meses. Na primeira conversa, faremos uma estimativa detalhada para você.',
  },
  {
    question: 'Vocês oferecem suporte após a entrega do projeto?',
    answer: 'Sim! Oferecemos planos de suporte e manutenção contínua para garantir que seu projeto funcione perfeitamente. Também estamos sempre disponíveis para evoluções e novas funcionalidades.',
  },
  {
    question: 'Como funciona o processo de desenvolvimento?',
    answer: 'Trabalhamos com metodologias ágeis. Primeiro, entendemos suas necessidades em uma reunião de briefing. Depois, criamos protótipos para validação. Com a aprovação, iniciamos o desenvolvimento com entregas incrementais e feedback constante.',
  },
  {
    question: 'Vocês trabalham com empresas de qualquer tamanho?',
    answer: 'Absolutamente! Atendemos desde startups e pequenos negócios até grandes empresas. Cada projeto é tratado com a mesma dedicação e profissionalismo, independente do tamanho.',
  },
  {
    question: 'Quais formas de pagamento vocês aceitam?',
    answer: 'Aceitamos diversas formas de pagamento: PIX, transferência bancária, cartão de crédito e parcelamento. O modelo de pagamento é definido junto com o escopo do projeto.',
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* FAQ content */}
          <div>
            <div className="mb-8">
              <p className="text-primary text-sm uppercase tracking-widest font-medium mb-4 flex items-center gap-2">
                <span>▶</span> DÚVIDAS FREQUENTES
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Perguntas que você pode ter
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50 shadow-sm"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Mascot */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/50 rounded-full blur-3xl scale-75" />
              <img 
                src={mascotSagaz} 
                alt="Sharkle Mascot" 
                className="relative z-10 w-64 h-auto drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;