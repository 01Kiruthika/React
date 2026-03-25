import { useState } from 'react'

import './App.css'
import UseCallback from './UseCallback.jsx'
// import { useEffect } from 'react'

function App() {
  // const [count, setCount] = useState(0)

  // const [time, setTime] = useState(0)

  // useEffect(()=>{
  //   console.log("Welcome")
  // })

  // useEffect(() => {
  //   console.log("Hello");

  // }, [])

  // useEffect(() => {
  //   console.log("Hello");

  //   let a=0
  //   let x = setInterval(()=>{
  //     // console.log(a+1)
  //   },1000)

  //   return () => {
  //     console.log("Clear");
  //     setCount(0)

  //     clearInterval(x)

  //   }

  // }, [count])

  return (
    <>

    <UseCallback />

      {/* <p>Count:{count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Count me</button>

      <p>Time:{time}</p>
      <button onClick={() => setTime(pev => pev + 1)}>Time me</button> */}

    </>
  )
}

export default App
