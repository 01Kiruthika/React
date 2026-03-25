import React from 'react'
import '../App.jsx'
import '../App.css'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home.jsx'
import About from '../Pages/About.jsx'
import Skills from '../Pages/Skills.jsx'
import Project from '../Pages/Project.jsx'
import Contact from '../Pages/Contact.jsx'
import MiniProject from '../Pages/MiniProject.jsx'
import Resume from '../Pages/Resume.jsx'

const Main = ({ open, setOpen }) => {
    return (
        <>

            <main>


                <div className="close-btn" onClick={() => setOpen(false)}>
                    <i className="fa fa-times"></i>
                </div>

                <Routes>
                    <Route path='/' element={<Home />}>Home</Route>
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/skills' element={<Skills />}></Route>
                    <Route path='/project' element={<Project />}></Route>
                    <Route path='/miniproject' element={<MiniProject />}></Route>
                    <Route path='/resume' element={<Resume />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                </Routes>
            </main>
        </>

    )
}

export default Main