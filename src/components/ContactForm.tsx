import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Send, Phone, Mail, Instagram, ArrowRight } from 'lucide-react';
import mascotImpressed from '@/assets/mascot-impressionado.png';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agreed: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreed) {
      toast({
        title: 'Atenção',
        description: 'Você precisa concordar com a Política de Privacidade.',
        variant: 'destructive',
      });
      return;
    }

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
  };

  const contactItems = [
    { icon: Phone, label: 'Telefone', value: '(16) 99355-5072', href: 'tel:+5516993555072' },
    { icon: Mail, label: 'Email', value: 'sharklemkt@gmail.com', href: 'mailto:sharklemkt@gmail.com' },
    { icon: Instagram, label: 'Instagram', value: '@_sharkle', href: 'https://www.instagram.com/_sharkle/' },
  ];

  return (
    <section id="contato" className="section-padding relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20"
        style={{ background: 'radial-gradient(circle, hsl(204 37% 36% / 0.3) 0%, transparent 70%)' }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Contato</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-6">
              Vamos 
              <span className="gradient-text"> conversar?</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Estamos prontos para ouvir suas ideias e transformá-las em realidade. 
              Entre em contato e vamos criar algo incrível juntos.
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-10">
              {contactItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary group-hover:to-accent flex items-center justify-center transition-all duration-300">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-foreground font-semibold">{item.value}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1" />
                </a>
              ))}
            </div>

            {/* Mascot */}
            <div className="hidden lg:block">
              <img 
                src={mascotImpressed} 
                alt="Sharkle Mascot" 
                className="w-48 h-auto drop-shadow-xl"
              />
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-card p-8 lg:p-10 rounded-3xl border border-border/50 shadow-soft-lg relative overflow-hidden">
            {/* Form decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-foreground mb-2">Envie sua mensagem</h3>
              <p className="text-muted-foreground text-sm mb-8">
                Responderemos o mais rápido possível.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Nome
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Seu nome"
                    className="bg-background border-border h-12 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="seu@email.com"
                    className="bg-background border-border h-12 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder="Como podemos ajudar?"
                    rows={4}
                    className="bg-background border-border resize-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="privacy"
                    checked={formData.agreed}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreed: checked as boolean })}
                    className="mt-0.5"
                  />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    Concordo com a{' '}
                    <a href="#" className="text-primary hover:underline font-medium">
                      Política de Privacidade
                    </a>
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-base rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 hover:shadow-primary-lg"
                >
                  Enviar Mensagem
                  <Send size={18} className="ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
