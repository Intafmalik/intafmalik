import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/project/Projects'
import Resume from './components/resume/Resume'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast';
import './App.css'
import Footer from './components/Footer'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

function App() {

  // const router = createBrowserRouter(
  //   [
  //     {
  //        path:"/Home",
  //        element:<Home/>
  //     },
  //     {
  //        path:"/About",
  //        element:<About/>
  //     },
  //     {
  //        path:"/Projects",
  //        element:<Projects/>
  //     },
  //     {
  //        path:"/Resume",
  //        element:<Resume/>
  //     },
  //     {
  //        path:"/Contact",
  //        element:<Contact/>
  //     },
  //     {
  //        path:"/Footer",
  //        element:<Footer/>
  //     },
  //     {
  //       path:"/",
  //       element:<Toaster/>
  //     }
  //   ])


  return (
    <>
      <div>
        <Header />
        <Home />
        <About />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
      <Toaster />

    </>
    // <>
    // <Header/>
    // <Home/>
    // <RouterProvider  router={router} />
    // <Footer/>
    // </>
  )
}

export default App
