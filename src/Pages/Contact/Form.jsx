import {useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Form = () => {
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [message, setMessage] = useState([]);

  


  const sendEmail = (e) => {
    e.preventDefault();
    const templateParams = {
        from_name: name,
        from_email: email,
        message:message,
        to_email:'rifathossain1752@gmail.com',
        to_name:'Md. Rifat Hossain'
    }

    const serviceId = "service_0v4togg";
    const templateId = "template_c7tnjhj";
    const publicKey = "RDrF3r9X-CL9CT12A";
    emailjs
      .send(serviceId, templateId, templateParams, {
        publicKey: publicKey,
      })
      .then(
        () => {
          toast.success('Your Message Successfully Sent!')
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          toast.error("Error! Message is't  sent!")
          setName("");
          setEmail("");
          setMessage("");
        }
      );
  };
  return (
    <div
      data-aos="fade-right"
      data-aos-delay="300"
      data-aos-duration="1000"
      className="form w-5/6 md:w-1/2 flex justify-center items-center "
    >
      <form
        
        onSubmit={sendEmail}
        action=""
        className=" w-80 bg-slate-900  border-slate-500 backdrop-blur-2xl shadow-lg shadow-cyan-500 hover:shadow-yellow-400  transition duration-500 rounded-xl p-6 h-[400px] flex flex-col justify-around"
      >
        <p className="text-yellow-400 text-3xl">Send Message</p>
        <input
          className="h-10 bg-transparent border-b-2  border-blue-400 focus:border-yellow-400 focus:outline-none"
          type="text"
          placeholder="Your Name"
          name="from_name"
           value={name} 
          onChange={(e)=>setName(e.target.value)}
        />
        <input
          className="h-10 bg-transparent border-b-2 border-blue-400 focus:border-yellow-400 focus:outline-none"
          type="email"
          placeholder="Your Email"
          name="from_email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <textarea
          className="h-20 p-2 bg-transparent border-b-2 focus:border-b-2  border-blue-400  focus:border-yellow-400 focus:outline-none resize-none w-full"
          placeholder="Message"
          name="message"
          value={message} 
          onChange={(e)=>setMessage(e.target.value)}
        ></textarea>
        <input
          type="submit"
          className="bg-yellow-400 hover:scale-105 hover:text-xl hover:bg-teal-500 hover:text-yellow-400 transition duration-300  h-10 rounded-full text-slate-600 hover:cursor-pointer shadow-sm shadow-slate-300/45 text-lg font-semibold font-mono "
          value="Send"
        />
      </form>
    </div>
  );
};

export default Form;
