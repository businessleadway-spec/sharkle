import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const logos = [
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'AWS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
];

const TrustedBy = () => {
  return (
    <section className="py-16 bg-muted/30 border-y border-border/50 overflow-hidden">
      <ScrollReveal animation="fade-up">
        <div className="container mx-auto px-4 mb-8">
          <p className="text-center text-sm text-muted-foreground uppercase tracking-widest font-medium">
            Tecnologias que dominamos
          </p>
        </div>
      </ScrollReveal>
      
      <ScrollReveal animation="fade-up" delay={0.2}>
        <InfiniteSlider gap={64} duration={30} pauseOnHover className="py-4">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-24 h-24 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-500"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-14 w-auto object-contain"
              />
            </div>
          ))}
        </InfiniteSlider>
      </ScrollReveal>
    </section>
  );
};

export default TrustedBy;
