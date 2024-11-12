import React, { useEffect } from 'react'
import { RxCrossCircled } from "react-icons/rx";

const ModalCard = ({ showModal, project, handleCloseModal }) => {
  useEffect(() => {
    if (showModal) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [showModal])

  if (!showModal || !project) return null

  return (
    <>
      <div className='fixed inset-0 bg-bgModal bg-opacity-80 z-60'>
      </div>

      <div className='fixed  top-28 left-10 rounded-2xl md:top-24 md:left-36 md:w-[80%]  w-[75%] max-h-[80vh]  overflow-y-auto border bg-bgblack900 dark:bg-bgColor bg-opacity-100 z-10 p-4 flex flex-col border-primaryColor shadow-[0_0px_15px_-1px_#02ff02]' >

        <div onClick={handleCloseModal} className='absolute top-0 cursor-pointer right-1'>
          <RxCrossCircled className=' text-5xl text-redColor hover:scale-105 transition duration-200 font-bold' />
        </div>
        <h1 className='text-textblack900 dark:text-textWhite px-2 py-3 text-2xl font-bold tracking-wide'>{project.title}</h1>

        {/* Scroll modal */}

        <div className='md:overflow-y-auto p-5 mt-1 flex flex-col gap-6 '>
          <div>
            <img src={project.image} className='object-cover w-[100%] h-[80%] rounded-2xl shadow-[0_0px_15px_-1px_#02ff02]' />
          </div>
          <h3 className='text-xl font-semibold tracking-wide text-textblack900 dark:text-textWhite' >Language : <span className='text-primaryColor' >{project.language}</span></h3>
          <p className='text-textblack700 dark:text-textColor font-medium text-left '><span className='text-xl font-semibold tracking-wide text-textblack900 dark:text-textWhite'>Description : </span> {project.subtittle}</p>

          <a href={project.url} target='_blank' className='border-primaryColor text- w-max text-center items-center p-1 ' rel="noopener noreferrer" >
            <button 
              className="mt-6 button bg-skillBackground text-white">View Code</button>
          </a>
        </div>

      </div>
    </>
  )
}

export default ModalCard


