import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Send, Phone, Mail, Instagram, ArrowRight, Loader2 } from 'lucide-react';
import mascotImpressed from '@/assets/mascot-impressionado.png';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/scroll-reveal';
import { supabase } from '@/integrations/supabase/client';
import { z } from 'zod';

// Validation schema for contact form
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Nome deve ter pelo menos 2 caracteres' })
    .max(100, { message: 'Nome deve ter no máximo 100 caracteres' })
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, { message: 'Nome contém caracteres inválidos' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Email inválido' })
    .max(254, { message: 'Email deve ter no máximo 254 caracteres' }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Mensagem deve ter pelo menos 10 caracteres' })
    .max(2000, { message: 'Mensagem deve ter no máximo 2000 caracteres' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agreed: false,
  });

  const validateField = (field: keyof ContactFormData, value: string) => {
    try {
      contactSchema.shape[field].parse(value);
      setErrors(prev => ({ ...prev, [field]: undefined }));
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(prev => ({ ...prev, [field]: error.errors[0]?.message }));
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreed) {
      toast({
        title: 'Atenção',
        description: 'Você precisa concordar com a Política de Privacidade.',
        variant: 'destructive',
      });
      return;
    }

    // Validate all fields
    const validationResult = contactSchema.safeParse({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });

    if (!validationResult.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      validationResult.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) {
          fieldErrors[field] = err.message;
        }
      });
      setErrors(fieldErrors);
      toast({
        title: 'Dados inválidos',
        description: 'Por favor, corrija os erros no formulário.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data: validData } = validationResult;
      
      const { error } = await supabase
        .from('leads')
        .insert({
          name: validData.name,
          email: validData.email,
          message: validData.message,
        });

      if (error) throw error;

      toast({
        title: 'Mensagem enviada!',
        description: 'Entraremos em contato em breve.',
      });

      setFormData({
        name: '',
        email: '',
        message: '',
        agreed: false,
      });
      setErrors({});
    } catch (error) {
      toast({
        title: 'Erro ao enviar',
        description: 'Tente novamente mais tarde.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    { icon: Phone, label: 'Telefone', value: '(16) 99355-5072', href: 'tel:+5516993555072' },
    { icon: Mail, label: 'Email', value: 'sharklemkt@gmail.com', href: 'mailto:sharklemkt@gmail.com' },
    { icon: Instagram, label: 'Instagram', value: '@_sharkle', href: 'https://www.instagram.com/_sharkle/' },
  ];

  return (
    <section id="contato" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden bg-background noise">
      {/* Background decoration */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full blur-[100px] sm:blur-[150px] opacity-20"
        style={{ background: 'radial-gradient(circle, hsl(200 50% 70% / 0.3) 0%, transparent 70%)' }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left side - Info */}
          <div>
            <ScrollReveal animation="fade-up">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 mb-4 sm:mb-6 shadow-sm">
                <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider">Contato</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={0.1}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-4 sm:mb-6">
                Vamos 
                <span className="gradient-text"> conversar?</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={0.2}>
              <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
                Estamos prontos para ouvir suas ideias e transformá-las em realidade. 
                Entre em contato e vamos criar algo incrível juntos.
              </p>
            </ScrollReveal>

            {/* Contact info */}
            <StaggerContainer className="space-y-3 sm:space-y-4 mb-8 sm:mb-10" staggerDelay={0.1}>
              {contactItems.map((item, index) => (
                <StaggerItem key={index}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary group-hover:to-accent flex items-center justify-center transition-all duration-300">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-foreground font-semibold text-sm sm:text-base truncate">{item.value}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1 flex-shrink-0" />
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Mascot */}
            <ScrollReveal animation="fade-up" delay={0.4} className="hidden lg:block">
              <img 
                src={mascotImpressed} 
                alt="Sharkle Mascot" 
                className="w-48 h-auto drop-shadow-xl"
              />
            </ScrollReveal>
          </div>

          {/* Right side - Form */}
          <ScrollReveal animation="fade-left" delay={0.2}>
            <div className="bg-card p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-border/50 shadow-soft-lg relative overflow-hidden">
              {/* Form decoration */}
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1 sm:mb-2">Envie sua mensagem</h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-6 sm:mb-8">
                  Responderemos o mais rápido possível.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2">
                      Nome
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) validateField('name', e.target.value);
                      }}
                      onBlur={(e) => validateField('name', e.target.value)}
                      required
                      maxLength={100}
                      placeholder="Seu nome"
                      className={`bg-background border-border h-10 sm:h-12 rounded-lg sm:rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${errors.name ? 'border-destructive' : ''}`}
                    />
                    {errors.name && (
                      <p className="text-destructive text-xs sm:text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) validateField('email', e.target.value);
                      }}
                      onBlur={(e) => validateField('email', e.target.value)}
                      required
                      maxLength={254}
                      placeholder="seu@email.com"
                      className={`bg-background border-border h-10 sm:h-12 rounded-lg sm:rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${errors.email ? 'border-destructive' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-destructive text-xs sm:text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) validateField('message', e.target.value);
                      }}
                      onBlur={(e) => validateField('message', e.target.value)}
                      required
                      maxLength={2000}
                      placeholder="Como podemos ajudar?"
                      rows={3}
                      className={`bg-background border-border resize-none rounded-lg sm:rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${errors.message ? 'border-destructive' : ''}`}
                    />
                    {errors.message && (
                      <p className="text-destructive text-xs sm:text-sm mt-1">{errors.message}</p>
                    )}
                    <p className="text-muted-foreground text-xs mt-1 text-right">
                      {formData.message.length}/2000
                    </p>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3">
                    <Checkbox
                      id="privacy"
                      checked={formData.agreed}
                      onCheckedChange={(checked) => setFormData({ ...formData, agreed: checked as boolean })}
                      className="mt-0.5"
                    />
                    <label htmlFor="privacy" className="text-xs sm:text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      Concordo com a{' '}
                      <a href="#" className="text-primary hover:underline font-medium">
                        Política de Privacidade
                      </a>
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-10 sm:h-12 text-sm sm:text-base rounded-lg sm:rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 hover:shadow-primary-lg disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        Enviando...
                        <Loader2 size={18} className="ml-2 animate-spin" />
                      </>
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send size={18} className="ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
