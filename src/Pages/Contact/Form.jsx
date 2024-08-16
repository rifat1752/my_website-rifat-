

const Form = () => {
    return (
        <div
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-duration="1000" 
         className="form w-5/6 md:w-1/2 flex justify-center items-center ">
        <form action="" className=" w-80 bg-slate-900 border border-slate-500 backdrop-blur-2xl shad transition duration-500 rounded-xl p-6 h-[400px] flex flex-col justify-around">
            <p className="text-yellow-300 text-3xl">Send Message</p>
            <input className="h-10 bg-transparent border-b-2  border-blue-400 focus:border-yellow-300 focus:outline-none" type="text" placeholder="Your Name" name="name"/>
            <input className="h-10 bg-transparent border-b-2 border-blue-400 focus:border-yellow-300 focus:outline-none" type="email" placeholder="Your Email" name="email" id="" />
            <input className="h-14 p-2 bg-transparent border-b-2 border-blue-400 focus:border-yellow-300 focus:outline-none " type="text" placeholder="Message" name="message" id="" />
            <input type="button" className="bg-yellow-300  h-8 rounded text-base-200 hover:cursor-pointer shadow-sm shadow-slate-300 text-lg font-semibold font-mono " value="Send" />
        </form>
    </div>
    );
};

export default Form;