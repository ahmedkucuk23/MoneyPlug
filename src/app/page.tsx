import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Differentiator from "@/components/Differentiator";
import Proof from "@/components/Proof";
import Problem from "@/components/Problem";
import Pipeline from "@/components/Pipeline";
import Calculator from "@/components/Calculator";
import System from "@/components/System";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <LogoBar /> */}
      <Differentiator />
      <div className="max-w-6xl mx-auto px-6 lg:px-12"><div className="h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" /></div>
      <Proof />
      <div className="max-w-6xl mx-auto px-6 lg:px-12"><div className="h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" /></div>
      <Problem />
      <div className="max-w-6xl mx-auto px-6 lg:px-12"><div className="h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" /></div>
      <Pipeline />
      <div className="max-w-6xl mx-auto px-6 lg:px-12"><div className="h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" /></div>
      <Calculator />
      <div className="max-w-6xl mx-auto px-6 lg:px-12"><div className="h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" /></div>
      <System />
      <div className="max-w-6xl mx-auto px-6 lg:px-12"><div className="h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" /></div>
      <ApplicationForm />
      <Footer />
    </main>
  );
}
