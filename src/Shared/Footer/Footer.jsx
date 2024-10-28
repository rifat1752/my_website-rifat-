import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import ContactInfo from "../../Pages/Contact/ContactInfo";

const Footer = () => {
    return (
        <div>
            <footer data-aos="fade-UP"
               data-aos-duration="500"
                className="footer bg-base-300 text-base-content p-10 flex flex-col border-l-2 border-r-2 border-t-2 border-slate-800   rounded-t-xl">
              <div className="md:w-11/12 grid grid-cols-1    md:grid-cols-8  gap-5 mx-auto">
              <nav
               data-aos="fade-down"
               data-aos-duration="500" className="flex flex-col mx-auto text-center gap-1 md:col-span-2">
                   <h6 className="font-bold text-xl  text-yellow-400">Links</h6>
                   <Link to={'/'} className=" hover:underline  hover:text-yellow-400 mt-2">Home</Link>
                   <Link to={'/about'} className="hover:underline hover:text-yellow-400">About</Link>
                   <Link to={'/project'} className="hover:underline hover:text-yellow-400">project</Link>
   
                 </nav>
                 <nav
                  data-aos="fade-down"
                  data-aos-duration="500"
                   className="flex flex-col gap-1 mx-auto   md:col-span-3 ">
                   <h6 className="font-bold text-xl text-center md:text-left text-yellow-400">Contact</h6>
                   <p className="flex  items-center justify-center md:justify-start gap-1 mt-2"><FaPhoneAlt className="text-yellow-400 " />+880-1742198533</p>
                   <a className="flex  items-center justify-center md:justify-start gap-1" href=""><MdEmail className="text-yellow-400" />rifathossain1752@gmail.com</a>
                   <Link to={'/contact'} className="flex  items-center justify-center md:justify-start gap-1"><SiMinutemailer className="text-yellow-400"/> Send Message</Link>
                 </nav>
                 <nav
                  data-aos="fade-down"
                  data-aos-duration="500"
                   className=" text-center     mx-auto md:col-span-3" >
                   <h6 className="font-bold text-xl mx-auto text-yellow-400 ">Social</h6>
                  <ContactInfo></ContactInfo>
              </nav>
              </div>
              <p
             className="text-center mb-5 flex text-white mx-auto"> Copyright 2024 © <a href="">Rifat</a></p>
</footer>

        </div>
    );
};

export default Footer;