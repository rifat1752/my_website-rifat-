import { Link } from 'react-router-dom';
import { FaCss3Alt, FaFigma, FaGithub, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb"; 
import { DiMongodb } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

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
    <div className='my-10 py-10 px-5 bg-base-200 rounded-2xl border-2 border-slate-800 '>
      <div data-aos="zoom-in"
      data-aos-duration="500"
       className="info sm:w-2/3 sm:mx-auto">
        <h1 className='text-yellow-300  font-bold text-5xl text-center py-5'>What I Do</h1>
        <p className=' text-lg font-semibold  text-justify sm:text-center font-nova'>
          Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? 
          Check out my <Link className='text-blue-400 border-b-2 border-blue-400' to={'/project'}>projects.</Link>
        </p>
      </div>
      <div className='grid grid-cols-1  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-10 mt-10'>
        {skills.map(skill => (
          <div
            data-aos="flip-left"
            data-aos-duration="1000"
            key={skill.id}
            className=' hover:border-yellow-400 transition duration-1000 group w-36  h-40 border-2 border-slate-200 rounded-lg flex flex-col justify-evenly items-center shadow-md hover:shadow-lg  shadow-yellow-200 hover:shadow-yellow-500'
            style={{
              '--hover-color': colorMap[skill.bg] || 'black' // Default to black if color not found
            }}
          >
            <figure
              className='text-8xl '
              style={{ transition: 'color 0.3s' }}
            >
              {skill.logo}
            </figure>
            <p className='text-xl text-slate-300 font-semibold font-nova w-full text-center bg-red ' style={{ transition: 'color 0.3s' }}>{skill.name}</p>
            <style>{`
            .group:hover {
      transform: scale(1.1); 
    }
              .group:hover figure, .group:hover p {
                color: var(--hover-color);
                scale:
              }
            `}</style>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Skill;
