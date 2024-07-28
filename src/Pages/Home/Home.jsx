import AboutSection from "../../Shared/AboutSection/AboutSection";
import Banner from "../../Shared/Banner/Banner";
import Education from "../../Shared/Education/Education";
import Skill from "../../Shared/Skill";



const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Skill></Skill>
     <AboutSection></AboutSection>
     <Education></Education>
    </div>
  );
};

export default Home;
