import AdsBanner from "../components/HomeCopy/AdsBanner";
import Awards from "../components/HomeCopy/Awards";
import BestCard from "../components/HomeCopy/BestCard";
import ContactSection from "../components/HomeCopy/ContactSection";
import FaqSection from "../components/HomeCopy/FaqSection";
import HeroSection from "../components/HomeCopy/HeroSection";
import LatestNews from "../components/HomeCopy/LatestNews";
import OurServices from "../components/HomeCopy/Services/OurServices";
import VirtualTreatment from "../components/HomeCopy/VirtualTreatment";
import WhyChooseUs from "../components/HomeCopy/WhyChooseUs";

const HomeCopy = () => {
  return (
    <>
      <HeroSection />
      <Awards />
      <OurServices />
      <BestCard />
      <AdsBanner />
      <VirtualTreatment />
      <WhyChooseUs />
      <FaqSection />
      <LatestNews />
      <ContactSection />
    </>
  );
};

export default HomeCopy;
