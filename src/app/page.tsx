import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Problem from "@/components/Problem";
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
      <LogoBar />
      <Problem />
      <System />
      <CaseStudies />
      <Deliverables />
      <ApplicationForm />
      <Footer />
    </main>
  );
}
