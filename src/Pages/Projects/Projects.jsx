import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";




const Projects = () => {
    const [projects, setProjects]= useState([]);

    useEffect(()=>{
        fetch('https://api.npoint.io/fddd07abcb25b3e67761')
        .then(res=> res.json())
        .then(data=>  setProjects(data))
    },[])

    return (
        <div className="bg-base-200 border-2 my-10 rounded-xl border-slate-800 w-full  py-10  ">
            <h1 data-aos="zoom-in"
            data-aos-duration="1000" className="text-6xl font-bold text-yellow-400 text-center">Projects</h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3   place place-items-center  gap-5 mt-16 ">
                {
                    projects.map(project=><ProjectCard key={project.id} project={project}></ProjectCard>)
                }
            </div>
    </div>
    );
};

export default Projects;