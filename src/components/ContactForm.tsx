import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import mascotImpressed from '@/assets/mascot-impressionado.png';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    agreed: false,
    antiSpam: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.antiSpam !== '8') {
      toast({
        title: 'Erro',
        description: 'Resposta incorreta para a pergunta anti-spam.',
        variant: 'destructive',
      });
      return;
    }

    if (!formData.agreed) {
      toast({
        title: 'Erro',
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
      phone: '',
      email: '',
      company: '',
      subject: '',
      message: '',
      agreed: false,
      antiSpam: '',
    });
  };

  return (
    <section id="contato" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-75" />
              <div className="relative z-10 text-center">
                <img 
                  src={mascotImpressed} 
                  alt="Sharkle Mascot" 
                  className="w-64 h-auto mx-auto drop-shadow-xl mb-6"
                />
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Vamos conversar?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Estamos prontos para ouvir suas ideias e transformá-las em realidade.
                </p>
                <div className="space-y-3 text-left max-w-xs mx-auto">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="text-primary">📱</span>
                    <span>(16) 99355-5072</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="text-primary">📱</span>
                    <span>(16) 99233-4868</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="text-primary">📧</span>
                    <span>sharklemkt@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Envie sua mensagem</h3>
              <p className="text-muted-foreground text-sm">
                Campos marcados com * são requeridos
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    maxLength={40}
                    required
                    className="bg-background border-border"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {40 - formData.name.length} de 40 caractere(s) restantes
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefone *
                  </label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Endereço de e-mail *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Empresa
                  </label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Assunto *
                </label>
                <Input
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="bg-background border-border resize-none"
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
                  Estou de acordo com a{' '}
                  <a href="#" className="text-primary hover:underline">
                    Política de Privacidade
                  </a>{' '}
                  e autorizo o contato. *
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Anti-Spam: Quanto é 6+2 ? *
                </label>
                <Input
                  value={formData.antiSpam}
                  onChange={(e) => setFormData({ ...formData, antiSpam: e.target.value })}
                  required
                  className="bg-background border-border max-w-32"
                />
              </div>

              <Button type="submit" className="btn-primary w-full">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;