import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"



function App() {
  

  return (
    <>
    <Routes >
       <Route path='/home' element={<Home />}></Route>
       <Route path='/about' element={<About />}></Route>
       <Route path='/Contact' element={<Contact />}></Route>

    </Routes>
     
    </>
  )
}

export default App
