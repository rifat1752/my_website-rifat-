import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { DotLottiePlayer } from "@dotlottie/react-player";
import dotLottieAnimation from '../../assets/lottie/bubble-1.lottie';
import ContactInfo from "../Contact/ContactInfo";
import { Helmet } from "react-helmet";



const Projects = () => {
    const [projects, setProjects]= useState([]);

    useEffect(()=>{
        fetch('https://api.npoint.io/fddd07abcb25b3e67761')
        .then(res=> res.json())
        .then(data=>  setProjects(data))
    },[])

    return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Projects | Rifat</title>
            </Helmet>
         <div className="relative  overflow-hidden w-full h-96 xl:h-svh my-10    flex flex-col md:flex-row justify-center items-center bg-base-200 rounded-2xl border-2 border-slate-800">
        <DotLottiePlayer
      className="absolute w-full  md:w-10/12 lg:w-2/3  object-cover rotate-0  md:-rotate-90 mx-auto "
        src={dotLottieAnimation }
        autoplay
        loop
      >
        
      </DotLottiePlayer>
        <div data-aos="zoom-in"  
         data-aos-easing="linear"
      data-aos-duration="500"  className="w-full h-full backdrop-blur-sm flex gap-10 flex-col justify-center items-center">
        <p   className="font-bold    text-yellow-400 text-center text-5xl 2xl:text-8xl">Projects I've made</p>
      <ContactInfo></ContactInfo>
        </div>
        </div>
        <div className="bg-base-200/40 backdrop-blur-sm border-2 my-10 rounded-xl border-slate-800 w-full  py-10  ">
            <h1 data-aos="zoom-in"
            data-aos-duration="1000" className="text-6xl font-bold text-yellow-400 text-center"></h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3   place place-items-center  gap-5 2xl:gap-10 mt-16 ">
                {
                    projects.map(project=><ProjectCard key={project.id} project={project}></ProjectCard>)
                }
            </div>
    </div>
</div>
            
    );
};

export default Projects;