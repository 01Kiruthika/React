import { useState } from 'react'

import './App.css'
import Container from './components/Container'
import { createContext } from 'react'

export const StudentDetails = createContext()

function App() {

  const [Name, setname] = useState()
  const [email, setemail] = useState()
  const [phone, setphone] = useState()
  const [details, setDetails] = useState([])


  let handleme = (ev) => {
    ev.preventDefault()
    // alert("hi")
    // debugger;

    let stu = { Name, email, phone }
    // console.log(stu);

    setDetails([...details,stu])
    // console.log(setDetails);
   


  }

  // console.log(details)

  return (
    <>
      <div className="container">
        <div className="form">
          <h3>Details</h3>
          <form action="" onSubmit={handleme}>
            <input type="text"
              placeholder='Name'
              onChange={(e) => setname(e.target.value)}
              required />
            <input type="email"
              placeholder='Email'
              onChange={(e) => setemail(e.target.value)}
              required />
            <input type="number"
              placeholder='Phone Number'
              onChange={(e) => setphone(e.target.value)}
              required />

            <button type='submit' >Submit</button>
          </form>
        </div>

        <StudentDetails.Provider value={details}>
        <Container />
        </StudentDetails.Provider>

      </div>

    </>
  )
}

export default App
