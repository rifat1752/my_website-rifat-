import { Link } from 'react-router-dom';
import { FaCss3Alt, FaFigma, FaGithub, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb"; 
import { DiMongodb } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { DotLottiePlayer } from '@dotlottie/react-player';
import dotLottieAnimation from '../assets/lottie/bubble-1.lottie';

// Map Tailwind text classes to actual color values
const colorMap = {
  'text-blue-500': '#3b82f6',
  'text-yellow-500': '#f59e0b',
  'text-blue-600': '#2563eb',
  'text-orange-600': '#ea580c',
  'text-white': '#FFFFFF',
  'black': '#000000',
  'text-black': '#000000',
  'text-green-400': '#4ade80',
  'text-green-600': '#16a34a',
};

const Skill = () => {
  const skills = [
    { id: '4', name: 'React', logo: <FaReact />, bg: 'text-blue-500' },
    { id: '5', name: 'JavaScript', logo: <IoLogoJavascript />, bg: 'text-yellow-500' },
    { id: '6', name: 'Tailwindcss', logo: <SiTailwindcss />, bg: 'text-blue-500' },
    { id: '7', name: 'CSS', logo: <FaCss3Alt />, bg: 'text-blue-600' },
    { id: '8', name: 'HTML', logo: <FaHtml5 />, bg: 'text-orange-600' },
    { id: '9', name: 'Github', logo: <FaGithub />, bg: 'text-white' },
    { id: '10', name: 'Figma', logo: <FaFigma />, bg: 'black' },
    { id: '1', name: 'NextJs', logo: <TbBrandNextjs />, bg: 'text-black' },
    { id: '2', name: 'NodeJS', logo: <FaNode />, bg: 'text-green-400' },
    { id: '3', name: 'MongoDB', logo: <DiMongodb />, bg: 'text-green-600' },
  ];

  return (
    <div className='relative'>
      <DotLottiePlayer
      className="absolute inset-0  w-full h-full object-cover md:w-10/12 lg:w-2/3 rotate-0 md:-rotate-90 mx-auto"
        src={dotLottieAnimation }
        autoplay
        loop
      >
        
      </DotLottiePlayer>
      <div className=' my-10 py-10 px-5 backdrop-blur-[3px] bg-base-300/40 rounded-2xl border-2 border-slate-800 '>
      
      <div data-aos="zoom-in"
      data-aos-duration="500"
       className="info sm:w-2/3 2xl:w-full sm:mx-auto">
        <h1 className='text-yellow-400  font-bold text-5xl 2xl:text-7xl text-center py-10'>What I Do</h1>
        <p className='text-sm md:text-base lg:text-lg 2xl:text-2xl font-semibold 2xl:my-10  text-justify sm:text-center font-nova'>
          Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my Works? 
          Check out my <Link className='text-blue-400 border-b-2 border-blue-400 hover:text-[#f75757] hover:border-[#f75757] transition-colors duration-300 ' to={'/project'}>projects.</Link>
        </p>
      </div>
      <div className='grid grid-cols-3  sm:grid-cols-3 md:grid-cols-5 place-items-center gap-10 mt-20'>
      {skills.map(skill => (
  <div
    data-aos="flip-left"
    data-aos-duration="1000"
    key={skill.id}
    className='hover:border-yellow-400 my-16 bg-base-300 transition duration-1000 group w-24  sm:w-28 md:w-32 lg:w-36 2xl:w-52 h-28 sm:h-32 md:h-36 lg:h-40 2xl:h-60 rounded-lg flex flex-col justify-evenly items-center shadow hover:shadow-lg shadow-yellow-300  hover:shadow-yellow-500'
    style={{
      '--hover-color': colorMap[skill.bg] || 'black',  
    }}
  >
    <figure
      className='text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl'
      style={{
        color: colorMap[skill.bg] || 'black',  
        transition: 'color 0.3s'
      }}
    >
      {skill.logo}
    </figure>
    <p className='text-base md:text-lg lg:text-xl 2xl:text-3xl text-slate-300 font-semibold font-nova w-full text-center'
      style={{
        color: colorMap[skill.bg] || 'black',  // Set color dynamically without hover
        transition: 'color 0.3s'
      }}
    >
      {skill.name}
    </p>
    <style>{`
      .group:hover {
        transform: scale(1.1);  // Keep the hover scale effect
      }
    `}</style>
  </div>
))}

      </div>
      
    </div>
    </div>
  );
};

export default Skill;
