import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";

interface HeroSectionProps {
  onDemo: () => void;
}

const HeroSection = ({ onDemo }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Painéis solares industriais" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero opacity-85" />
      </div>

      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary-foreground/80 animate-fade-up">
            <BarChart3 className="h-4 w-4" />
            Projeto acadêmico — USP
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Monitoramento inteligente para{" "}
            <span className="text-gradient-primary">painéis solares</span>{" "}
            industriais
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Sensores de alta precisão para avaliar a eficiência dos seus painéis solares em tempo real. Reduza perdas, otimize a geração e tome decisões baseadas em dados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" className="text-base" onClick={onDemo}>
              Solicitar demonstração
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="lg" className="text-base" asChild>
              <a href="#solucao">Conheça a solução</a>
            </Button>
          </div>

          <div className="flex gap-8 pt-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "30%", label: "mais eficiência" },
              { value: "24/7", label: "monitoramento" },
              { value: "ROI", label: "comprovável" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl font-bold text-primary-foreground">{stat.value}</div>
                <div className="text-xs text-primary-foreground/50 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
