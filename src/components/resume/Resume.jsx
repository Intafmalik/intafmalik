import React, { useState } from 'react';
import Experience from './Experience';
import Education from './Education';
import Skill from './Skill';
// import Achivements from './Achivements';
import Services from './Services';

const Resume = () => {
  const [education, setEducation] = useState(true);
  const [experience, setExperience] = useState(false);
  const [skill, setSkill] = useState(false);
  const [services, setServices] = useState(false)
  // const [achivements, setAchivements] = useState(false);


  return (
    <>
    <div
      id="Resume"
      className='w-full md:px-10 px-5 py-4 dark:bg-bgColor border bg-bgblack900 dark:border-b-textColorgray border-b-black'
    >
      <div className='flex justify-center items-center text-center'>
        <h1 className='text-4xl md:text-4xl text-textblack900 dark:text-textWhite font-bold tracking-wide'>
          My <span className='text-primaryColor'>Resume</span>
        </h1>
      </div>
      <div className='mt-6 '>
        <ul className='w-full grid grid-cols-1 md:grid-cols-4'>
          <li
            onClick={() => {
              setEducation(true);
              setSkill(false);
              // setAchivements(false);
              setServices(false);
              setExperience(false);
            }}
            className={`${education ? " borderPrimaryColor rounded-xl" : "border-none"} resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() => {
              setEducation(false);
              setSkill(true);
              // setAchivements(false);
              setServices(false);
              setExperience(false);
            }}
            className={`${skill ? "  borderPrimaryColor rounded-xl" : "border-none"} resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() => {
              setEducation(false);
              setSkill(false);
              // setAchivements(false);
              setServices(false);
              setExperience(true);
            }}
            className={`${experience ? " borderPrimaryColor rounded-xl" : "border-none"} resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() => {
              setEducation(false);
              setSkill(false);
              setServices(true);
              // setAchivements(true);
              setExperience(false);
            }}
            className={`${services ? " borderPrimaryColor rounded-xl" : "border-none"} resumeLi`}
          >
            My Services
          </li>
        </ul>
      </div>

      {/* Conditional Rendering for Content */}
      {education && <Education />}
      {experience && <Experience />}
      {skill && <Skill />}
      {services && <Services />}
      {/* {achivements && <Achivements />} */}
    </div>
    <hr className='text-textColorgray'/>
    </>
  );
};

export default Resume;

