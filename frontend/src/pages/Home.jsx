import AdsBanner from "../components/Home/AdsBanner";
import Awards from "../components/Home/Awards";
import BestCard from "../components/Home/BestCard";
import BestMedicalServices from "../components/Home/BestMedicalServices";
import ContactSection from "../components/Home/ContactSection";
import Countdown from "../components/Home/Countdown";
import FaqSection from "../components/Home/FaqSection";
import Gallery from "../components/Home/Gallery";
import GreatDoctors from "../components/Home/GreatDoctors";
import HeroSection from "../components/Home/HeroSection";
import InfiniteScrollBar from "../components/Home/InfiniteScrollBar";
import LatestNews from "../components/Home/LatestNews";
import ManagementTeamSlide from "../components/Home/ManagementTeam/ManagementTeamSlide";
import OurLocation from "../components/Home/OurLocation";
import OurServices from "../components/Home/Services/OurServices";
import Testimonial from "../components/Home/Testimonial";
import VirtualTreatment from "../components/Home/VirtualTreatment";
import WhyChooseUs from "../components/Home/WhyChooseUs";

const Home = () => {
  return (
    <>
      <InfiniteScrollBar />
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
      <Gallery />
      {/* ========== */}
      <BestMedicalServices />
      <GreatDoctors />
      <Testimonial />
    </>
  );
};

export default Home;
