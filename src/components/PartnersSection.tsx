import { Button } from "@/components/ui/button";
import { Handshake, Building2, Factory } from "lucide-react";

interface PartnersSectionProps {
  onDemo: () => void;
}

const PartnersSection = ({ onDemo }: PartnersSectionProps) => {
  return (
    <section id="parceiros" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Parceiros</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Construa conosco o futuro da energia solar
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Buscamos empresas industriais e comerciais em São Paulo interessadas em colaborar no desenvolvimento e validação do nosso sensor. Seja parceiro e tenha acesso prioritário à tecnologia.
              </p>
              <Button size="lg" onClick={onDemo}>
                <Handshake className="mr-2 h-5 w-5" />
                Quero ser parceiro
              </Button>
            </div>

            <div className="space-y-4">
              {[
                { icon: Factory, title: "Indústrias", desc: "Grandes instalações solares em telhados industriais que necessitam de monitoramento contínuo." },
                { icon: Building2, title: "Comércios", desc: "Redes comerciais com múltiplas unidades e sistemas fotovoltaicos distribuídos." },
                { icon: Handshake, title: "Integradores", desc: "Empresas de energia solar que buscam diferenciar seus serviços com monitoramento avançado." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 rounded-xl bg-card border border-border shadow-card">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-card-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
