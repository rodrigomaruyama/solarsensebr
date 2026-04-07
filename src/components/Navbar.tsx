import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

interface NavbarProps {
  onFakeSignIn: () => void;
}

const Navbar = ({ onFakeSignIn }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-lg text-foreground">
          <Zap className="h-6 w-6 text-primary" />
          SolarSense
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#problema" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Problema</a>
          <a href="#solucao" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Solução</a>
          <a href="#interesse" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Lista de Espera</a>
          <a href="#parceiros" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Parceiros</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={onFakeSignIn}>
            Acessar plataforma
          </Button>
          <Button size="sm" asChild>
            <a href="#interesse">Solicitar demonstração</a>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          <a href="#problema" className="block text-sm text-muted-foreground py-2" onClick={() => setMobileOpen(false)}>Problema</a>
          <a href="#solucao" className="block text-sm text-muted-foreground py-2" onClick={() => setMobileOpen(false)}>Solução</a>
          <a href="#interesse" className="block text-sm text-muted-foreground py-2" onClick={() => setMobileOpen(false)}>Lista de Espera</a>
          <a href="#parceiros" className="block text-sm text-muted-foreground py-2" onClick={() => setMobileOpen(false)}>Parceiros</a>
          <Button variant="ghost" size="sm" className="w-full justify-start" onClick={() => { onFakeSignIn(); setMobileOpen(false); }}>
            Acessar plataforma
          </Button>
          <Button size="sm" className="w-full" asChild>
            <a href="#interesse" onClick={() => setMobileOpen(false)}>Solicitar demonstração</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
