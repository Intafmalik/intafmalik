import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaFacebookSquare, BsInstagram, FaTelegram, FaNodeJs, DiMongodb, FaReact, RiTailwindCssFill, MdLightMode, MdDarkMode, FaCog, FcSettings } from "../icons/icon"
import { portFolio } from "../imagess/images";
import { ReactTyped } from "react-typed";
import { Link } from 'react-scroll';

const getInitialDarkMode = () => localStorage.getItem("theme") || "dark"
const getInitialPrimaryColor = () => localStorage.getItem("primaryColor" || "blue")

const Home = () => {


    const colors = [
        { name: 'red', className: 'bg-redColor' },
        { name: 'blue', className: 'bg-blue-700' },
        { name: 'green', className: 'bg-[#00ff00]' },
        { name: 'purple', className: 'bg-[#f700ff]' },
        { name: 'aqua', className: 'bg-[#00f0ff]' },
        { name: 'yellow', className: 'bg-[#fff700]' }
    ];

    const [theme, setTheme] = useState(getInitialDarkMode)
    const [primaryColor, setPrimaryColor] = useState(getInitialPrimaryColor)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", primaryColor)
        localStorage.setItem("primaryColor", primaryColor)
    }, [primaryColor, theme])

    useEffect(() => {

        if (theme === "dark") {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", theme)

        } else {
            document.documentElement.classList.remove("dark")
            console.log(localStorage.setItem("theme", theme))
        }

    }, [theme, primaryColor])

    const handleToggler = () => {
        if (theme === "dark") {
            setTheme("light")
            console.log("light theme")
        } else {
            setTheme("dark")
            console.log("dark theme'")
        }

    }
    const handleThemeChange = (newPrimayColor) => {
        setPrimaryColor(newPrimayColor);
        console.log(`${newPrimayColor} Theme is active `)
    }

    const handleThemeBTN = () => {
        setOpen(prevState => !prevState)
        console.log(`Button  is ${!open}`)
    }

    return (
        <>
            <div
                id="Home"
                className="w-full px-5 py-4 border bg-bgblack900  dark:border-b-textColorgray border-b-black dark:bg-bgColor">
                <div className="flex md:flex-row flex-col-reverse py-5 md:px-10  gap-1">

                    <div className="w-full h-max md:w-3/5  flex gap-2">
                        {/* Available on icons */}
                        <div className="md:w-1/12 hidden md:flex flex-col justify-center gap-6 items-center text-2xl">
                            <a href="https://github.com/Intafmalik" target="_blank">
                                <FaGithub
                                    className=" linkBtn "
                                    b
                                />
                            </a>
                            <a href="https://www.linkedin.com/in/intaf-malik-0a2043278/" target="_blank">
                                <FaLinkedin
                                    className=" linkBtn"
                                    n
                                />
                            </a>
                            <a href="https://www.facebook.com/intaf.malik.786/" target="_blank">
                                <FaFacebookSquare className=" linkBtn" />
                            </a>
                            <a href="https://www.instagram.com/in_ta__f786/" target="_blank">
                                <BsInstagram className=" linkBtn" />
                            </a>
                            <a href="https://web.telegram.org/k/" target="_blank">
                                <FaTelegram className=" linkBtn" />
                            </a>
                            <div className="mb-1 w-1 h-20 border-l-2  bg-textblack900 dark:text-textColor "></div>
                        </div>

                        {/* Introduction */}

                        <div className="md:w-11/12 w-full flex flex-col justify-center items-start mt-5 gap-4 p-5
                        text-textblack700 dark:text-textColor">
                            <h3 className="font-semibold md:text-3xl relative top-4 text-xl text-primaryColor ">
                                {" "}
                                Hi , I am
                            </h3>
                            <div
                                class="text-textblack900 dark:text-white text-[4.25rem] leading-[6rem] tracking-wider font-extrabold lg-mx:text-5xl sm-mx:text-4xl xs-mx:text-3xl xsm-mx:text-[27px]"
                            >
                                Intaf Malik
                            </div>
                            <h2 className="font-bold md:text-4xl text-2xl ">
                                I'm a <span className="text-primaryColor">
                                    {
                                        <ReactTyped

                                            strings={["Web Developer", "Competetive Programmer", "Codder"]}
                                            typeSpeed={150}
                                            delteSpeed={10}
                                            delaSpeed={2000}
                                            loop={true}
                                        />
                                    }
                                </span>
                            </h2>
                            <p className="font-medium text-semibold text-start">
                               
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, recusandae consequatur. Accusamus sint libero eligendi laborum fuga repudiandae? Asperiores tempore eos animi dolores corrupti! Sint quos, mollitia architecto aliquam nesciunt, optio cum delectus sit voluptatum aut ratione quaerat veniam aperiam!
                            </p>

                            <div className="w-full flex md:flex-row flex-col md:gap-1 gap-3 items-center justify-around p-2 ">

                                <Link
                                    activeClass="text-primaryColor"
                                    to={"Resume"}
                                    spy="true"
                                    offset={-70}
                                    onSetActive={(id) => console.log(`${id} is active`)}
                                    smooth={true}
                                    duration={400}
                                // delay={200}
                                >
                                    <button
                                        className="button">
                                        Check Resume
                                    </button>
                                </Link>

                                <div>
                                    <h2 className="p-1 mb-2 font-bold md:text-2xl text-mediun text-textblack900 dark:text-white ">
                                        Currently Working{" "}
                                        <span className="text-primaryColor">On</span>
                                    </h2>
                                    <div className="flex items-center justify-around text-3xl">
                                        <FaReact className="linkBtn" />
                                        <FaNodeJs className="linkBtn" />
                                        <DiMongodb className="linkBtn" />
                                        <RiTailwindCssFill className="linkBtn" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* images  */}

                    <div className=" w-full flex  md:w-2/5 md:mt-2  mt-12 -ml-2 ">

                        <div className="imageDiv md:mt-7 md:ml-7 ">
                            <div className="flex items-center justify-center h-[90%] w-auto relative ">

                                <div className="absolute h-[4.5rem] w-[4.5rem] left-8 -top-7 md:-left-[10px]  md:-top-6 border-[8px] border-t-primaryColor border-l-primaryColor border-r-0 border-b-0"></div>

                                <img src={portFolio} alt="PP img" className="brightness-100  w-[65%] h-[100%] md:w-[90%] rounded-xl items-center hover:brightness-100 transition focus:brightness-100 active:brightness-100 ease-in-out duration-300" />

                                <div className="absolute h-[4.5rem] w-[4.5rem] right-8 -bottom-7  md:-right-[10px]  md:-bottom-6 border-[8px] border-b-primaryColor border-r-primaryColor border-t-0 border-l-0"></div>
                            </div>

                        </div>


                        {/* Theme changer */}

                        <div className={`flex p-1 gap-4 fixed mt-8 right-3 z-30 transition-transform duration-500 ease-out ${open ? "translate-x-0" : "translate-x-2"}`}>
                            <div className="flex flex-col gap-4">
                                <div className={`bg-skillBackground flex rounded-md p-1 items-center justify-center cursor-pointer ${theme === "dark" ? "text-textWhite" : "text-bgBlack"}`}
                                    onClick={handleThemeBTN}
                                >
                                    <FaCog className="animate-spinSlow" size={35} />
                                </div>
                                <div onClick={handleToggler} className="text-4xl rounded-md bg-skillBackground p-1 cursor-pointer">
                                    {theme === "dark" ? (
                                        <MdLightMode className="text-textWhite" />
                                    ) : (
                                        <MdDarkMode className="text-bgBlack" />
                                    )}
                                </div>
                            </div>

                            {open && (
                                <div className={`space-y-2 z-50 -mt-1 w-fit rounded-lg p-2 transition-all duration-500 ease-out ${open ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 -translate-y-4"} ${theme === "dark" ? "bg-bgBlack text-textWhite" : "bg-bgblack50"}`}>
                                    <h2>Theme Color</h2>
                                    <div className="grid grid-cols-3 gap-2 transition-opacity duration-300">
                                        {
                                            colors.map((color, id) => (
                                                <button key={id}
                                                    className={`text-xl border-2 border-sky-950 h-7 w-7 font-medium rounded-full transition-transform transform hover:scale-110 ${color.className}`}
                                                    onClick={() => handleThemeChange(color.name) & setOpen(false)}
                                                >
                                                </button>
                                            ))
                                        }
                                    </div>
                                </div>
                            )}
                        </div>


                    </div>
                </div>
            </div>
            <hr className="text-textColorgray" />

        </>
    );
};

export default Home;
