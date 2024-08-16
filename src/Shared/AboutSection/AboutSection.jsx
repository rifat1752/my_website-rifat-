import about from "../../assets/about.jpg"

const AboutSection = () => {
    return (
        <div className="w-full md:h-screen my-10 py-10   flex flex-col md:flex-row justify-evenly bg-base-200 rounded-2xl border-2 border-slate-800">
        <h1 data-aos="zoom-in"  
         data-aos-easing="linear"
      data-aos-duration="500" className=" font-bold mt-3 md:hidden  text-yellow-300 text-center text-5xl ">About Me</h1>
        <p  data-aos="zoom-in"
        data-aos-delay="300"
      data-aos-duration="500" 
      data-aos-easing="linear"
      className="font-bold font-nova md:hidden text-center text-2xl md:text-3xl text-orange-600  my-2">Front-End Developer</p>
        <div className="w-5/6  md:w-2/6   flex  justify-center items-center mx-auto  my-5 md:my-0 ">
            <div 
           data-aos={window.innerWidth >= 768 ? "fade-left" : "zoom-in"}   
           data-aos-easing="linear"
      data-aos-duration={window.innerWidth >= 768 ? "1000" : "500"} 
       className="w-72 border-4 rounded hover:scale-105 hover:shadow-2xl hover:shadow-yellow-300 transition duration-300 bg-blue-50">
                <img className="rounded" src={about} alt="" />
            </div>
        </div>
        <div  data-aos="fade-right"
         data-aos-easing="linear"
      data-aos-duration="1000" className= "w-full  mx-auto  md:w-3/6 px-5 py-5  h-full   flex flex-col justify-center gap-3 ">
        <h1 className=" font-bold mt-3 hidden md:block  text-yellow-300 text-center text-5xl ">About Me</h1>
        <p className="font-bold hidden md:block  font-nova text-center text-2xl md:text-3xl text-orange-600  my-2">Front-End Developer</p>
            <p className="font-nova text-justify text mt-5 md:mt-10 font-semibold">
            I'm a Front-End  developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.
            </p>
            <button className="bg-yellow-300 w-2/3  h-10 p-2 mx-auto  hover:bg-blue-400 font-bold rounded text-black">Let's talk</button>
        </div>
       <p></p>
       
    </div>
    );
};

export default AboutSection;