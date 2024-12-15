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
                        title="Primary Level"
                        subTitle="KEBS(2005-2014)"
                        result="72%"
                        des="I completed nursery to grade 5 at Shree Kunwarwarti English Boarding School, Tilottama-11, Perdeepnagar, Rupandehi, building a strong foundation in essential subjects and a love for learning." />
                    <ResumeCard
                        title="Secondary Level"
                        subTitle="SSNSS (2014-2018)"
                        result="76%"
                        des="I completed grades 6 to 9 at Shree Shanti Namuna Secondary School, Tilottama-6, Manigram, Rupandehi, where I enhanced my skills in mathematics, science, and languages, preparing for future challenges." />
                         <ResumeCard
                        title="HSEB"
                        subTitle="SEE (10)"
                        result="3.10/4"
                        des="I completed my Secondary Education Examination from Shanti Namuna Secondary School, focusing on the Science Faculty, which strengthened my academic skills and prepared me for higher education and future challenges." />
                   
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
                        title="+2 Science"
                        subTitle="RMC(2019-2021)"
                        result="3.16/4"
                        des="I completed my SLC in Science from Rammani Multiple Campus, where I deepened my knowledge in scientific subjects and laid the foundation for pursuing higher education in Computer Engineering, preparing me for a career in technology and innovation." />
                    <ResumeCard
                        title="Computer Engineering"
                        subTitle="ERC(IOE)(2022-2027)"
                        result="-"
                        des="I completed my SLC in Science from Rammani Multiple Campus, building a foundation for higher education. Currently, I am pursuing a Bachelor's in Computer Engineering at Purwanchal Engineering Campus, developing skills to excel in technology and innovation." />
                </div>
            </div>
        </motion.div>
    )
}

export default Education
