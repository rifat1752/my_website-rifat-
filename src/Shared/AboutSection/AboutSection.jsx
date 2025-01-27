import { Link } from "react-router-dom";
import about from "../../assets/about.jpg"
import { DotLottiePlayer } from "@dotlottie/react-player";
import dotLottieAnimation from '../../assets/lottie/bubble-1.lottie';

const AboutSection = () => {
    return (
        <div className="relative">
          <DotLottiePlayer
      className="absolute inset-0  w-full h-full object-cover md:w-10/12 lg:w-2/3 rotate-0 md:-rotate-90 mx-auto"
        src={dotLottieAnimation }
        autoplay
        loop
      >
        
      </DotLottiePlayer>
          <div className="w-full md:h-screen my-10 py-10   flex flex-col md:flex-row justify-evenly backdrop-blur-[3px] bg-base-300/40 rounded-2xl border-2 border-slate-800">
        <h1 data-aos="zoom-in"  
         data-aos-easing="linear"
      data-aos-duration="500" className=" font-bold mt-3 md:hidden  text-yellow-400 text-center text-5xl ">I'm a</h1>
        <p  data-aos="zoom-in"
        data-aos-delay="300"
      data-aos-duration="500" 
      data-aos-easing="linear"
      className="font-bold font-nova md:hidden text-center text-2xl md:text-3xl text-orange-600  my-2">Front-End Developer</p>
        <div className="w-5/6  md:w-2/6   flex  justify-center items-center mx-auto  my-5 md:my-0 ">
            <div 
           data-aos={window.innerWidth >= 768 ? "zoom-in" : "zoom-in"}   
           data-aos-easing="linear"
      data-aos-duration={window.innerWidth >= 768 ? "1000" : "500"} 
       className="w-72 2xl:w-[500px] rounded    ">
                <img className="rounded-lg border-4  hover:shadow-xl hover:shadow-yellow-500 transition-all duration-300 hover:rotate-1 hover:" src={about} alt="" />
            </div>
        </div>
        <div  data-aos="fade-right"
         data-aos-easing="linear"
      data-aos-duration="1000" className= "w-full  mx-auto  md:w-1/2 2xl:w-5/12 px-5 py-5  h-full   flex flex-col justify-center gap-3 ">
        <h1 className=" font-bold mt-3 hidden md:block  text-yellow-400 text-center text-5xl 2xl:text-8xl ">I'm a</h1>
        <p className="font-bold hidden md:block  font-nova text-center text-2xl md:text-3xl 2xl:text-5xl text-orange-600  my-2">Front-End Developer</p>
            <p className="font-nova text-justify 2xl:text-3xl mt-5 md:mt-10 font-semibold">
            I’m a passionate Front-End Developer specializing in React.js and Node.js, dedicated to crafting seamless digital experiences. Whether it's building intuitive interfaces or ensuring accessibility and performance, I strive to create fast, visually stunning, and responsive applications that make a lasting impression. Occasionally diving into design, I enjoy shaping projects from concept to completion, all while maintaining a deep love for coding—just as strong as when I first started.
            </p>
           <Link to='/contact' className="flex justify-center  ">  <button className=" w-32 h-10 2xl:h-20 2xl:w-48 2xl:text-3xl lg:ml-[-10px] bg-base-200 xl:ml-0 md:mr-6 mt-2 ml-2 md:mt-0 font-semibold hover:text-black transition-all duration-500  text-yellow-400 border hover:bg-yellow-400 border-yellow-400  rounded-md ">Let's talk</button></Link>
        </div>
       <p></p>
       
    </div>
        </div>
    );
};

export default AboutSection;