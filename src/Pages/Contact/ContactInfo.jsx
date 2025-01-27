import { FaGithub, FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

const ContactInfo = ({ Banner }) => {
  return (
    <div className="flex flex-col items-center ">
      <div className="h-8   md:h-12 flex justify-center items-center  gap-2  ">
        <a
          href="https://www.linkedin.com/in/dev-rifat/"
          rel="noopener noreferrer"
          target="_blank"
          className={`hover:bg-white  transition duration-300 w-8 md:w-10   text-blue-500 h-full text-xl  md:text-2xl 2xl:w-20 2xl:text-5xl flex justify-center items-center rounded-full ${
            Banner ? "lg:ml-[-20px]" : ""
          }`}
        >
          <FaLinkedinIn  className=""/>
        </a>
        <a
          href="https://github.com/rifat1752"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-slate-600  transition duration-300 w-8 md:w-10 text-white h-full text-2xl 2xl:w-20 2xl:text-5xl  md:text-3xl flex justify-center items-center rounded-full"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:rifatkhantarif@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-red-500 w-8 md:w-10  transition duration-300 text-white h-full text-2xl md:text-3xl 2xl:w-20 2xl:text-5xl flex justify-center items-center rounded-full"
        >
          <IoIosMail />{" "}
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100023578380431https://www.facebook.com/profile.php?id=100023578380431"
          rel="noopener noreferrer"
          target="_blank"
          className="hover:bg-white  transition duration-300 w-8 md:w-10 text-blue-500 h-full text-2xl md:text-3xl 2xl:w-20 2xl:text-5xl flex justify-center items-center rounded-full"
        >
          <FaFacebook />
        </a>
        <a
          href="https://wa.me/+8801742198533"
          rel="noopener noreferrer"
          target="_blank"
          className="hover:bg-white transition duration-300 w-8 md:w-10 h-full text-green-500 text-2xl md:text-3xl 2xl:w-20 2xl:text-5xl flex justify-center items-center rounded-full"
        >
          <IoLogoWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
