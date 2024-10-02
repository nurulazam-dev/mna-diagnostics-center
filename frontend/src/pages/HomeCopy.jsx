import AdsBanner from "../components/HomeCopy/AdsBanner";
import BestCard from "../components/HomeCopy/BestCard";
import ContactSection from "../components/HomeCopy/ContactSection";
import FaqSection from "../components/HomeCopy/FaqSection";
import HeroSection from "../components/HomeCopy/HeroSection";
import LatestNews from "../components/HomeCopy/LatestNews";
import OurServices from "../components/HomeCopy/Services/OurServices";
import WhyChooseUs from "../components/HomeCopy/WhyChooseUs";

const HomeCopy = () => {
  return (
    <>
      <HeroSection />
      <BestCard />
      <WhyChooseUs />
      <OurServices />
      <AdsBanner />
      <FaqSection />
      <LatestNews />
      <ContactSection />
    </>
  );
};

export default HomeCopy;
