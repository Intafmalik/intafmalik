import React from 'react'
import { motion } from 'framer-motion'
import ResumeCard from './ResumeCard'

const Education = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.6 } }}
            className=' flex flex-col mb-2 md:flex-row gap-20'>
            {/* left */}
            <div>
            <div className='py-10 font-bold space-y-4'>
                <p className='text-sm text-primaryColor tracking-[4px] '>2010 - 2024</p>
                <h2 className='text-xl  text-textblack900 dark:text-textWhite  tracking-wide'>Education Quality</h2>
            </div>
                <div className='mt-4 w-full h-[1000px] border-l-[6px] border-l-bgBlack border-opacity-30 flex flex-col gap-10' >
                    <ResumeCard
                        title="Lorem ipsum dolor sit."
                        subTitle="Lorem ipsum dolor (2010-2020)"
                        result="3.2/4"
                        des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quo praesentium doloribus architecto optio! At minima porro magnam quidem laboriosam?" />
                    <ResumeCard
                        title="Lorem ipsum dolor dolor sit."
                        subTitle="Lorem ipsum dolor (2010-202"
                        result="4.15/5"
                        des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quo praesentium doloribus architecto optio! At minima porro magnam quidem laboriosam?" />
                    <ResumeCard
                        title="Lorem ipsum dolor."
                        subTitle="Lorem ipsum dolor (2010-2020)"
                        result="4/5"
                        des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quo praesentium doloribus architecto optio! At minima porro magnam quidem laboriosam?" />
                </div>
             </div>
            {/* right */}
            <div>
                <div className='py-10 font-bold space-y-4'>
                    <p className='text-sm text-primaryColor tracking-[4px] '>2010 - 2024</p>
                    <h2 className='text-xl text-textblack900 dark:text-textWhite  tracking-wide'>Education Quality</h2>
                </div>
                <div className='mt-4 w-full  h-[1000px] border-l-[6px] border-l-bgBlack border-opacity-30 flex flex-col gap-10' >
                    <ResumeCard
                        title="Lorem ipsum dolor sit."
                        subTitle="Lorem ipsum dolor (2010-2020)"
                        result="3.10/4"
                        des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quo praesentium doloribus architecto optio! At minima porro magnam quidem laboriosam?" />
                    <ResumeCard
                        title="Lorem ipsum dolor dolor sit."
                        subTitle="Lorem ipsum dolor (2010-202"
                        result="4.15/5"
                        des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quo praesentium doloribus architecto optio! At minima porro magnam quidem laboriosam?" />
                    <ResumeCard
                        title="Lorem ipsum dolor."
                        subTitle="Lorem ipsum dolor (2010-2020)"
                        result="4/5"
                        des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quo praesentium doloribus architecto optio! At minima porro magnam quidem laboriosam?" />
                </div>
            </div>
        </motion.div>
    )
}

export default Education
