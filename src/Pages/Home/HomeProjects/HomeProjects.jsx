/* eslint-disable react/prop-types */
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { GoLinkExternal } from "react-icons/go";
import { FiGithub } from "react-icons/fi";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DotLottiePlayer } from '@dotlottie/react-player';
import dotLottieAnimation from '../../../assets/lottie/bubble-1.lottie';


const HomeProjects =()=> {

  const [homeProjects, setHomeProjects] = useState([])
  
  useEffect(()=>{
    fetch('https://api.npoint.io/fddd07abcb25b3e67761')
    .then(res=> res.json())
    .then(data=>  setHomeProjects(data))
  },[])
  return (
    <div className='relative overflow-hidden'>
        <DotLottiePlayer
      className="absolute inset-0  w-full h-full object-cover md:w-10/12 lg:w-2/3 rotate-0 md:-rotate-90 mx-auto"
        src={dotLottieAnimation }
        autoplay
        loop
      ></DotLottiePlayer>
      <div className='mt-10 py-10 bg-base-300/40 backdrop-blur-[3px] rounded-xl border-2 border-slate-800'>
     <h1 data-aos="zoom-in"
      data-aos-duration="500" className="text-6xl font-bold text-yellow-400 text-center">Projects</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay:5000,
          disableOnInteraction:false
        }}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50 ,
          stretch: -100,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
       
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper mx-auto   "
      >
       
        
 {
  homeProjects.map(project => 

    
      <SwiperSlide key={project.id} className='  '>
    <div
      data-aos="flip-left"
      data-aos-delay="200"
      data-aos-duration="1000"
      className="w-64 h-[360px]   mx-auto"
    >
      <div className="w-64 h-[360px] py-4 hover:border-yellow-400  transition-all  duration-1000 shadow-lg  hover:border-none border-yellow-300/80 hover:shadow-lg  shadow-slate-700  hover:shadow-yellow-500      shad  hover:scale-105  relative mb-5 shad    text-slate-100">
        <figure className="w-full h-full rounded-md  ">
          <img
            className="w-full    h-full mx-auto  "
            src={project.img}
            alt=""
          />
        </figure>
        <div className="project_text p-2 flex flex-col justify-between">
          <h1 className="text-3xl text-[yellow] font-bold text-center border-b-2 pb-2 border-sky-300 ">
            {project.name}
          </h1>

          <p className="text-xs font-nova font-light text-slate-200 text-justify">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1 my-2">
            {project.tools.map((tool, index) => (
              <span
                key={index}
                className="bg-[yellow] px-1 py-1 text-xs font-semibold text-slate-700  rounded"
              >
                {tool}
              </span>
            ))}
          </div>
          <div className="flex justify-around  w-full ">
            <a
              href={project.live_link}
              className="w-16   transition duration-200 hover:text-green-500 text-red-500 justify-center items-center  h-12  text-sm  font-nova font-semibold flex flex-col "
            >
              <GoLinkExternal className="text-lg " />{" "}
              <span className=" ">Live Link</span>{" "}
            </a>
            <a
              href={project.frontend_github_link}
              className="w-14 justify-center text-[#34ebb4] transition duration-200 hover:text-green-500 items-center  h-12  text-sm  font-nova font-semibold flex flex-col "
            >
              <FiGithub className="text-lg" /> <span>Frontend</span>{" "}
            </a>
            {project.backend_github_link ? (
              <a
                href={project.backend_github_link}
                className="w-14 justify-center text-[orange] transition duration-200 hover:text-green-500 items-center  h-12  text-sm  font-nova font-semibold flex flex-col "
              >
                <FiGithub className="text-lg" /> <span>Backend</span>{" "}
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
</SwiperSlide>

  )
  }
   </Swiper>
<div className='  flex justify-center ml-2'>
<Link
data-aos="fade-down"
      data-aos-duration="500"
 to={'/project'}><button className="w-32 h-10  md:mr-6 mt-2 md:mt-0 font-semibold hover:text-black transition-all duration-500  text-yellow-400 border hover:bg-yellow-400 border-yellow-400  rounded-md ">See All</button></Link>
</div>   
    </div>
    </div>
  );
}

export default HomeProjects;