import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import GhostSection from "@/components/GhostSection";
import Problem from "@/components/Problem";
import Pipeline from "@/components/Pipeline";
import System from "@/components/System";
import CaseStudies from "@/components/CaseStudies";
import Deliverables from "@/components/Deliverables";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <LogoBar /> */}
      <Problem />
      <div className="max-w-7xl mx-auto px-6 lg:px-12"><div className="h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" /></div>
      <Pipeline />
      <div className="max-w-7xl mx-auto px-6 lg:px-12"><div className="h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" /></div>
      <System />
      <div className="max-w-7xl mx-auto px-6 lg:px-12"><div className="h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" /></div>
      <CaseStudies />
      <div className="max-w-7xl mx-auto px-6 lg:px-12"><div className="h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" /></div>
      <Deliverables />
      <GhostSection />
      <ApplicationForm />
      <Footer />
    </main>
  );
}
