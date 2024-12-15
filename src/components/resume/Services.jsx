import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <motion.div 
    initial={{ opacity:0 }}
     animate={{ opacity:1, transition: { duration: 0.5 } }} className='flex flex-col mb-2 md:flex-row gap-20'>
           {/* left */}
           <div><div className='py-10 font-bold space-y-4'>
               <p className='text-sm text-primaryColor tracking-[4px] '>2024 - 2025</p>
               <h2 className='text-xl text-textblack900 dark:text-textWhite  tracking-wide'>Management System</h2>
           </div>
               <div className='mt-4 w-full h-[1000px] border-l-[6px] border-l-bgBlack border-opacity-30 flex flex-col gap-10' >
                   <ResumeCard
                       title="Management System Solutions"
                        subTitle="Student, Bank, Library."
                       result="-"
                       des="I provide services in building management systems like student, bank, and library management. Using C and C++, I create efficient, scalable systems for data handling, with user-friendly interfaces and reliable backend functionalities." />
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
               </div></div>
           {/* right */}
           <div>
               <div className='py-10 font-bold space-y-4'>
                   <p className='text-sm text-primaryColor tracking-[4px] '>2023 - 2024</p>
                   <h2 className='text-xl text-textblack900 dark:text-textWhite  tracking-wide'>Front End Developement</h2>
               </div>
               <div className='mt-4 w-full  h-[1000px] border-l-[6px] border-l-bgBlack border-opacity-30 flex flex-col gap-10' >
                   <ResumeCard
                     title="Frontend Developer"
                      subTitle="Building Responsive and Interactive Web Experiences"
                      result="-"
                       des="I provide frontend development services, creating responsive, user-friendly web interfaces with HTML, CSS, and JavaScript for seamless experiences across devices." />
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

export default Services