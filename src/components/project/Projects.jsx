import React, { useState } from 'react'
import  {calculatorimage,oopProject,quizImg,snakeImg,clone, ticTacToe, weatherAPP, virtualr} from  "../../imagess/images"
import ModalCard from './ModalCard'



const Projects = () => {

    const [showModal, setshowModal] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)

    const cardItem = [
        {
            id: 1,
            image: calculatorimage,
            title: "Calculator",
            language: "HTML, CSS, JS",
            url:"https://github.com/Intafmalik/Calculator",
            subtittle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non  amet consectetur adipisicing elit. Non ipsam veniam ullam magni rerum, vitae laudantium?",
        },
        {
            id: 2,
            image: clone,
            title: "Netflix Clone",
            language: "HTML, CSS, JS",
            url:"https://github.com/Intafmalik/Netflix-Clone",
            subtittle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non  amet consectetur adipisicing elit. Non ipsam veniam ullam magni rerum, vitae laudantium?"
        },
        {
            id: 3,
            url:"https://github.com/Intafmalik/Netflix-Clone",
            image: quizImg,
            title: "Quiz Game",
            language: "HTML, CSS, JS",
            subtittle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non  amet consectetur adipisicing elit. Non ipsam veniam ullam magni rerum, vitae laudantium?"
        },
        {
            id: 4,
            url:"https://github.com/Intafmalik/C-project.git",
            image: snakeImg,
            title: "Snake Game",
            language: "C",
            subtittle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non  amet consectetur adipisicing elit. Non ipsam veniam ullam magni rerum, vitae laudantium?"
        },
        {
            id: 5,
            url :"https://github.com/Intafmalik/OOP-Project.git",
            image: oopProject,
            title: "Student management system",
            language: "C++",
            subtittle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non  amet consectetur adipisicing elit. Non ipsam veniam ullam magni rerum, vitae laudantium?"
        },
        {
            id: 6,
            url :"https://github.com/Intafmalik/Tic-Tac-Toe-.git",
            image: ticTacToe,
            title: "Tic Tac Toe",
            language: "React JS",
            subtittle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non  amet consectetur adipisicing elit. Non ipsam veniam ullam magni rerum, vitae laudantium?"
        },
        {
            id: 7,
            url :"https://github.com/Intafmalik/Weather-APP.git",
            image: weatherAPP,
            title: "Weather App",
            language: "React JS ",
            subtittle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non  amet consectetur adipisicing elit. Non ipsam veniam ullam magni rerum, vitae laudantium?"
        },
        {
            id: 8,
            url :"https://github.com/Intafmalik/LandingPage.git",
            image: virtualr,
            title: "Virtualr Landing Page",
            language: "React JS ",
            subtittle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non  amet consectetur adipisicing elit. Non ipsam veniam ullam magni rerum, vitae laudantium?"
        },
    ]

    const handleShowMore = (project) => {
        setSelectedProject(project)
        setshowModal(true)
    }

    const handleCloseModal = () => {
        setshowModal(false)
        setSelectedProject(null)
    }

    return (
        <>
            <div
                id="Projects"
                className='w-full md:px-10 px-5 py-4  gap-1 bg-bgblack900 dark:bg-bgColor border border-b-textColorgray'
                >

                <h1 className='text-center p-1 text-primaryColor md:font-bold font-semibold mb-1 md:text-4xl  text-2xl'>Projects</h1>

                <div className='grid grid-cols-1 md:grid-cols-3 mb-4 gap-6 mt-12 ' >
                    {
                        cardItem.map(({ id, image, title, language, subtittle,url }) => (
                            <div className='border borderPrimaryColor rounded-3xl hover:shadow-[0_0px_13px_-1px_#02ff02] bg-bgblack100  dark:bg-bgColor px-3 py-2 text-left space-y-2 hover:scale-105 transition-all duration-300 ' key={id}>
                                <div className=' flex items-center w-full h-60  justify-center'>
                                    <img src={image}
                                        style={{ boxShadow: '2px 1px 10px 2px rgba(34, 197, 94, 0.7)' }}
                                        className='w-[100%] h-[80%] object-cover rounded-2xl border-1 shadow-3xl shadow-custom border-green-300  ' />
                                </div>
                                <h1 className='text-textblack900 dark:text-textWhite text-xl font-bold tracking-wide'>{title}</h1>
                                <h3 className='text-textblack900 dark:text-textWhite text-xl font-semibold' >Language : <span className='text-primaryColor' >{language} </span></h3>
                                <p className='line-clamp-2 text-[0.9rem] text-textblack700 dark:text-textColor w-full font-medium'>{subtittle}</p>

                                {/* <button className='mt-3 text-primaryColor w-full h-fit border-2 outline-none text-xl rounded-xl p-1 hover:bg-blue-100'>Show More</button> */}

                                <button
                                    className='bg-skillBackground text-white w-full h-fit rounded-md p-1'

                                    onClick={() => handleShowMore({ id, image, title, subtittle, language ,url})}

                                >
                                    Show More..
                                </button>


                            </div>

                        ))
                    }
                </div>
            </div>
            {/*  Modal Component */}
            <ModalCard project={selectedProject} handleCloseModal={handleCloseModal} showModal={showModal} />
            {/* <hr className='text-textColorgray' /> */}
        </>
    )
}

export default Projects



