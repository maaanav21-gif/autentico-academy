import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Associates from "@/components/sections/Associates";
import Programs from "@/components/sections/Programs";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import About from "@/components/sections/About";
import LabInfrastructure from "@/components/sections/LabInfrastructure";
import InfrastructurePartnerships from "@/components/sections/InfrastructurePartnerships";
import EnhancedCertificates from "@/components/sections/EnhancedCertificates";
import AwardsAchievements from "@/components/sections/AwardsAchievements";
import HallOfFame from "@/components/sections/HallOfFame";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import EnquiryForm from "@/components/sections/EnquiryForm";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Associates />
        <Programs />
        <WhyChooseUs />
        <About />
        <LabInfrastructure />
        <InfrastructurePartnerships />
        <EnhancedCertificates />
        <AwardsAchievements />
        <HallOfFame />
        <Stats />
        <Testimonials />
        <EnquiryForm />
      </main>
      <Footer />
    </div>
  );
}
