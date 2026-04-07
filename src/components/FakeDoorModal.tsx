import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { CheckCircle2, Rocket } from "lucide-react";

interface FakeDoorModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
}

const FakeDoorModal = ({ open, onOpenChange, title, description }: FakeDoorModalProps) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {!submitted ? (
          <>
            <DialogHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <DialogTitle className="text-center font-display">
                {title || "Estamos quase lá!"}
              </DialogTitle>
              <DialogDescription className="text-center">
                {description || "O SolarSense ainda está em desenvolvimento. Deixe seu e-mail para ser notificado quando estiver disponível e garantir acesso antecipado."}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <Input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="w-full">
                Quero ser avisado
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center py-4 space-y-3">
            <CheckCircle2 className="h-12 w-12 text-primary mx-auto" />
            <h3 className="font-display text-xl font-semibold text-foreground">Anotado!</h3>
            <p className="text-muted-foreground text-sm">
              Enviaremos novidades para <strong className="text-foreground">{email}</strong>. Obrigado pelo interesse!
            </p>
            <Button variant="outline" onClick={handleClose} className="mt-2">
              Fechar
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FakeDoorModal;
