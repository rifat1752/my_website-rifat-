import { GoLinkExternal } from "react-icons/go";
import { FiGithub } from "react-icons/fi";

const ProjectCard = ({project}) => {
    const {name,img, live_link, github_link,description} = project;
    console.log(live_link)
    return (
        <div 
        data-aos="flip-left"
         data-aos-delay="200"
        data-aos-duration="1000"
       
        >
            <div className="w-64 h-80  hover:scale-105 duration-500 relative mb-5 shad  rounded bg-slate-900 text-slate-100">
  <figure className='w-full h-full   '><img className="w-full  rounded h-full mx-auto " src={img} alt="" /></figure>
  <div className='project_text p-5 flex flex-col justify-between'>
    <h1 className="text-3xl text-slate-50 font-bold text-center border-b-2 pb-2 border-sky-300 ">{name}</h1> 
   
    <p className='text-xs font-nova font-light text-slate-200 text-justify'>{description}</p>
  <div className="flex justify-around  w-full ">
      <a href={live_link} className="w-16  text-green-500 transition duration-200 hover:text-red-500 justify-center items-center  h-12  text-sm  font-nova font-semibold flex flex-col "><GoLinkExternal  className='text-lg'/> <span className=' ' >Live Link</span> </a>
      <a href={github_link} className="w-14 justify-center text-green-500 transition duration-200 hover:text-red-500 items-center  h-12  text-sm  font-nova font-semibold flex flex-col "><FiGithub className='text-lg'/> <span >Github</span> </a>
  </div>
  </div>
  
</div>
        </div>
    );
};

export default ProjectCard;