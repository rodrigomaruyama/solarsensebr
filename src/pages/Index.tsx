import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import LeadForm from "@/components/LeadForm";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import FakeDoorModal from "@/components/FakeDoorModal";

const Index = () => {
  const [demoOpen, setDemoOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onFakeSignIn={() => setSignInOpen(true)} />
      <HeroSection onDemo={() => setDemoOpen(true)} />
      <ProblemSection />
      <SolutionSection />
      <LeadForm />
      <PartnersSection onDemo={() => setDemoOpen(true)} />
      <Footer />

      <FakeDoorModal
        open={demoOpen}
        onOpenChange={setDemoOpen}
        title="Solicitar demonstração"
        description="Nosso produto ainda está em fase de desenvolvimento. Deixe seu e-mail e entraremos em contato assim que a demonstração estiver disponível."
      />

      <FakeDoorModal
        open={signInOpen}
        onOpenChange={setSignInOpen}
        title="Plataforma em construção"
        description="A área do cliente ainda não está disponível. Cadastre seu e-mail para ter acesso prioritário quando lançarmos."
      />
    </div>
  );
};

export default Index;
