import { DotLottiePlayer } from "@dotlottie/react-player";
import AboutSection from "../../Shared/AboutSection/AboutSection";
import Education from "../../Shared/Education/Education";
import dotLottieAnimation from '../../assets/lottie/bubble-1.lottie';
import Skill from "../../Shared/Skill";
import ContactInfo from "../Contact/ContactInfo";
import { Helmet } from "react-helmet";

 
const About = () => {
    return (
       <div className="relative">
        <Helmet>
                <meta charSet="utf-8" />
                <title>About | Rifat</title>
                <link rel="canonical" href="" />
            </Helmet>
        
      <DotLottiePlayer
      className=" absolute w-full  object-cover rotate-0  h-full -z-10   "
        src={dotLottieAnimation }
        autoplay
        loop
      >
      </DotLottiePlayer>
        <div className="relative  overflow-hidden w-full sm:h-96 my-10    flex flex-col md:flex-row justify-center items-center bg-base-200 rounded-2xl border-2 border-slate-800">
        <DotLottiePlayer
      className="absolute w-full  md:w-10/12 lg:w-2/3  object-cover rotate-0  md:-rotate-90 mx-auto "
        src={dotLottieAnimation }
        autoplay
        loop
      >
        
      </DotLottiePlayer>
      

        <div  data-aos="zoom-in"  
         data-aos-easing="linear"
      data-aos-duration="500"  className="w-full h-96 backdrop-blur flex flex-col gap-10 justify-center items-center">
        <p  className="font-bold     text-yellow-400 text-center text-5xl">About Me</p>
       <ContactInfo></ContactInfo>
       
      
        </div>
        </div>
        <AboutSection></AboutSection>
        <Skill></Skill>
        <Education></Education>
       </div>
    );
};

export default About;