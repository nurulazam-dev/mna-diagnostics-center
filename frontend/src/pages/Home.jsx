import AdsBanner from "../components/Home/AdsBanner";
import AppointmentReminders from "../components/Home/AppointmentReminders";
import Awards from "../components/Home/Awards";
import BestCard from "../components/Home/BestCard";
import BestMedicalServices from "../components/Home/BestMedicalServices";
import HealthCalculators from "../components/Home/Calculators/HealthCalculators";
import CallToActionBanner from "../components/Home/CallToActionBanner";
import ContactSection from "../components/Home/ContactSection";
import Countdown from "../components/Home/Countdown";
import DownloadApp from "../components/Home/DownloadApp";
import EducationalVideos from "../components/Home/EducationalVideos";
import FaqSection from "../components/Home/FaqSection";
import Gallery from "../components/Home/Gallery";
import GreatDoctors from "../components/Home/GreatDoctors";
import HealthPackages from "../components/Home/HealthPackages";
import HeroSection from "../components/Home/HeroSection";
import InfiniteScrollBar from "../components/Home/InfiniteScrollBar";
import ManagementTeamSlide from "../components/Home/ManagementTeam/ManagementTeamSlide";
import OurLocation from "../components/Home/OurLocation";
import OurServices from "../components/Home/Services/OurServices";
import Testimonial from "../components/Home/Testimonial";
import VirtualTreatment from "../components/Home/VirtualTreatment";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Articles from "../components/Home/Articles";
import InsurancePartners from "../components/Home/InsurancePartners";

const Home = () => {
  return (
    <>
      <InfiniteScrollBar />
      <HeroSection />
      <BestCard />
      <Awards />
      <OurServices />
      <AdsBanner />
      <GreatDoctors />
      <Countdown />
      <HealthPackages />
      <ManagementTeamSlide />
      <WhyChooseUs />
      <BestMedicalServices />
      <FaqSection />
      <AppointmentReminders />
      <HealthCalculators />
      <EducationalVideos />
      <VirtualTreatment />
      <DownloadApp />
      <Articles />
      <Gallery />
      <CallToActionBanner />
      <Testimonial />
      <InsurancePartners />
      <OurLocation />
      <ContactSection />
    </>
  );
};

export default Home;
