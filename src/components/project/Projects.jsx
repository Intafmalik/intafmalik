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
            subtittle: "Build a functional calculator with HTML, CSS, and JavaScript, featuring a user-friendly design and basic arithmetic operations like addition, subtraction, multiplication, and division.",
        },
        {
            id: 2,
            image: clone,
            title: "Netflix Clone",
            language: "HTML, CSS, JS",
            url:"https://github.com/Intafmalik/Netflix-Clone",
            subtittle: "Create a Netflix clone using HTML, CSS, and JavaScript, featuring a sleek UI, responsive design, and dynamic content rendering for an immersive streaming experience."
        },
        {
            id: 3,
            url:"https://github.com/Intafmalik/Netflix-Clone",
            image: quizImg,
            title: "Quiz Game",
            language: "HTML, CSS, JS",
            subtittle: "Develop a quiz app with HTML, CSS, and JavaScript, featuring an interactive UI, dynamic questions, and real-time score tracking for an engaging user experience."
        },
        {
            id: 4,
            url:"https://github.com/Intafmalik/C-project.git",
            image: snakeImg,
            title: "Snake Game",
            language: "C",
            subtittle: "Develop a Snake game using C, featuring a console-based interface with dynamic snake movement, food generation, and collision detection. The game includes multiple life and a user registration system to save high scores and track progress."
        },
        {
            id: 5,
            url :"https://github.com/Intafmalik/OOP-Project.git",
            image: oopProject,
            title: "Student management system",
            language: "C++",
            subtittle: "Create a student details management system using Object-Oriented Programming (OOP) in C++, where student information such as name, roll number, and grades are stored in objects. The system allows for adding, updating, and displaying student details, demonstrating the use of classes, objects, constructors, and methods to manage data efficiently."
        },
        {
            id: 6,
            url :"https://github.com/Intafmalik/Tic-Tac-Toe-.git",
            image: ticTacToe,
            title: "Tic Tac Toe",
            language: "React JS",
            subtittle: "Build a Tic-Tac-Toe game using React and Vite, featuring a responsive user interface, real-time gameplay, and a simple game logic that allows two players to take turns and check for a winner. This project demonstrates React's component-based architecture and Vite's fast development setup for a seamless user experience."
        },
        {
            id: 7,
            url :"https://github.com/Intafmalik/Weather-APP.git",
            image: weatherAPP,
            title: "Weather App",
            language: "React JS ",
            subtittle: "Create a weather app using React, featuring real-time weather updates, user-friendly UI, and integration with a weather API to fetch data such as temperature, humidity, and forecast. This project demonstrates React's state management and asynchronous data fetching capabilities for an interactive and responsive weather experience."
        },
        {
            id: 8,
            url :"https://github.com/Intafmalik/LandingPage.git",
            image: virtualr,
            title: "Virtualr Landing Page",
            language: "React JS ",
            subtittle: "Build a landing page for 'Virtualr' using React and Tailwind CSS, featuring a modern and responsive design with sections for product features, testimonials, and a call-to-action. The page utilizes React's component-based architecture for reusable UI elements and Tailwind's utility-first styling for a clean and customizable layout."
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
                className='w-full md:px-10 px-5 py-4  gap-1 pagediv'
                >

                <h1 className='text-center p-1 text-primaryColor md:font-bold font-semibold mb-1 md:text-4xl  text-2xl'>Projects</h1>

                <div className='grid grid-cols-1 md:grid-cols-3 mb-4 gap-6 px-2 mt-12 ' >
                    {
                        cardItem.map(({ id, image, title, language, subtittle,url }) => (
                            <div className='border borderPrimaryColor rounded-3xl  bg-bgblack100  dark:bg-bgColor px-3 py-2 text-left space-y-2 hover:shadow-shadowlight hover:scale-105 transition-all duration-300 ' key={id}>
                                <div className=' flex items-center w-full h-60  justify-center'>
                                    <img src={image}
                                        className='w-[100%] h-[80%] object-cover rounded-2xl border-1 border-green-300  ' />
                                </div>
                                <h1 className='text-textblack900 dark:text-textWhite text-xl font-bold tracking-wide'>{title}</h1>
                                <h3 className='text-textblack900 dark:text-textWhite text-xl font-semibold' >Language : <span className='text-primaryColor' >{language} </span></h3>
                                <p className='line-clamp-2 text-[0.9rem] text-textblack700 dark:text-textColor w-full font-medium'>{subtittle}</p>

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
        </>
    )
}

export default Projects



