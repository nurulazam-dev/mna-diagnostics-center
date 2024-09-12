import About from "../components/Home/About";
import Faq from "../components/Home/Faq";
import Feature from "../components/Home/Feature";
import GreatDoctors from "../components/Home/GreatDoctors";
import Hero from "../components/Home/Hero";
import MedicalServices from "../components/Home/MedicalServices";
import ProvidingBestMedical from "../components/Home/ProvidingBestMedical";
import Testimonial from "../components/Home/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <ProvidingBestMedical />
      <About />
      <MedicalServices />
      <Feature />
      <GreatDoctors />
      <Faq />
      <Testimonial />
    </>
  );
};

export default Home;
