import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
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

  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Info */}
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-4">
              Contato
            </p>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-6">
              Vamos 
              <span className="gradient-text"> conversar?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Estamos prontos para ouvir suas ideias e transformá-las em realidade. 
              Entre em contato e vamos criar algo incrível juntos.
            </p>

            {/* Contact info */}
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefone</p>
                  <p className="text-foreground font-medium">(16) 99355-5072</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">sharklemkt@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Instagram</p>
                  <a href="https://www.instagram.com/_sharkle/" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-primary transition-colors">
                    @_sharkle
                  </a>
                </div>
              </div>
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
          <div className="bg-card p-8 lg:p-10 rounded-3xl shadow-xl border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-2">Envie sua mensagem</h3>
            <p className="text-muted-foreground text-sm mb-8">
              Responderemos o mais rápido possível.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nome
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Seu nome"
                  className="bg-background border-border h-12 rounded-xl"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="seu@email.com"
                  className="bg-background border-border h-12 rounded-xl"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  placeholder="Como podemos ajudar?"
                  rows={4}
                  className="bg-background border-border resize-none rounded-xl"
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="privacy"
                  checked={formData.agreed}
                  onCheckedChange={(checked) => setFormData({ ...formData, agreed: checked as boolean })}
                  className="mt-1"
                />
                <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                  Concordo com a{' '}
                  <a href="#" className="text-primary hover:underline">
                    Política de Privacidade
                  </a>
                </label>
              </div>

              <Button type="submit" className="btn-primary w-full h-12 text-base">
                Enviar Mensagem
                <Send size={18} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;