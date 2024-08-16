import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animation1 from '../../assets/lottie/handfrontendYellow.json'
import animation2 from '../../assets/lottie/handwave.json'
import ContactInfo from "../../Pages/Contact/ContactInfo";
import Typewriter from 'typewriter-effect';
import { useState } from "react";


const Banner = () => {
  const [isComplete, setIsComplete] = useState(false);
 
    return (
        <div style={{ borderColor: 'rgb(30 41 59)', borderWidth: '2px' }} className="w-full min-h-screen  grid grid-cols-6 bg-base-200 rounded-b-2xl">
            <div
            //  data-aos={window.innerWidth >= 768 ? "fade-right" : "fade-down"}  
            // data-aos-easing="linear"
            // data-aos-duration="1000"
              className=" flex flex-col sm:ml-5 justify-around p-5 gap-5  col-span-6   md:col-span-3 ">
               <div
               className="pt-5 lg:w-3/4      flex flex-col gap-5    mx-auto  details ">
                <p  className="w-28 mx-auto "><Lottie animationData={animation2} > </Lottie></p>
                 <h1 className=" flex flex-col gap-10 text-center md:text-left"> 
                  <p className="  text-3xl sm:text-4xl text-yellow-300 lg:text-[40px] xl:text-5xl  font-bold "> 
                    <Typewriter
                                options={{
                                  strings: ['Hello, I’m RIFAT'],
                                  autoStart: true,
                                  loop: false,
                                  delay: 120,
                                }}
                                onInit={(typewriter) => {
                                  typewriter
                                    .callFunction(() => setIsComplete(false))
                                    .typeString('Hello, I’m RIFAT')
                                    .callFunction(() => setIsComplete(true))
                                    .start();}}
                            />
                            
                            </p>
                  <p className=" h-14  text-xl sm:text-xl  xl:text-2xl   font-bold">
                  <Typewriter
                                options={{
                                    strings: ['Crafting Responsive & <br /> Intuitive Web Experiences'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 120,
                                }}
                            />
                    </p>
                 </h1>
                 
                <p
                data-aos="zoom-in"  
                data-aos-easing="linear"
                data-aos-duration="1000"
                 className="md:hidden mx-auto w-3/4 sm:w-3/6 "><Lottie animationData={animation1} > </Lottie></p>
                 <p className="text-center sm:text-left  flex items-center  justify-center md:justify-start  text-base md:text-lg  xl:text-xl  "><GoDotFill className="text-green-500 lg:ml-[-10px]" /> Available for new projects</p>
                 
               </div>
               {/* <div
                className=" font-nova  w-10/12   lg:w-3/4   mx-auto">
               </div> */}
               <div 
              //   data-aos="zoom-in"
              //   data-aos-easing="linear"
              //  data-aos-duration="1000"
               className="social md:w-3/4  flex   gap-2 flex-col md:flex-row flex-wrap md:mx-auto items-center  justify-center lg:justify-start    ">
                <ContactInfo ></ContactInfo>
                <Link className=""><button className="w-32 h-10 lg:ml-[-10px]  xl:ml-0 md:mr-6 mt-2 ml-2 md:mt-0 font-semibold hover:text-black transition-all duration-500  text-yellow-300 border hover:bg-yellow-300 border-yellow-300  rounded-md ">Download CV</button></Link>
               </div>
            </div>
            <div
             data-aos="fade-left"
             data-aos-easing="linear"
             data-aos-duration="1000"
             className="image mx-auto hidden md:flex items-end col-span-3 w-full h-full ">
                <figure className="w-3/4  m-auto">
                  <Lottie animationData={animation1} > </Lottie>
                </figure>
            </div>
        </div>
    );
};

export default Banner;