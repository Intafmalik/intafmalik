import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div id="Home"
            className="w-full flex items-center justify-center flex-col md:px-10  px-5 py-[4.3rem] gap-1 bg-bgblack900 dark:bg-bgColor dark:text-textWhite border border-b-textColorgray ">
            <div className='w-[50%] h-max text-center p-3 space-y-4'>
                <h1 className='text-3xl font-bold text-primaryColor tracking-wide'>Malik Developer</h1>
                <p className='text-textblack700 dark:text-textColor font-medium '>ere are many types of simple footer html css, some just basic information, and some social icons. In some cases, there are links, posts, images, and information. If you want to make footers for news, magazines, or other types of sites, then you can see another design made by me.</p>
                <div className='w-full text-2xl font-bold space-y-4 '>
                    <span className='mt-10 font-semibold p-2 tracking-wide text-designColor'>Find me on</span>
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
            {/* <div> */}
             <h2 className=''>Copyright @2023 <span className='text-formBTNColor dark:bg-bgBlack'>Malikdeveloper</span></h2>
             {/* </div> */}
             <div className='flex gap-2'>
                <span>Home</span>
                <span>About</span>
                <span>Contact</span>
                <span>Blog</span>
             </div>
            </div>


        </div>
    )
}

export default Footer
