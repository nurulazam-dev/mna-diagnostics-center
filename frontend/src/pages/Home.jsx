import AdsBanner from "../components/Home/AdsBanner";
import Awards from "../components/Home/Awards";
import BestCard from "../components/Home/BestCard";
import ContactSection from "../components/Home/ContactSection";
import Countdown from "../components/Home/Countdown";
import FaqSection from "../components/Home/FaqSection";
import Gallery from "../components/Home/Gallery";
import GreatDoctors from "../components/Home/GreatDoctors";
import HeroSection from "../components/Home/HeroSection";
import LatestNews from "../components/Home/LatestNews";
import ManagementTeamSlide from "../components/Home/ManagementTeam/ManagementTeamSlide";
import OurLocation from "../components/Home/OurLocation";
import ProvidingBestMedical from "../components/Home/ProvidingBestMedical";
import ReviewSlider from "../components/Home/ReviewSlider";
import OurServices from "../components/Home/Services/OurServices";
import Testimonial from "../components/Home/Testimonial/Testimonial";
import VirtualTreatment from "../components/Home/VirtualTreatment";
import WhyChooseUs from "../components/Home/WhyChooseUs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <BestCard />
      <ReviewSlider />
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
      <ProvidingBestMedical />
      <GreatDoctors />
      <Testimonial />
    </>
  );
};

export default Home;
