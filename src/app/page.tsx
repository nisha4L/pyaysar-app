import About from "@/components/About/About";
import Accordian from "@/components/Accordian/Accordian";
import Contact from "@/components/Contact/Contact";
import Features from "@/components/Features/Features";
import HeroSection from "@/components/HeroSetion/HeroSetion";

const Home = () => {
  return(
    <>
      <HeroSection/>
      <Features/>
      <About/>
      <Contact/>
      <Accordian/>
    </>
  )
};

export default Home;