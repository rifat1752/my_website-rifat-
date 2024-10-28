import Lottie from "lottie-react";
import contact from "../../assets/lottie/animationcontact.json"
import Form from "./Form";
import { DotLottiePlayer } from "@dotlottie/react-player";
import dotLottieAnimation from '../../assets/lottie/bubble-1.lottie';


const Contact = () => {
    return (
        <div className="relative">
             <DotLottiePlayer
      className="absolute inset-0  w-full h-full object-cover md:w-10/12 lg:w-2/3 rotate-0 md:-rotate-90 mx-auto"
        src={dotLottieAnimation }
        autoplay
        loop
      >
        
      </DotLottiePlayer>
            <div className="backdrop-blur-sm bg-base-300/40 border-2 border-slate-800 my-10 py-10  md:min-h-screen rounded-xl flex flex-col justify-evenly ">
            <h1 
            data-aos="zoom-in"
             data-aos-easing="linear"
            data-aos-duration="1000"  
            className="text-5xl md:text-6xl font-mono font-bold text-yellow-400 py-5   text-center"></h1>
            <div  className="flex flex-col md:flex-row items-center    my-5 pb-5 md:my-10">
            <div className="w-3/4 md:w-1/2  flex flex-col items-center  justify-between">
               <div
               data-aos={window.innerWidth >= 768 ? "fade-down" : "zoom-in"}   
               data-aos-easing="linear"
               data-aos-delay="300"
               data-aos-duration="1000"    className="flex  justify-center ">
               <Lottie animationData={contact} className="w-5/6  sm::w-4/6 "></Lottie>
               </div>
            </div>
           <Form></Form>
            </div>
        </div>
        </div>
    );
};

export default Contact;