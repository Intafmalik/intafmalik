import React,{useState} from "react";
import {facebook,instagram,github,linkdin} from '../imagess/images';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

const Contact = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false)

    const onSubmit = async (data) =>{
        const userInfo = {
            firstName:data.firstName,
            lastName:data.lastName,
            email:data.email,
            subject:data.subject,
            message:data.message
        }

        try {
            setLoading(true)
            await axios.post("https://getform.io/f/ayvpgxpb",userInfo)
            // https://getform.io/f/ayvpgxpb
            toast.success("Your message has been sent")
            reset()
            
        } catch (error) {
            toast.error("Somthing went wrong ")
            console.log(error)
            
        }finally{
            setLoading(false)
        }
    } 

    return (
        <>
            <div
                id="Contact"
                className="w-full md:px-10  px-10 py-4 gap-1 bg-bgblack900 dark:bg-bgColor border border-b-black dark:border-b-textColorgray"
            >
                <h1 className="text-center p-1 text-primaryColor md:font-bold font-semibold mb-1 md:text-4xl  text-2xl">
                    Contact Me
                </h1>
                <div className="flex flex-col md:px-5 mt-5 h-max md:flex-row gap-2">
                    {/* left Box */}
                    <div className="md:w-1/2 w-full p-5 py-5 space-y-10 text-textblack900 dark:text-textWhite">
                        <h3 className="w-full space-x-3 font-semibold tracking-wide uppercase">
                            <span className="w-max h-full font-bold text-primaryColor bg-primaryColor">
                                |
                            </span>
                            <span>Contact</span>
                        </h3>
                        <h1 className=" dark:text-textWhite  text-[2.4rem] leading-[3.4rem] tracking-wider font-bold md:font-serif  ">
                            {" "}
                            Let's make something great together
                        </h1>
                        <div className="text-textblack700 dark:text-textColor tracking-[2px]">
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                                accusamus odit neque fugiat expedita, obcaecati harum laudantium
                                facere itaque nesciunt.
                            </p>
                        </div>
                        <div className="flex items-center justify-start text-3xl gap-4">
                            {/* <FaFacebookSquare className=''/>
        <FaLinkedin className=''/>
        <FaTelegram className=''/>
        <BsInstagram/> */}
                            <a
                                href="https://www.facebook.com/intaf.malik.786/"
                                target="_blank"
                            >
                                <img src={facebook} width={50} className="rounded-full" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/intaf-malik-0a2043278/"
                                target="_blank"
                            >
                                <img src={linkdin} width={50} className="rounded-full" />
                            </a>
                            <a href="https://github.com/Intafmalik" target="_blank">
                                <img src={github} width={50} className="rounded-full" />{" "}
                            </a>
                            <a href="https://www.instagram.com/in_ta__f786/" target="_blank">
                                <img src={instagram} width={50} className="rounded-full" />
                            </a>
                        </div>
                    </div>
                    {/* Right Box */}
                    <div className="md:w-1/2 w-full mt-1 mb-1">
                        <div>
                            <form 
                            onSubmit={handleSubmit(onSubmit)}
                            // method="POST"
                            // action="https:// className="text-redColor text-sm pl-2" g* etform.io/f/awngxdlb"
                            className="px-4 w-[85%] bg-bgblack100 bg-opacity-50 hover:bg-opacity-100 dark:bg-bgBlack dark:bg-opacity-10 p-4  dark:hover:bg-opacity-60 duration-300 mx-6 shadow-shadowlight dark:shadow-shadowOne rounded-xl h-full py-3 ">
                                <div className="flex flex-col w-full items-start gap-3
                                text-textblack900 group-hover:text-textblack900 bg-opacity-0 hover:bg-opacity-100  dark:text-textColorgray dark:group-hover:text-textWhite duration-300">

                                    <div className="flex flex-col w-full md:flex-row items-center gap-5 ">
                                        <div className="flex flex-col gap-1">
                                            <label className="pl-2 ">First Name</label>
                                            <input 
                                            {...register("firstName", { required: true })}
                                            name="firstName"
                                             type="text"
                                             placeholder="First Name"
                                             className="rounded-[10px]  outline-none text-[1.2rem] px-2 text-bgModal  h-10 bg-bgblack50  dark:bg-textColor  w-full"
                                              />
                                              {errors.firstName && <span className="text-redColor text-sm pl-2" >* This field is required</span>}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label className="pl-2">Last Name</label>
                                            <input
                                            {...register("lastName", { required: true })} 
                                            name="lastName"
                                             type="text"
                                             placeholder="Last Name"
                                             className="rounded-[10px] outline-none text-[1.2rem] px-2 text-bgModal  h-10 bg-bgblack50  dark:bg-textColor  w-full"
                                              />
                                                    {errors.lastName && <span className="text-redColor text-sm pl-2" >* This field is required</span>}
                                        </div>
                                    </div>
                                    <div className="flex flex-col  w-full gap-1">
                                        <label className="pl-2">Email</label>
                                        <input 
                                        {...register("email", { required: true })}
                                        name="email"
                                         type="email"
                                         placeholder="Email Address"
                                         className="rounded-[10px] outline-none text-[1.2rem] px-2 text-bgModal  h-10 bg-bgblack50  dark:bg-textColor w-full" 

                                         />
                                               {errors.email && <span className="text-redColor text-sm pl-2" >* This field is required</span>}
                                    </div>
                                    <div className="flex flex-col  w-full gap-">
                                        <label className="pl-2">Subject</label>
                                        <input 
                                        {...register("subject", { required: true })}
                                        name="subject"
                                         type="text"
                                         placeholder="Subject"
                                         className="rounded-[10px] outline-none text-[1.2rem] px-2 text-bgModal  h-10 bg-bgblack50  dark:bg-textColorw-full" 

                                         />
                                               {errors.subject && <span className="text-redColor text-sm pl-2" >* This field is required</span>}
                                    </div>
                                    <div className="flex flex-col  w-full gap-1">
                                        <label className="pl-2">Your Message</label>
                                        <textarea 
                                        {...register("message", { required: true })}
                                        name="message"
                                         placeholder="Your Message"
                                         className="rounded-[10px] outline-none text-[1.2rem] px-2 text-bgModal  h-40 bg-bgblack50  dark:bg-textColorw-full"
                                          />
                                                {errors.message && <span className="text-redColor text-sm pl-2" >* This field is required</span>}
                                    </div>
                                    <button
                                     type="submit"
                                     disabled={loading}
                                     className="button"
                                     >
                                     {loading ? "Submitting...":"Submit Form"}
                                     </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        <hr className="text-textColorgray" />
        </>
    );
};

export default Contact;
