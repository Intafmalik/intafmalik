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
                        des="As a beginner in front-end development, I have worked on various personal projects such as building landing pages, creating interactive to-do lists, and developing classic games like Tic-Tac-Toe. While I have not yet worked at a company, these projects have allowed me to strengthen my skills in HTML, CSS, and JavaScript. I focus on creating responsive, user-friendly interfaces and am eager to continue learning and improving my abilities in web development." />
                    <ResumeCard
                       title="Management System Software"
                     subTitle="Developing System Software"
                     result="70%"
                        des="I have developed a management system using C and C++, where I implemented features such as data storage, retrieval, and manipulation. The system includes functionalities for managing and processing information efficiently, demonstrating my understanding of object-oriented programming, file handling, and data structures. This project showcases my ability to create reliable and scalable applications while working with low-level programming concepts." />
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
                        des="I have taken web development training from the ACESS community, where I gained foundational knowledge and practical skills in HTML, CSS, JavaScript, and front-end development. This training has equipped me with the tools to build responsive and interactive websites, and has further strengthened my passion for web development." />
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
