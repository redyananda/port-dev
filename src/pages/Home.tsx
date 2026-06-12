import Experience from "@/components/Experience";
import AboutMe from "../components/AboutMe";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Experience />
      <Testimonials />
    </div>
  );
};

export default Home;
