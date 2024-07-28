import kuet from '../../assets/kuet.png'
import dmrc from '../../assets/dmrc.jpg'
import { useState } from 'react';


const Education = () => {
    const [click, setClick] = useState(false)
    const handleClick = ()=>{
        setClick(!click);
    }
    return (
        <div className=' rounded-lg' >
            <h1 className='text-yellow-300 font-bold font-nova text-5xl text-center py-10'> My Education</h1>
       <div className=''>
       <div className='bg-slate-900 bg-opacity-40 flex p-5 rounded-lg'>
              {/* kuet */}
            <figure className='w-1/4'><img className='w-28 mx-auto  ' src={kuet} alt="" /></figure>
          
          <div className={`w-3/4 my-auto text-slate-200`}>
          <h1 className='text-3xl font-nova font-semibold'> B.Sc. in Electronics & Communication Engineering</h1>  
           <h2 className='text-xl font-semibold'>Khulna University of Engineering & Technology, Khulna </h2>
           <p className='text-base font-semibold'>Jan , 2018  -  Feb , 2023</p>
           <p className='text-slate-400'><span className='text-yellow-300 font-semibold'>Coursework included:</span> Web Development C Programming, C++ Programming,Database System, Machine Learning</p>
          </div>
        </div>
        <div className='mt-5 bg-slate-900 bg-opacity-40 flex p-5 rounded-lg'>
              {/* DMRC*/}
            <figure className='w-1/4'><img className='w-28 mx-auto' src={dmrc} alt="" /></figure>
          
          <div className='w-3/4 my-auto text-slate-200'>
          <h1 className='text-3xl font-nova font-semibold'> Higher Secondary Certificate</h1>  
           <h2 className='text-xl font-semibold'>Dr Mahbubur Rahman Molla College, Demra, Dhaka </h2>
           <p className='text-base font-semibold'> 2015 - 2017</p>
          </div>
        </div>
       </div>
        </div>
    );
};

export default Education;