import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import Banner from "../../Shared/Banner/Banner";


const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>   
        </div>
    );
};

export default Root;