import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer/Footer";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Root = () => {
    useEffect(()=>{
        Aos.init( );
      },[])
    return (
        <div className="max-w-screen-xl mx-5 xl:mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>   
            <Footer></Footer>
        </div>
    );
};

export default Root;