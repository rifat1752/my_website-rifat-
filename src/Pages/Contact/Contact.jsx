import Lottie from "lottie-react";
import contact from "../../assets/lottie/animationcontact.json"
import Form from "./Form";


const Contact = () => {
    return (
        <div className="bg-base-200 border-2 border-slate-800 my-10 py-10  md:min-h-screen rounded-xl flex flex-col justify-evenly ">
            <h1 
            data-aos="zoom-in"
             data-aos-easing="linear"
            data-aos-duration="1000"  
            className="text-5xl md:text-6xl font-mono font-bold text-yellow-300 py-5   text-center">Get in Touch</h1>
            <div  className="flex flex-col md:flex-row items-center    my-5 pb-5 md:my-10">
            <div className="w-3/4 md:w-1/2  flex flex-col items-center  justify-between">
               <div
               data-aos={window.innerWidth >= 768 ? "fade-left" : "zoom-in"}   
               data-aos-easing="linear"
               data-aos-delay="300"
               data-aos-duration="1000"    className="flex  justify-center ">
               <Lottie animationData={contact} className="w-5/6  sm::w-4/6 "></Lottie>
               </div>
            </div>
           <Form></Form>
            </div>
           
        </div>
    );
};

export default Contact;