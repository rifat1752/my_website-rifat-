
import AboutSection from "../../Shared/AboutSection/AboutSection";
import Banner from "../../Shared/Banner/Banner";
import Education from "../../Shared/Education/Education";
import Skill from "../../Shared/Skill";
import HomeProjects from "./HomeProjects/HomeProjects";
import Contact from "../Contact/Contact";







const Home = () => {


  return (
    <div>
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
