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
        <div>
            <nav className={`md:flex flex-col md:flex-row justify-between  md:h-16 text-bg-white    bg-opacity-80 items-center ${open === true?'h-40':''}`}>
            <div className="flex  flex-row justify-between items-center">
               <div className="  p-4 float-start"><p className="text-3xl text-yellow-300 font-nova font-extrabold   "><Link to={'/'}>&lt;RIFAT/&gt;</Link></p></div>
               <div className="float-right p-2 md:hidden " onClick={Clicked}>{open===true?<FaWindowClose className=" text-4xl  cursor-pointer " />:<IoMdMenu className="text-4xl text-yellow-300 cursor-pointer " /> }
               </div>
            </div>
            <div className= {`w-36 md:w-auto  pb-2 justify-center items-center  flex flex-col md:flex-row md:transparent rounded  bg-opacity-80 md:bg-opacity-0 absolute md:static ${open === true?'top-4 left-[40%]':'-top-96'} `}>
             
                    <li className="list-none mx-6 text-lg  mb-2 font-bold"><NavLink to='/' className={({ isActive, isPending }) =>isActive? "active text-yellow-300 border-b-4 border-yellow-300": isPending? "pending": ""}>Home</NavLink></li>
                    <li className="list-none mx-6 text-lg  font-bold"><NavLink to='/about' className={({ isActive, isPending }) =>isActive? "active text-yellow-300 border-b-4 border-yellow-300": isPending? "pending": ""}>About</NavLink> </li>
                    <li className="list-none mx-6 text-lg  font-bold"><NavLink to='/project' className={({ isActive, isPending }) =>isActive? "active text-yellow-300 border-b-4 border-yellow-300": isPending? "pending": ""}>Projects</NavLink> </li>
                   <li className="list-none mx-6 text-lg  font-bold"><NavLink to='/contact' className={({ isActive, isPending }) =>isActive? "active text-yellow-300 border-b-4 border-yellow-300": isPending? "pending": ""}>Contact</NavLink> </li>
                   <Link className=""><button className="bg-yellow-300 h-10 p-2 mr-6 hover:bg-blue-400 font-bold rounded text-black ">Download CV</button></Link>
           </div>
            </nav>
        </div>
    );
};

export default Navbar;