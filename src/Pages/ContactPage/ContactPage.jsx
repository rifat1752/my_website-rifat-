import { DotLottiePlayer } from "@dotlottie/react-player";
import Contact from "../Contact/Contact";
import dotLottieAnimation from '../../assets/lottie/bubble-1.lottie';
import ContactInfo from "../Contact/ContactInfo";
import { Helmet } from "react-helmet";

const ContactPage = () => {
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Contact | Rifat</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="relative  overflow-hidden w-full h-96 my-10    flex flex-col md:flex-row justify-center items-center bg-base-200 rounded-2xl border-2 border-slate-800">
        <DotLottiePlayer
      className="absolute w-full  md:w-10/12 lg:w-2/3  object-cover rotate-0  md:-rotate-90 mx-auto "
        src={dotLottieAnimation }
        autoplay
        loop
      >
        
      </DotLottiePlayer>
        <div data-aos="zoom-in"  
         data-aos-easing="linear"
      data-aos-duration="500"   className="w-full h-full backdrop-blur-sm flex  flex-col gap-2 justify-center items-center">
        <p    className="font-bold    text-yellow-400 text-center text-5xl">Get in Touch</p>
       <ContactInfo></ContactInfo>
        </div>
        </div>
            <Contact></Contact>
        </div>
    );
};

export default ContactPage;