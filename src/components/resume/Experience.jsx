import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from 'framer-motion'
const Experience = () => {
  return (
    <motion.div 
     initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
    className='flex flex-col mb-2 md:flex-row gap-20'>
                {/* left */}
                <div><div className='py-10 font-bold space-y-4'>
                    <p className='text-sm text-primaryColor tracking-[4px] '>2023 - 2024</p>
                    <h2 className='text-xl  text-textblack900 dark:text-textWhite  tracking-wide'>Job Experience</h2>
                </div>
                    <div className='mt-4 w-full h-[1000px] border-l-[6px] border-l-bgBlack border-opacity-30 flex flex-col gap-10' >
                    <ResumeCard
                      title="Web Develpement"
                       subTitle="Front-End Development"
                       result="60%"
                        des="As a beginner in front-end development, I’ve built projects like landing pages, to-do lists, and Tic-Tac-Toe, enhancing my HTML, CSS, and JavaScript skills. I focus on creating responsive interfaces and am eager to keep learning." />
                    <ResumeCard
                       title="Management System Software"
                     subTitle="Developing System Software"
                     result="70%"
                        des="I developed a management system using C and C++, focusing on data storage, retrieval, and manipulation, demonstrating my skills in object-oriented programming and data structures." />
                    {/* <ResumeCard
                        title="Lorem ipsum dolor sit."
                       subTitle="Lorem ipsum dolor (2010-2020)"
                       result="3.2/4"
                        des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quo praesentium doloribus architecto optio! At minima porro magnam quidem laboriosam?" /> */}
                    </div></div>
                {/* right */}
                <div>
                    <div className='py-10 font-bold space-y-4'>
                        <p className='text-sm text-primaryColor tracking-[4px] '>2023 - 2024</p>
                        <h2 className='text-xl  text-textblack900 dark:text-textWhite tracking-wide'>Training Experience</h2>
                    </div>
                    <div className='mt-4 w-full  h-[1000px] border-l-[6px] border-l-bgBlack border-opacity-30 flex flex-col gap-10' >
                    <ResumeCard
                      title="Web Developement"
                       subTitle="front-end developer"
                       result="65%"
                        des="I completed web development training with the ACESS community, gaining foundational skills in HTML, CSS, JavaScript, and front-end development. This training equipped me to build responsive, interactive websites and deepened my passion for web development." />
                    {/* <ResumeCard
                       title="Lorem ipsum dolor sit."
                     subTitle="Lorem ipsum dolor (2010-2020)"
                     result="3.2/4"
                        des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quo praesentium doloribus architecto optio! At minima porro magnam quidem laboriosam?" />
                    <ResumeCard
                        title="Lorem ipsum dolor sit."
                       subTitle="Lorem ipsum dolor (2010-2020)"
                       result="3.2/4"
                        des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quo praesentium doloribus architecto optio! At minima porro magnam quidem laboriosam?" /> */}
                    </div>
                </div>
            </motion.div>
  )
}

export default Experience
