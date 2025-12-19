import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: 'Por que minha empresa deve investir em cibersegurança?',
    answer: 'Qualquer empresa, de qualquer tamanho, em qualquer momento, deve investir em cibersegurança para proteger dados sensíveis contra ataques e evitar prejuízos financeiros. Além disso, garantirá a confiança dos clientes e a continuidade dos negócios diante de ameaças crescentes.',
  },
  {
    question: 'Vocês podem ajudar minha empresa a se adequar à LGPD?',
    answer: 'Sim! Adequar-se à LGPD (Lei Geral de Proteção de Dados) é essencial para que a empresa evite multas e sanções, que podem ser significativas em caso de não conformidade. Além disso, garante a proteção dos dados pessoais dos clientes, aumentando a confiança e a credibilidade no mercado.',
  },
  {
    question: 'Vocês podem ajudar a minha empresa à se proteger contra Sequestro de Dados (Ransomware)?',
    answer: 'Sim! Proteger-se contra Ransomware é vital para evitar a paralisação das operações e o sequestro de dados críticos, que pode resultar em perdas financeiras e danos à reputação. Ataques de ransomware podem exigir resgates elevados e causar interrupções prolongadas. Implementar medidas de proteção é essencial para manter a continuidade do negócio e minimizar riscos.',
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50"
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
      </div>
    </section>
  );
};

export default FAQ;
