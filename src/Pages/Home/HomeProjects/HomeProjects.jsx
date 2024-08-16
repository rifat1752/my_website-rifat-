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


const HomeProjects =()=> {

  const [homeProjects, setHomeProjects] = useState([])
  
  useEffect(()=>{
    fetch('https://api.npoint.io/fddd07abcb25b3e67761')
    .then(res=> res.json())
    .then(data=>  setHomeProjects(data))
  },[])
  return (
    <div className='mt-10 py-10 bg-base-200 rounded-xl border-2 border-slate-800'>
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
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper mx-auto"
      >
       
        
 {
  homeProjects.map(project => 

    <SwiperSlide key={project.id}>
<div
data-aos="zoom-in"
      data-aos-duration="500"
 className="w-64 h-80  mx-auto relative shad rounded-lg bg-slate-900 text-slate-100">
  <figure className='w-full h-full   '><img className="w-full  rounded py-3 h-full mx-auto " src={project.img} alt="" /></figure>
  <div className='project_text p-5 flex flex-col justify-between'>
    <h1 className="text-3xl text-slate-50 font-bold text-center border-b-2 pb-2 border-sky-300 ">{project.name}</h1> 
   
    <p className='text-xs font-nova font-light text-slate-200 text-justify'>{project.description}</p>
  <div className="flex justify-around  w-full ">
      <a href={project.live_link} className="w-16  text-green-500 transition duration-200 hover:text-red-500 justify-center items-center  h-12  text-sm  font-nova font-semibold flex flex-col "><GoLinkExternal  className='text-lg'/> <span className=' ' >Live Link</span> </a>
      <a href={project.github_link} className="w-14 justify-center text-green-500 transition duration-200 hover:text-red-500 items-center  h-12  text-sm  font-nova font-semibold flex flex-col "><FiGithub className='text-lg'/> <span >Github</span> </a>
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
 to={'/project'}><button className="w-32 h-10  md:mr-6 mt-2 md:mt-0 font-semibold hover:text-black transition-all duration-500  text-yellow-300 border hover:bg-yellow-300 border-yellow-300  rounded-md ">See All</button></Link>
</div>   
    </div>
  );
}

export default HomeProjects;