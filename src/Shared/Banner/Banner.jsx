import { CiLocationOn } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { FaGithub,FaLinkedinIn,FaFacebook  } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animation1 from '../../assets/lottie/animation1.json'

const Banner = () => {
    return (
        <div className="w-full h-screen  grid grid-cols-6 ">
            <div className="  flex flex-col mt-5 p-10 gap-10  col-span-3 ">
               <div className="pt-10 my-5 mx-5 details ">
                 <h1 className="text-5xl  font-bold">Hi, 👋 <br /> It’s me, <span className="text-6xl">  RIFAT</span>  </h1>
                 {/* <p className="my-5 lg:w-4/5 font-rajdhani font-extrabold text-justify">I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p> */}
               </div>
               <div className=" font-nova mx-5">
                 <p className="flex items-center text-xl font-semibold my-2"><CiLocationOn /> Dhaka, Bangladesh</p>
                 <p className="flex items-center text-xl font-semibold my-2"><GoDotFill className="text-green-500" /> Available for new projects</p>
               </div>
               <div className="social  mt-10  flex justify-between ">
                <div className="h-10  flex items-center  ">
                <Link className="bg-white w-10 text-blue-500 h-full ml-5 text-3xl flex justify-center items-center rounded-lg"><FaLinkedinIn /></Link>
                <Link className="bg-white w-10 text-slate-900 h-full ml-5 text-3xl flex justify-center items-center rounded-lg"><FaGithub /></Link>
                <Link className="bg-red-500 w-10 text-white h-full ml-5 text-3xl flex justify-center items-center rounded-lg"><IoIosMail /> </Link>
                <Link className="bg-white w-10 text-blue-500 h-full ml-5 text-3xl flex justify-center items-center rounded-lg"><FaFacebook /></Link>
                <Link className="bg-white w-10 h-full text-green-500 ml-5 text-3xl flex justify-center items-center rounded-lg"><IoLogoWhatsapp /></Link>
                </div>
                <Link className="  "><button className="bg-yellow-300 h-10 p-2 hover:bg-blue-400 font-bold rounded text-black ">Download CV</button></Link>
               </div>
              
            </div>
            <div className="image mx-auto flex items-end col-span-3 w-full h-full ">
                <figure className="w-3/4  m-auto">
                  <Lottie animationData={animation1} loop={true}> </Lottie>
                </figure>
            </div>
        </div>
    );
};

export default Banner;