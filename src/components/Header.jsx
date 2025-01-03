import React from 'react'
import { TbHexagonLetterM } from "react-icons/tb";
import { LuMenuSquare } from "react-icons/lu";
import { CgCloseR } from "react-icons/cg";
import { useState } from "react";
import { Link } from 'react-scroll';
import { FaHome,IoPersonSharp,FaClipboardList,FaFileAlt,MdContactPhone } from '../icons/icon';

const Header = () => {
    const [menu, setMenu] = useState(false)
    const navItem = [
        {
            id: 1,
            text: "Home",
            icon:<FaHome/>
        },
        {
            id: 2,
            text: "About",
            icon:<IoPersonSharp/>
        },
        {
            id: 3,
            text: "Projects",
            icon:<FaClipboardList/>
        },
        {
            id: 4,
            text: "Resume",
            icon:<FaFileAlt/>
        },
        {
            id: 5,
            text: "Contact",
            icon:<MdContactPhone/>
        },
    ]
    return (
        <>
            <nav className='max-w-screen shadow-[0px_10px_30px_-10px_#020c1b] border-b-textColorgray bg-bgblack100 text-textblack900 dark:bg-bgColor  dark:text-textWhite md:px-10 py-1 px-5 sticky top-0 z-30'>
                <div className='flex items-center w-full justify-between  '>
                    <div className='flex align-center space-x-2 '>
                        <TbHexagonLetterM className='h-11 w-11 text-primaryColor border-solid  mt-1 ' />
                        <div>
                            <h2 className=' text-xl font-bold tracking-normal'>Inta<span className='text-primaryColor'>f</span></h2>
                            <p className='tracking-normal font-semibold'>Web <span className='text-primaryColor'> Developer </span></p>
                        </div>
                    </div>
                    <div>
                        <ul className='hidden sm:flex gap-10 font-medium align-center tracking-normal text-xl '>
                            {
                                navItem.map(({ id, text}) => (
                                    <li
                                     className='tracking-normal hover:text-primary-color cursor-pointer hover:scale-105 ease-in-out duration-200 active:text-primaryColor' key={id}>
                                                                        
                                        <Link
                                            activeClass="text-primaryColor"
                                            to={text}
                                            spy="true"
                                            offset={-70}
                                            onSetActive={(id) => console.log(`${id} is active`)}
                                            smooth={true}
                                            duration={400}
                                        // delay={200}
                                        >
                                            {text}

                                        </Link>
                                    </li>


                                ))
                            }

                        </ul>
                        {/* mobile menu */}
                        <div onClick={() => setMenu(!menu)} className='md:hidden text-3xl'>

                            {menu ? < CgCloseR /> : <LuMenuSquare />}
                        </div>
                    </div>
                </div>

                {menu && (

                    <div className='h-[80vh] flex  items-center w-full justify-center ' >

                        <ul className='flex flex-col gap-5  font-medium tracking-normal text-textblack900 dark:text-textWhite text-xl '>

                            {
                                navItem.map(({ id, text,icon }) => (

                                    <li className='tracking-normal border  border-t-0 border-l-0 border-r-0 border-b-primaryColor border-opacity-75 p-2 text-2xl font-bold hover:text-primaryColor cursor-pointer hover:scale-105 ease-in-out duration-200' key={id}>
                                
                                        <Link
                                            onClick={() => setMenu(!menu)}
                                            activeClass="active text-primaryColor"
                                            to={text}
                                            spy="true"
                                            offset={-70}
                                            smooth={true}
                                            duration={400}
                                            className='flex items-center gap-4 text-center'
                                        // delay={200}
                                        >

                                            {icon} 
                                            <span className='text-xl font-medium active:text-primaryColor'>{text}</span>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                )}

            </nav >


        </>
    )
}

export default Header
