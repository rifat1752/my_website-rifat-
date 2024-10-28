import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer/Footer";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import dotLottieAnimation from '../../assets/lottie/bubble-1.lottie';

const Root = () => {
    useEffect(()=>{
        Aos.init( );
      },[])
    return (
        <div className="relative max-w-screen-xl mx-5 xl:mx-auto">
                 <DotLottiePlayer
      className="hidden lg:flex  absolute  object-cover  h-full -z-10   "
        src={dotLottieAnimation }
        autoplay
        loop
      >
      </DotLottiePlayer>
            <Navbar></Navbar>
            <Outlet></Outlet>   
            <Footer></Footer>
        </div>
    );
};

export default Root;