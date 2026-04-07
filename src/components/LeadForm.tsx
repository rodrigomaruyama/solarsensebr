import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Mail } from "lucide-react";

const LeadForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="interesse" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary font-medium mb-6">
            <Mail className="h-4 w-4" />
            Lista de interesse
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Seja um dos primeiros a testar
          </h2>
          <p className="text-muted-foreground text-lg mb-2">
            O SolarSense ainda está em desenvolvimento. Cadastre-se para receber novidades e ter acesso antecipado quando lançarmos.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            Projeto em estágio inicial — estamos validando o interesse do mercado.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-foreground mb-1 block">Nome</label>
                <Input
                  id="name"
                  placeholder="Seu nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground mb-1 block">E-mail</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Entrar na lista de espera
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Seus dados não serão compartilhados. Usaremos apenas para informar sobre o lançamento.
              </p>
            </form>
          ) : (
            <div className="rounded-xl border border-primary/20 bg-accent p-8 text-center space-y-3">
              <CheckCircle2 className="h-12 w-12 text-primary mx-auto" />
              <h3 className="font-display text-xl font-semibold text-foreground">Cadastro realizado!</h3>
              <p className="text-muted-foreground">
                Obrigado, {name}! Entraremos em contato pelo e-mail <strong className="text-foreground">{email}</strong> assim que tivermos novidades.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
