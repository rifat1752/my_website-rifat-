 import { FaGithub,FaLinkedinIn,FaFacebook  } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

const ContactInfo = () => {
    return (
        <div className="flex flex-col justify-center">
                    <div className="h-8   md:h-12 flex items-center  gap-1  ">
                <a className="hover:bg-white  transition duration-300 w-8 md:w-12  text-blue-500 h-full text-xl  md:text-2xl flex justify-center items-center rounded-full lg:ml-[-20px]"><FaLinkedinIn /></a>
                <a className="hover:bg-slate-600  transition duration-300 w-8 md:w-12 text-white h-full text-2xl  md:text-3xl flex justify-center items-center rounded-full"><FaGithub /></a>
                <a className="hover:bg-red-500 w-8 md:w-12  transition duration-300 text-white h-full text-2xl md:text-3xl flex justify-center items-center rounded-full"><IoIosMail /> </a>
                <a className="hover:bg-white  transition duration-300 w-8 md:w-12 text-blue-500 h-full text-2xl md:text-3xl flex justify-center items-center rounded-full"><FaFacebook /></a>
                <a className="hover:bg-white transition duration-300 w-8 md:w-12 h-full text-green-500 text-2xl md:text-3xl flex justify-center items-center rounded-full"><IoLogoWhatsapp /></a>
                </div>
                </div>
    );
};

export default ContactInfo;