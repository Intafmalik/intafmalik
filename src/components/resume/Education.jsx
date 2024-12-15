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
                <p className='text-sm text-primaryColor tracking-[4px] '>2005 - 2019</p>
                <h2 className='text-xl  text-textblack900 dark:text-textWhite  tracking-wide'>Education Quality</h2>
            </div>
                <div className='mt-4 w-full h-[1000px] border-l-[6px] border-l-bgBlack border-opacity-30 flex flex-col gap-10' >
                    <ResumeCard
                        title="Shree Kunwarwarti English Boarding School"
                        subTitle="Class(Nursery- 5) (2005-2014)"
                        result="72%"
                        des="I completed my primary school education from nursery to grade 5 at Shree Kunwarwarti English Boarding School, located in Tilottama 11, Perdeepnagar, Rupandehi, where I built a strong foundation in essential subjects and developed a love for learning." />
                    <ResumeCard
                        title="Shanti Namuna Secondary School"
                        subTitle="Secondary Level (2014-2018)"
                        result="76%"
                        des="I completed my secondary school education from grade 6 to grade 9 at Shree Shanti Namuna Secondary School, located in Tilottama -6 manigram Rupandehi, where I further developed my academic skills and gained a deeper understanding of core subjects such as mathematics, science, and languages, preparing me for higher education and future challenges." />
                         <ResumeCard
                        title="HSEB"
                        subTitle="SEE (10)"
                        result="3.10/4"
                        des="I completed my Secondary Education Examination from Shanti Namuna Secondary School, where I further developed my academic skills and gained a deeper understanding of core subjects such as mathematics, science, and languages. I chose the Science Faculty, which prepared me for higher education and future challenges in the scientific field." />
                   
                </div>
             </div>
            {/* right */}
            <div>
                <div className='py-10 font-bold space-y-4'>
                    <p className='text-sm text-primaryColor tracking-[4px] '>2019-2021</p>
                    <h2 className='text-xl text-textblack900 dark:text-textWhite  tracking-wide'>Education Quality</h2>
                </div>
                <div className='mt-4 w-full  h-[1000px] border-l-[6px] border-l-bgBlack border-opacity-30 flex flex-col gap-10' >
                   
                    <ResumeCard
                        title="Rammani Multiple Campus (RMC)"
                        subTitle="+2 Science (2019-2021)"
                        result="3.16/4"
                        des="I completed my SLC in Science from Rammani Multiple Campus, where I deepened my knowledge in scientific subjects and laid the foundation for pursuing higher education in Computer Engineering, preparing me for a career in technology and innovation." />
                    <ResumeCard
                        title="Purwanchal Engineering Campus(IOE)"
                        subTitle="BCT (2022-2027)"
                        result="-"
                        des="I completed my SLC in Science from Rammani Multiple Campus, where I deepened my knowledge in scientific subjects and laid the foundation for pursuing higher education. Currently, I am studying for a Bachelor's degree in Computer Engineering at Purwanchal Engineering Campus, where I am gaining skills to excel in the field of technology and innovation." />
                </div>
            </div>
        </motion.div>
    )
}

export default Education
