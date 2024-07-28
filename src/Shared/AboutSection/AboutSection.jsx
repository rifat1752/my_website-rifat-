import about from "../../assets/about.jpg"

const AboutSection = () => {
    return (
        <div className="w-full h-screen py-5 flex justify-evenly">
        <div className="w-2/6  flex justify-center items-center   ">
            <div className="w-72 border-4 rounded shadow-2xl shadow-yellow-300 bg-blue-50">
                <img src={about} alt="" />
            </div>
        </div>
        <div className= "w-3/6 px-5   h-96 font-nova  flex flex-col gap-5 my-auto">
        <h1 className=" font-bold mt-3 text-yellow-300  text-6xl ">About Me</h1>
        <p className="font-bold  text-3xl text-orange-600  my-2">Front-End Developer</p>
            <p className="font-nova text-justify text mt-10 font-semibold">
            I'm a Front-End  developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.
            </p>
            <button className="bg-yellow-300 w-32 h-10 p-2 mr-6 hover:bg-blue-400 font-bold rounded text-black">Let's talk</button>
        </div>
       <p></p>
       
    </div>
    );
};

export default AboutSection;