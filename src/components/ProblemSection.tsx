import { AlertTriangle, TrendingDown, Eye } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Perdas financeiras ocultas",
    description: "Painéis solares degradados ou com defeitos podem perder até 25% da capacidade de geração sem que o operador perceba, gerando prejuízos significativos.",
  },
  {
    icon: Eye,
    title: "Monitoramento insuficiente",
    description: "A maioria das instalações comerciais e industriais não possui ferramentas adequadas para monitorar a performance real de cada painel em tempo real.",
  },
  {
    icon: AlertTriangle,
    title: "Manutenção reativa",
    description: "Sem dados precisos, a manutenção ocorre de forma reativa — somente após falhas evidentes — aumentando custos e o tempo de inatividade dos sistemas.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problema" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">O problema</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Energia solar sem inteligência é dinheiro desperdiçado
          </h2>
          <p className="text-muted-foreground text-lg">
            Empresas em São Paulo investem milhões em energia solar, mas não possuem visibilidade real sobre a performance dos seus sistemas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-border bg-card p-8 shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <item.icon className="h-6 w-6 text-accent-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-card-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
