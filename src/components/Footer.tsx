import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-display font-bold text-foreground">
            <Zap className="h-5 w-5 text-primary" />
            SolarSense
          </div>

          <p className="text-sm text-muted-foreground text-center max-w-md">
            Projeto desenvolvido como parte da disciplina de Empreendedorismo Científico — Universidade de São Paulo (USP).
          </p>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-foreground transition-colors">Contato</a>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} SolarSense. Protótipo acadêmico — produto em desenvolvimento.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
