
import AboutSection from "../../Shared/AboutSection/AboutSection";
import Banner from "../../Shared/Banner/Banner";
import Education from "../../Shared/Education/Education";
import Skill from "../../Shared/Skill";
import HomeProjects from "./HomeProjects/HomeProjects";
import Contact from "../Contact/Contact";
import { DotLottiePlayer } from "@dotlottie/react-player";
import dotLottieAnimation from '../../assets/lottie/bubble-1.lottie';
import { Helmet } from "react-helmet";








const Home = () => {


  return (
    <div className="relative">
       <Helmet>
                <meta charSet="utf-8" />
                <title>Rifat | Frontend Developer</title>
                <link rel="canonical" href="http://mysite.com/example" />
       </Helmet>
    
      <Banner></Banner>
      <Skill></Skill>
      <HomeProjects ></HomeProjects>
     <AboutSection></AboutSection>
     <Education></Education>
     <Contact></Contact>
    </div>
  );
};

export default Home;
