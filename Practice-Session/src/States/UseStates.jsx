import React, { useState } from 'react'

const UseStates = () => {

  //It is a Stateless variable

  // let user = 'kalai'

  // let ChangeName = ()=>{
  //   user = "Kiruthika"
  //   console.log(user);

  // }


  //It is a Statefull variable it is called usestate
  const [user, setUser] = useState("Kalai")

  let ChangeName = ()=>{
     setUser("Kiruthika")
  }


  return (
    <>
      <h3>{user}</h3>
      <button onClick={ChangeName}>ChangeName</button>
    </>
  )
}

export default UseStates
