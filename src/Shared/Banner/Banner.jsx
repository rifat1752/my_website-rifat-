import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animation1 from "../../assets/lottie/handfrontendYellow.json";
import animation2 from "../../assets/lottie/handwave.json";
import dotLottieAnimation from "../../assets/lottie/bubble-1.lottie";
import ContactInfo from "../../Pages/Contact/ContactInfo";
import Typewriter from "typewriter-effect";
import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Controls, DotLottiePlayer } from "@dotlottie/react-player";

const Banner = () => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div
      style={{ borderColor: "rgb(30 41 59)", borderWidth: "2px" }}
      className="relative overflow-hidden w-full pb-10 min-h-screen  grid grid-cols-6 bg-base-200 rounded-b-2xl"
    >
      <DotLottiePlayer
        className="absolute w-full object-cover  md:-rotate-90 h-full  "
        src={dotLottieAnimation}
        autoplay
        loop
      ></DotLottiePlayer>

      <div className=" z-10 flex flex-col sm:ml-5 justify-around px-5 gap-5  col-span-6   md:col-span-3 ">
        <div className="pt-5 lg:w-3/4      flex flex-col gap-5    mx-auto  details ">
          <p className="z-10 w-28 mx-auto ">
            <Lottie animationData={animation2} loop={true}>
              {" "}
            </Lottie>
          </p>
          <h1 className="z-10 flex flex-col gap-10 text-center md:text-left">
            <p className="z-10  text-3xl sm:text-4xl text-yellow-400 lg:text-[40px] xl:text-5xl  font-bold ">
              <Typewriter
                options={{
                  strings: ["Hello, I’m RIFAT"],
                  autoStart: true,
                  loop: false,
                  delay: 120,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .callFunction(() => setIsComplete(false))
                    .typeString("Hello, I’m RIFAT")
                    .callFunction(() => setIsComplete(true))
                    .start();
                }}
              />
            </p>
            <p className=" h-14  text-xl sm:text-xl  xl:text-2xl   font-bold">
              <Typewriter
                options={{
                  strings: [
                    "Crafting Responsive & <br /> Intuitive Web Experiences",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 120,
                }}
              />
            </p>
          </h1>

          <p className="text-center sm:text-left  flex items-center  justify-center md:justify-start  text-base md:text-lg  xl:text-xl  ">
            <GoDotFill className="text-green-500 lg:ml-[-10px]" /> Available for
            new projects
          </p>
        </div>

        <div className="hidden md:flex md:w-3/4    gap-2 flex-col md:flex-row flex-wrap md:mx-auto items-center  justify-center lg:justify-start    ">
          <ContactInfo Banner={true}></ContactInfo>
          <a
            href="https://drive.google.com/file/d/1zCI5QinWXy-DFTqm5ISlaH_6OIMpwdxS/view?usp=drive_link"
            rel="noreferrer"
            target="_blank"
          >
            <button className="w-32 h-10 lg:ml-[-10px]  xl:ml-0 md:mr-6 mt-2 ml-2 md:mt-0 font-semibold hover:text-black transition-all duration-500  text-yellow-400 border hover:bg-yellow-400 border-yellow-400  rounded-md ">
              Download CV
            </button>
          </a>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="image z-10 my-5 mx-auto flex items-end col-span-6   md:col-span-3 w-full h-full "
      >
        <figure className="w-3/4  m-auto">
          <Lottie
            className="block w-full sm:w-2/3 md:w-full mx-auto"
            animationData={animation1}
          >
            {" "}
          </Lottie>
        </figure>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="md:hidden flex w-full md:w-3/4   col-span-6  gap-2 flex-col md:flex-row flex-wrap md:mx-auto items-center  justify-center lg:justify-start    "
      >
        <ContactInfo Banner={true}></ContactInfo>
        <a
          href="https://drive.google.com/file/d/1zCI5QinWXy-DFTqm5ISlaH_6OIMpwdxS/view?usp=drive_link"
          rel="noreferrer"
          target="_blank"
        >
          <button className="w-32 h-10 lg:ml-[-10px]  xl:ml-0 md:mr-6 mt-2 ml-2 md:mt-0 font-semibold hover:text-black transition-all duration-500  text-yellow-400 border hover:bg-yellow-400 border-yellow-400  rounded-md ">
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
