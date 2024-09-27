import AdsBanner from "../components/HomeCopy/AdsBanner";
import ContactSection from "../components/HomeCopy/ContactSection";
import HeroSection from "../components/HomeCopy/HeroSection";
import OurServices from "../components/HomeCopy/Services/OurServices";
import WhyChooseUs from "../components/HomeCopy/WhyChooseUs";

const HomeCopy = () => {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <OurServices />
      <AdsBanner />
      <ContactSection />
    </>
  );
};

export default HomeCopy;
