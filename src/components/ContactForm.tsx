import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

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
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl" />
              <div className="aspect-square bg-card rounded-2xl flex items-center justify-center border border-border">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-6xl">🛡️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Cybersecurity Analyst
                  </h3>
                  <p className="text-muted-foreground">
                    Protegendo sua empresa 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form side */}
          <div>
            <div className="mb-8">
              <p className="text-muted-foreground text-sm mb-2">
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
                    className="bg-card border-border"
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
                    className="bg-card border-border"
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
                    className="bg-card border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Empresa *
                  </label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                    className="bg-card border-border"
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
                  className="bg-card border-border"
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
                  className="bg-card border-border resize-none"
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="privacy"
                  checked={formData.agreed}
                  onCheckedChange={(checked) => setFormData({ ...formData, agreed: checked as boolean })}
                />
                <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                  Estou de acordo com a{' '}
                  <a href="#" className="text-primary hover:underline">
                    Política de Privacidade
                  </a>{' '}
                  e autorizo a coleta, recepção, registro, uso, processamento, armazenamento de meus dados pessoais coletados e inclusão de banco de dados com a finalidade para desenvolvimento de proposta comercial. *
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
                  className="bg-card border-border max-w-32"
                />
              </div>

              <Button type="submit" className="btn-primary w-full md:w-auto">
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
