import About from "@/components/About/About";
import Accordian from "@/components/Accordian/Accordian";
import Contact from "@/components/Contact/Contact";
import FAQ from "@/components/FAQ/FAQ";
import Features from "@/components/Features/Features";
import HeroSection from "@/components/HeroSetion/HeroSetion";

const Home = () => {
  return(
    <>
      <HeroSection/>
      <Features/>
      <About/>
      <Contact/>
      {/* <FAQ/> */}
      <Accordian/>
    </>
  )
};

export default Home;