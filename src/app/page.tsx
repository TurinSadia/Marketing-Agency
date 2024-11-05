import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import WorkSection from "@/components/work-section";
import CommitmentsSection from "@/components/commitments-section";
import HowItWorkSection from "@/components/howItWorks-section";
import OurWork from "@/components/ourWork";
import CtaBanner from "@/components/ctaBanner";
import CtaBanner02 from "@/components/ctaBanner02";
import Team from "@/components/team";
import Footer from "@/components/footer";
import Help from "@/components/help";
import Slider from "@/components/slider";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WorkSection />
      <CommitmentsSection />
      <HowItWorkSection />
      <OurWork />
      <CtaBanner />
      <Team />
      <Slider />
      <CtaBanner02 />
      <Help />
      <Footer />
    </>
  );
}
