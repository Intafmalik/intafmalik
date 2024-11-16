import React from "react";
import { facebook, instagram, github, linkdin } from "../../imagess/images";
import ContactForm from "./ContactForm";

const Contact = () => {

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
                        <ContactForm />
                    </div>
                </div>
            </div>
            <hr className="text-textColorgray" />
        </>
    );
};

export default Contact;
