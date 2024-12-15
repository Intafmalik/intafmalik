import React from 'react'
import { Link } from 'react-scroll'
import { aboutImg } from "../imagess/images"

const About = () => {
    return (
        <>
            <div
                id="About"
                className='w-full md:px-10 px-5 pagediv '>
                <div className='py-5'>
                    <h1 className='text-center p-1 text-primaryColor md:font-bold font-semibold mb-1 md:text-4xl  text-2xl'>About</h1>
                    <div
                        className=" flex  md:flex-row flex-col p-1 gap-2 mt-2   ">
                        {/*  left box image */}
                        <div className='w-full md:w-2/5  '>
                            <div className=' flex items-center justify-center p-2' >
                                <img src={aboutImg} width={250} alt='about image'
                                 className={`rounded-2xl object-cover w-[75%] h-[75%] border hover:border-primary-color hover:shadow-[0_0px_15px_-1px_var(--primary-color)] brightness-50 hover:brightness-100 focus:brightness-100 active:brightness-100 transition ease-in-out duration-300`} />
                            </div>
                        </div>

                        {/* Right Box */}
                        <div className='w-full md:w-3/5 px-8 py-3 text-textblack700 dark:text-textColor'>
                            <h1 className=' text-2xl font-semibold tracking-wider dark:text-textWhite text-textblack900'><span className='md:text-4xl text-xl font-bold text-primaryColor'>B</span>iograpghy</h1>
                            <p className='mt-5 text-left'>Hi, I'm [Your Name], a passionate web developer and programmer specializing in crafting efficient, optimized, and user-friendly solutions. With a strong focus on front-end development, I build responsive and visually appealing web applications designed to deliver exceptional user experiences. My goal is to combine technical expertise with creativity to create meaningful and impactful digital solutions.</p>
                            <br />
                            {/* <br/> */}
                            <p className='font-medium'>Beyond coding, I thrive on collaboration—whether it's working closely with clients to bring their ideas to life or teaming up with professionals to tackle challenging projects. I believe in exceeding expectations and delivering results that stand out. Let’s connect and create something amazing together!</p>
                            <div className='flex md:flex-row flex-col mt-5 gap-3  '>
                                <div className='w-full md:w-1/2  flex flex-col items-start space-y-4 px-2 py-1 text-xl'>
                                    <h2><span className=' text-textblack900 dark:text-textWhite text-xl font-bold tracking-wide '>Name : </span>Intaf Malik</h2>
                                    <h2><span className=' text-textblack900 dark:text-textWhite text-xl font-bold tracking-wide '>Age : </span> 20</h2>
                                    <h2><span className=' text-textblack900 dark:text-textWhite text-xl font-bold tracking-wide '>BirthDay : </span>Oct 22</h2>
                                    <h2><span className=' text-textblack900 dark:text-textWhite text-xl font-bold tracking-wide '>Adderess : </span>Butwal</h2>
                                </div>
                                <div className='w-full md:w-1/2  flex flex-col items-start space-y-4 px-2 py-1 text-xl'>
                                    <h2><span className=' text-textblack900 dark:text-textWhite text-xl font-bold tracking-wide '>Phone No : </span>9816427928</h2>
                                    <h2><span className=' text-textblack900 dark:text-textWhite text-xl font-bold tracking-wide '>Email : </span>intafmalik731@gmail.com</h2>
                                    <h2><span className=' text-textblack900 dark:text-textWhite text-xl font-bold tracking-wide '>Profession : </span>Students</h2>
                                    <h2><span className=' text-textblack900 dark:text-textWhite text-xl font-bold tracking-wide '>Service : </span>Front-End Developer</h2>
                                </div>
                            </div>
                            <Link
                                activeClass="text-primaryColor"
                                to={"Contact"}
                                spy="true"
                                offset={-70}
                                onSetActive={(id) => console.log(`${id} is active`)}
                                smooth={true}
                                duration={400}
                            // delay={200}
                            >
                                <button
                                    className="button mt-6">
                                    Contact Me
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About