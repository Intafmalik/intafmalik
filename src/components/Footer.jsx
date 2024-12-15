import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div id="Home"
            className="w-full flex items-center justify-center flex-col md:px-10 px-5 py-[4.3rem] gap-1 dark:text-textWhite pagediv ">
            <div className='w-[50%] h-max text-center p-3 space-y-4'>
                <h1 className='text-3xl font-bold text-primaryColor tracking-wide'>Malik Developer</h1>
                <p className='text-textblack700 dark:text-textColor font-medium '>Developed by Malik Developer – Passionate about creating user-centered solutions. Let’s collaborate and bring your vision to life!</p>
                <div className='w-full text-2xl font-bold space-y-4 '>
                    <span className='mt-10 font-semibold p-2 tracking-wide text-primaryColor'>Find me on</span>
                    <div className='flex items-center font-bold text-4xl justify-center gap-4 '>
                    <a href="https://github.com/Intafmalik" target="_blank">
                            <FaGithub
                                className=" shadow-shadowlight dark:shadow-shadowOne bg-opacity-20 linkBtn"
                                b
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/intaf-malik-0a2043278/" target="_blank">
                            <FaLinkedin
                                className=" shadow-shadowlight dark:shadow-shadowOne bg-opacity-20 linkBtn"
                                n
                            />
                        </a>
                        <a href="https://www.facebook.com/intaf.malik.786/" target="_blank">
                            <FaFacebookSquare className=" shadow-shadowlight dark:shadow-shadowOne bg-opacity-20 linkBtn" />
                        </a>
                        <a href="https://www.instagram.com/in_ta__f786/" target="_blank">
                            <BsInstagram className=" shadow-shadowlight dark:shadow-shadowOne bg-opacity-20 linkBtn" />
                        </a>
                        <a href="https://web.telegram.org/k/" target="_blank">
                            <FaTelegram className=" shadow-shadowlight dark:shadow-shadowOne bg-opacity-20 linkBtn" />
                        </a>

                    </div>

                </div>
            </div>
            <div className=' flex flex-col md:flex-row p-2 items-center justify-between gap-10 font-medium text-textblack900 dark:text-textColor '>
             <h2 className=''>Copyright @2023 <span className='text-formBTNColor'>Malikdeveloper</span></h2>
             <div className='flex gap-2'>
                <span className='hover:underline hover:text-blue-700 hover:cursor-pointer'>Home</span>
                <span className='hover:underline hover:text-blue-700 hover:cursor-pointer'>About</span>
                <span className='hover:underline hover:text-blue-700 hover:cursor-pointer'>Contact</span>
                <span className='hover:underline hover:text-blue-700 hover:cursor-pointer'>Blog</span>
             </div>
            </div>
        </div>
    )
}

export default Footer
