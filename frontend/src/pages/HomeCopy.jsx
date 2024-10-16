import AdsBanner from "../components/HomeCopy/AdsBanner";
import Awards from "../components/HomeCopy/Awards";
import BestCard from "../components/HomeCopy/BestCard";
import ContactSection from "../components/HomeCopy/ContactSection";
import Countdown from "../components/HomeCopy/Countdown";
import FaqSection from "../components/HomeCopy/FaqSection";
import HeroSection from "../components/HomeCopy/HeroSection";
import LatestNews from "../components/HomeCopy/LatestNews";
import ManagementTeamSlide from "../components/HomeCopy/ManagementTeam/ManagementTeamSlide";
import OurLocation from "../components/HomeCopy/OurLocation";
import OurServices from "../components/HomeCopy/Services/OurServices";
import VirtualTreatment from "../components/HomeCopy/VirtualTreatment";
import WhyChooseUs from "../components/HomeCopy/WhyChooseUs";

const HomeCopy = () => {
  return (
    <>
      <HeroSection />
      <BestCard />
      <OurServices />
      <Awards />
      <AdsBanner />
      <VirtualTreatment />
      <Countdown />
      <ManagementTeamSlide />
      <WhyChooseUs />
      <FaqSection />
      <LatestNews />
      <OurLocation />
      <ContactSection />
    </>
  );
};

export default HomeCopy;
