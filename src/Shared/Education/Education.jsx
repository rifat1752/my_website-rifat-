import kuet from '../../assets/kuet.png'
import dmrc from '../../assets/dmrc.png'
import { useState } from 'react';
import { IoRemoveOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Education = () => {
    const [click, setClick] = useState(false)
    const handleClick = ()=>{
        setClick(!click);
    }
    return (
        <div className=' rounded-lg' >
            <h1 className='text-yellow-300 font-bold  text-5xl text-center py-10'> My Education</h1>
           <div className='flex justify-center '> 
            <ul className="steps steps-vertical w-3/4 ">
              <li  className={`step step-info max-w-5xl`} >
              <div tabIndex={0} className={`collapse collapse-plus border-yellow-300 bg-base-200 `}  >
                <div className="collapse-title  justify-center items-center text-xl font-medium ">
                <img className='w-16 mx-auto  ' src={kuet} alt="" />
                <h1 className='text-3xl font-nova text-white border-blue-400 border-b-2 pt-5 pb-5   font-semibold'> B.Sc. in Electronics & Communication Engineering</h1>  
                </div>
                <div className="collapse-content mt-5 pl-10">
                <h2 className='text-xl font-semibold flex text-white gap-2 items-center'>  <IoRemoveOutline className='font-semibold text-yellow-200'/> Khulna University of Engineering & Technology, Khulna </h2>
                <p className='text-base text-white font-semibold flex gap-2 items-center'> <IoRemoveOutline className='text-xl font-semibold text-yellow-200'/> Jan , 2018  -  Feb , 2023</p>
                <p className='text-slate-400 flex gap-2 items-center'> <IoRemoveOutline className='text-xl font-semibold text-yellow-200'/><span className='text-yellow-300 font-semibold'>Coursework included:</span> Web Development C Programming, C++ Programming,Database System, Machine Learning</p>
                </div>
              </div>
              </li>
              <li className="step step-secondary">
              <div tabIndex={0} className={`collapse collapse-plus border-yellow-300 bg-base-200 `}  >
                <div className="collapse-title  text-xl font-medium">
                <img className='w-16 mx-auto' src={dmrc} alt="" />
                <h1 className='text-3xl font-nova text-white  border-pink-400 border-b-2 pt-5 pb-5   font-semibold'> Higher Secondary Certificate</h1>  
                </div>
                <div className="collapse-content pl-10">
                <h2 className='text-xl font-semibold flex text-white gap-2 items-center'>  <IoRemoveOutline className='font-semibold text-yellow-200'/>Dr Mahbubur Rahman Molla College, Demra, Dhaka </h2>
                <p className='text-base text-white font-semibold flex gap-2 items-center'> <IoRemoveOutline className='text-xl font-semibold text-yellow-200'/> 2015 - 2017</p>
                </div>
              </div>
              </li>
            </ul>
           </div> 
        </div>
    );
};

export default Education;