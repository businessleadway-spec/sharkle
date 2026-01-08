import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import mascotSagaz from '@/assets/mascot-sagaz.png';
import { HelpCircle } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/scroll-reveal';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const mascotY = useTransform(scrollYProgress, [0, 1], ['30%', '-30%']);

  return (
    <section ref={sectionRef} id="faq" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Content */}
          <div>
            <ScrollReveal animation="fade-up">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/5 border border-primary/10 mb-4 sm:mb-6">
                <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={0.1}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-8 sm:mb-10">
                Perguntas 
                <span className="gradient-text"> frequentes</span>
              </h2>
            </ScrollReveal>

            <StaggerContainer staggerDelay={0.1}>
              <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                {faqs.map((faq, index) => (
                  <StaggerItem key={index}>
                    <AccordionItem
                      value={`item-${index}`}
                      className="bg-card border border-border/50 rounded-xl sm:rounded-2xl px-4 sm:px-6 overflow-hidden data-[state=open]:border-primary/30 data-[state=open]:shadow-soft transition-all duration-300"
                    >
                      <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4 sm:py-5 text-sm sm:text-base font-semibold [&[data-state=open]]:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4 sm:pb-5 leading-relaxed text-sm sm:text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </StaggerItem>
                ))}
              </Accordion>
            </StaggerContainer>
          </div>

          {/* Mascot with parallax */}
          <motion.div 
            className="hidden lg:flex justify-center items-center sticky top-32"
            style={{ y: mascotY }}
          >
            <ScrollReveal animation="zoom-in" delay={0.3}>
              <div className="relative">
                <div 
                  className="absolute inset-0 rounded-full blur-[80px] scale-125 opacity-40"
                  style={{ background: 'radial-gradient(circle, hsl(189 60% 45% / 0.3) 0%, hsl(204 37% 36% / 0.2) 50%, transparent 70%)' }}
                />
                <img 
                  src={mascotSagaz} 
                  alt="Sharkle Mascot" 
                  className="relative z-10 w-64 h-auto drop-shadow-2xl animate-float"
                />
              </div>
            </ScrollReveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
