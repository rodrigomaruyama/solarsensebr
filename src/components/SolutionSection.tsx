import { Activity, Cpu, Lightbulb, PiggyBank } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Performance em tempo real",
    description: "Meça irradiância, temperatura e tensão dos painéis a cada segundo. Identifique quedas de eficiência instantaneamente.",
  },
  {
    icon: Cpu,
    title: "Diagnóstico inteligente",
    description: "Algoritmos que comparam a performance real com a esperada, apontando painéis com problemas antes que causem prejuízo.",
  },
  {
    icon: PiggyBank,
    title: "Redução de custos",
    description: "Manutenção preditiva reduz custos operacionais em até 40% e aumenta a vida útil dos equipamentos solares.",
  },
  {
    icon: Lightbulb,
    title: "Decisões baseadas em dados",
    description: "Dashboards claros e relatórios automáticos para gestores tomarem decisões informadas sobre expansão e manutenção.",
  },
];

const SolutionSection = () => {
  return (
    <section id="solucao" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Nossa solução</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Sensor inteligente para máxima eficiência solar
          </h2>
          <p className="text-muted-foreground text-lg">
            Um equipamento compacto e acessível que transforma dados brutos em insights acionáveis para a sua operação solar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="flex gap-5 p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
