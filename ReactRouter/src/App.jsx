import Header from './Components/Header.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Shop from './Components/Shop.jsx'
import Contact from './Components/Contact.jsx'

import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/Shop' element={<Shop />}></Route>

      </Routes>

      
    </>
  )
}

export default App
