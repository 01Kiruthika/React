import { useState } from 'react'
// import './App.css'
// import Index from './Props/Index.jsx'
import UseStates from './States/UseStates.jsx'
import Statecount from './States/Statecount.jsx'
import MainState from './States/MainState.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Index /> */}
    {/* <UseStates /> */}
    {/* <Statecount /> */}
    <MainState />
     
    </>
  )
}

export default App
