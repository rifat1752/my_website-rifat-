import kuet from '../../assets/kuet.png'
import dmrc from '../../assets/dmrc.png'
import { DotLottiePlayer } from '@dotlottie/react-player';
import dotLottieAnimation from '../../assets/lottie/bubble-1.lottie';




const Education = () => {

   
    return (
        <div className='relative'>
            <DotLottiePlayer
      className="absolute inset-0  w-full h-full object-cover md:w-10/12 lg:w-2/3 rotate-0 md:-rotate-90 mx-auto"
        src={dotLottieAnimation }
        autoplay
        loop
      >
        
      </DotLottiePlayer>
          <div className=' rounded-xl border-2 border-slate-800 my-10 py-10 backdrop-blur-[2px] bg-base-300/40' >
         
            <h1 data-aos="zoom-in"
      data-aos-duration="1000" className='text-yellow-400 font-bold text-5xl md:text-5xl 2xl:text-8xl text-center py-10'> My Education</h1>
           <div className='flex justify-center '> 
            <ul className="steps step-info steps-vertical w-11/12 md:w-3/4 ">
              <li className={`step step-info 2xl:text-2xl  mt-10` } >
              <div  data-aos="fade-down-right"
       data-aos-delay="300"
              data-aos-duration="1000"  
               tabIndex={0} className={`collapse collapse-plus   bg-slate-800 `}  >
                <div className="collapse-title  justify-center items-center text-xl font-medium ">
                <img className='w-10 sm:w-16 2xl:w-36 mx-auto  ' src={kuet} alt="" />
                <h1 className='text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-nova text-white border-blue-400 border-b-2 pt-5 pb-5   font-semibold'> B.Sc. in Electronics & Communication Engineering</h1>  
                </div>
                <div className="collapse-content mt-5 ">
                <ul className="steps steps-vertical">
                   <li className="step step-info">
                    <h2 className='text-sm md:text-base 2xl:text-2xl  text-white text-left '> Khulna University of Engineering & Technology, Khulna </h2>
                   </li>
                   <li className="step step-info">                
                    <p className='text-sm md:text-base  2xl:text-2xl text-white text-left'>  Jan,2018  -  Feb,2023</p>
                   </li>
                   <li className="step step-info">
                    <div className='flex gap-2 text-left'>
                     <p className=' text-slate-400 text-sm  2xl:text-2xl text-left'><span className='w-72 text-sm md:text-base text-yellow-400 font-semibold'>Coursework included:</span> Web Development C Programming, C++ Programming,Database System, Machine Learning</p>
                    </div>
                   </li>
                </ul>
                </div>
              </div>
              </li>
              <li
                className="step step-secondary 2xl:text-2xl">
              <div 
               data-aos="fade-down-right"
               data-aos-duration="1000"
               data-aos-delay="300"
              tabIndex={0} className={`collapse collapse-plus border-yellow-300 bg-slate-800 `}  >
                <div className="collapse-title  text-xl font-medium">
                <img className='w-10 sm:w-16 mx-auto 2xl:w-36 ' src={dmrc} alt="" />
                <h1 className='text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-nova text-white  border-pink-400 border-b-2 pt-5 pb-5   font-semibold'> Higher Secondary Certificate</h1>  
                </div>
                <div className="collapse-content ">
                <ul className="steps steps-vertical">
                   <li className="step step-secondary">
                   <h2 className='text-sm md:text-base 2xl:text-2xl text-white text-left '>Dr Mahbubur Rahman Molla College, Demra, Dhaka </h2>
                   </li>
                   <li className="step step-secondary">                
                    <p className='text-sm md:text-base 2xl:text-2xl text-white text-left'> 2015 - 2017</p>
                   </li>
                </ul>
                </div>
              </div>
              </li>
            </ul>
           </div> 
        </div>
        </div>
    );
};

export default Education;