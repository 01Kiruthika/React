import { useState } from 'react'

import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'
// import { Route, Routes } from 'react-router-dom'

function App() {
   const [open, setOpen] = useState(false);

  return (
    <>
      <div className="Container">

  
        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          <i className={open ? "fa fa-times" : "fa fa-bars"}></i>
        </div>

        
        <Header open={open} setOpen={setOpen}/>


        <Main open={open} setOpen={setOpen}  />

      </div>



    </>
  )
}

export default App
