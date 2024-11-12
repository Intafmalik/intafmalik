import React from 'react'
import {aboutImg} from "../imagess/images"

const About = () => {
  return (
    <>
      <div
        id="About"
        className='w-full md:px-10 px-5 bg-bgblack900 border-b-black dark:bg-bgColor border dark:border-b-textColorgray'>
        <div className='py-5'>
         <h1 className='text-center p-1 text-primaryColor md:font-bold font-semibold mb-1 md:text-4xl  text-2xl'>About</h1>
        <div
          className=" flex  md:flex-row flex-col p-1 gap-2 mt-2   ">
          {/*  left box image */}
          <div className='w-full md:w-2/5  '>
            <div className=' flex items-center justify-center p-2' >
              <img src={aboutImg} width={250} alt='about image' className='rounded-2xl object-cover w-[75%] h-[75%] border-[2px] hover:border-primary-color hover:shadow-[0_0px_15px_-1px_#02ff02] brightness-50 hover:brightness-100 focus:brightness-100 active:brightness-100 transition ease-in-out duration-300' />
            </div>
          </div>

          {/* Right Box */}
          <div className='w-full md:w-3/5 px-8 py-3 text-textblack700 dark:text-textColor'>
            <h1 className=' text-2xl font-semibold tracking-wide dark:text-textWhite text-textblack900'><span className='md:text-4xl text-xl font-bold text-primaryColor'>B</span>iograpghy</h1>
            <p className='mt-5 text-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi fuga nam temporibus rem fugiat iusto atque omnis nesciunt, eum facere, distinctio sint exercitationem itaque quaerat? Quae incidunt esse similique molestias.</p>
            <br />
            {/* <br/> */}
            <p className='font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi fuga nam temporibus rem fugiat iusto atque omnis nesciunt, eum facere, distinctio sint exercitationem itaque quaerat? Quae incidunt esse similique molestias.</p>
            <div className='flex md:flex-row flex-col mt-5 gap-3  '>
              <div className='w-full md:w-1/2  flex flex-col items-start space-y-4 px-2 py-1 text-xl'>
                <h2><span className=' text-textblack900 dark:text-textWhite text-xl font-bold tracking-wide '>Name : </span> Intaf Malik</h2>
                <h2><span className=' text-textblack900 dark:text-textWhite text-xl font-bold tracking-wide '>Age : </span> 20</h2>
                <h2><span className=' text-textblack900 dark:text-textWhite text-xl font-bold tracking-wide '>BirthDay : </span>kdjsl</h2>
                <h2><span className=' text-textblack900 dark:text-textWhite text-xl font-bold tracking-wide '>Adderess : </span> Intaf Malik</h2>
              </div>
              <div className='w-full md:w-1/2  flex flex-col items-start space-y-4 px-2 py-1 text-xl'>
                <h2><span className=' text-textblack900 dark:text-textWhite text-xl font-bold tracking-wide '>Phone No : </span> Intaf Malik</h2>
                <h2><span className=' text-textblack900 dark:text-textWhite text-xl font-bold tracking-wide '>Email : </span> Intaf Malik</h2>
                <h2><span className=' text-textblack900 dark:text-textWhite text-xl font-bold tracking-wide '>Profession : </span> Intaf Malik</h2>
                <h2><span className=' text-textblack900 dark:text-textWhite text-xl font-bold tracking-wide '>Name : </span> Intaf Malik</h2>


              </div>
            </div>
            <button
              className="button mt-6"
            >
              Download CV
            </button>
          </div>

        </div>
        </div>
      </div>
    </>
  )
}

export default About
