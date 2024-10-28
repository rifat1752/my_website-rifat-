import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaWindowClose } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen]= useState(false);
   
    const Clicked =()=>{
        setOpen(!open);
    }
    return (
        <div >
            <nav
            className={`md:flex flex-col md:flex-row  justify-between   md:h-16 text-bg-white my-3  mb-5  md:mb-0   ${open == true?' h-64 border-2 md:border-none border-slate-800 rounded-b-xl  bg-base-200 md:bg-transparent    ':''}`}>
               <div className="flex  flex-row justify-between items-center">
               <div className="  p-4 float-start"><p className="text-3xl text-yellow-400 font-nova font-extrabold   "><Link to={'/'}>&lt;RIFAT/&gt;</Link></p></div>
               <div className="float-right p-2 md:hidden " onClick={Clicked}>{open===true?<FaWindowClose className=" text-4xl  cursor-pointer " />:<IoMdMenu className="text-4xl text-yellow-400 cursor-pointer " /> }
               </div>
              </div>
              <div className= {`w-full md:w-auto   pb-2 justify-center  items-center  flex flex-col md:flex-row     md:transparent rounded  bg-opacity-80 md:bg-opacity-0  absolute md:static ${open == true?'top-15  ml-0 w-5/6 ':'-top-96'} `}>
             
                    <li className="list-none mx-6 text-lg   font-bold"><NavLink to='/' className={({ isActive, isPending }) =>isActive? "active text-yellow-400   ": isPending? "pending": ""}>Home</NavLink></li>
                    <li className="list-none mx-6 text-lg  font-bold"><NavLink to='/about' className={({ isActive, isPending }) =>isActive? "active text-yellow-400 ": isPending? "pending ": ""}>About</NavLink> </li>
                    <li className="list-none mx-6 text-lg  font-bold"><NavLink to='/project' className={({ isActive, isPending }) =>isActive? "active text-yellow-400": isPending? "pending": ""}>Projects</NavLink> </li>
                   <li className="list-none mx-6 text-lg  font-bold"><NavLink to='/contact' className={({ isActive, isPending }) =>isActive? "active  text-yellow-400 ": isPending? "pending": ""}>Contact</NavLink> </li>
                   <Link className=""><button className="w-32 h-10  md:mr-6 mt-2 md:mt-0 font-semibold   text-yellow-400  nav-btn  nav-btn1     ">Download CV</button></Link>
               </div>
          </nav>
        </div>
    );
};

export default Navbar;