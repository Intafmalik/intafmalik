import { motion, TbBrandCpp, FaCss3Alt, FaHtml5, FaPython, FaJsSquare, FaReact, RiTailwindCssFill, TbHexagonLetterCFilled, FaNode } from "../../icons/icon"

import React from 'react'

const Skill = () => {
    const languageName = [
        {
            id: 1,
            name: "C",
            logo: <TbHexagonLetterCFilled />,
            res: 70
        },
        {
            id: 2,
            name: "C++",
            logo: <TbBrandCpp />,
            res: 60
        },
        {
            id: 3,
            name: "Python",
            logo: <FaPython />,
            res: 50
        },
        {
            id: 4,
            name: "JS",
            logo: <FaJsSquare />,
            res: 55
        },
    ]

    const webDEVLang = [
        {
            id: 1,
            name: "HTML",
            logo: <FaHtml5 />,
            res: 80,
        },
        {
            id: 2,
            name: "CSS",
            logo: <FaCss3Alt />,
            res: 70,
        },
        {
            id: 3,
            name: "REACT",
            logo: <FaReact />,
            res: 65,
        },
        {
            id: 4,
            name: "Tailwind CSS",
            logo: <RiTailwindCssFill />,
            res: 75,
        },
        {
            id: 5,
            name: "Node Js",
            logo: <FaNode />,
            res: 46,
        },
    ]

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.6 } }}
            className=' flex flex-col mb-2 md:flex-row gap-20'>
            {/* left */}

            <div className='md:w-1/2 w-full'>
                <div className='py-10 font-bold space-y-4'>
                    <p className='text-sm text-primaryColor tracking-[4px] '>Software</p>
                    <h2 className='text-xl  font-bold  text-textblack900 dark:text-textWhite tracking-wide'>Programming Skill</h2>
                </div>
                <div className='flex flex-col'>
                    {
                        languageName.map(({ id, name, res, logo }) => (

                            <div className='w-full mt-5' key={id}>
                                <div className='flex justify-between items-end px-2'>

                                    <p className='text-5xl text-slate-100 bg-skillBackground md:bg-opacity-100 rounded-xl p-1
                                    shadow-shadowlight dark:bg-bgBlack dark:shadow-shadowOne  font-medium'>{logo}</p>
                                    <span className='text-primaryColor text-xl'>{name}</span>
                                    <span className=' text-medium text-primaryColor text-center'>{res}%</span>
                                </div>
                                <span className='w-full h-2  inline-flex bgOpacity overflow-x-hidden rounded-md mt-1'>
                                    <motion.span
                                        initial={{ x: "-100%", opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                        style={{ width: `${res}%` }}
                                        className=' h-full bg-skillBackground rounded-md relative'>
                                        {/* <span className='absolute -top-8 text-textColor right-4'>{res}%</span> */}

                                    </motion.span>

                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* right */}

            <div className='md:w-1/2 w-full'>

                <div className='py-10 font-bold space-y-4'>
                    <p className='text-sm text-primaryColor tracking-[4px] '>Language</p>
                    <h2 className='text-xl  text-textblack900 dark:text-textWhite  tracking-wide'>DevelopMent Skill</h2>
                </div>
                <div className='flex flex-col'>
                    {
                        webDEVLang.map(({ id, name, res, logo }) => (

                            <div className='w-full mt-5' key={id}>
                                <div className='flex justify-between items-end px-2'>

                                    <p className='text-5xl text-slate-100  bg-skillBackground md:bg-opacity-100 rounded-xl p-1
                                    shadow-shadowlight dark:bg-bgBlack dark:shadow-shadowOne  font-medium'>{logo}</p>
                                    <span className='text-xl text-primaryColor'>{name}</span>
                                    <span className=' text-medium text-primaryColor text-center'>{res}%</span>
                                </div>
                                <span className='w-full h-2 inline-flex bgOpacity overflow-x-hidden rounded-md mt-1'>
                                    <motion.span
                                        initial={{ x: "-100%", opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                        style={{ width: `${res}%` }}
                                        className=' h-full bg-skillBackground rounded-md relative'>
                                        {/* className=' h-full bg-designColor to-redColor rounded-md relative'> */}
                                        {/* <span className='absolute -top-8 text-textColor right-4'>{res}%</span> */}

                                    </motion.span>

                                </span>
                            </div>
                        ))
                    }
                </div>

            </div>
        </motion.div>
    )
}

export default Skill
