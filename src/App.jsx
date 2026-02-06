import "./App.css";
import B2BSection from "./components/B2BSection";
import CollaborationSection from "./components/CollaborationSection";
import ContactSection from "./components/ContactSection";
import CrisisSection from "./components/CrisisSection";
import DashboardPreview from "./components/DashboardPreview";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import { Header } from "./components/header/Header";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import PricingSection from "./components/PricingSection";
import SecuritySection from "./components/SecuritySection";
import SolutionSection from "./components/SolutionSection";
import TargetUsers from "./components/TargetUsers";
import TeamSection from "./components/TeamSection";
import TechSection from "./components/TechSection";
import TestimonialSection from "./components/TestimonialSection";
// import ValidationSection from "./components/ValidationSection";
import WhyPhageMatch from "./components/WhyPhageMatch";
import WorkInProgress from "./components/WorkInProgress";

function App() {
  return (
    <div className="font-inter text-slate-900 bg-slate-50">
      <Header />
      <HeroSection />
      <CrisisSection />
      <WhyPhageMatch />
      <SolutionSection />
      <HowItWorks />
      {/* <ValidationSection /> */}
      <TechSection />
      <DashboardPreview />
      <TargetUsers />
      <B2BSection />
      <SecuritySection />
      <CollaborationSection />
      <TeamSection />
      <WorkInProgress />
      <PricingSection />
      <TestimonialSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
