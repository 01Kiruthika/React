import { useState } from 'react'
import './App.css'

function App() {
  const [employee, setEmployee] = useState({
    empname: "",
    salary: 0,
    email: "",
    phone: ""

  })

  const [employeeArray, setEmployeeArray] = useState([
    
  ])

  // console.log(employee);
  let handleSubmit = (e) => {
    // alert("hi")
    e.preventDefault()
    console.log(employee);
    setEmployeeArray([...employeeArray, employee])
    setEmployee({
      empname: "",
      salary: 0,
      email: "",
      phone: ""

    })

  }


  return (
    <>
      <form action="" onSubmit={handleSubmit}>


        <input type="text"


          value={employee.empname}
          onChange={(e) => setEmployee({ ...employee, empname: e.target.value })}

          placeholder='Employee Name'

        /><br />

        <input type='text'
          value={employee.salary}
          onChange={(e) => setEmployee({ ...employee, salary: Number(e.target.value) })}

          placeholder='Salary'
        /><br />

        <input type='text'

          value={employee.email}

          onChange={(e) => setEmployee({ ...employee, email: e.target.value })}

          placeholder='Email'
        /><br />

        <input type='text'

          value={employee.phone}

          onChange={(e) => setEmployee({ ...employee, phone: e.target.value })}

          placeholder='Phone Number'
        /><br />

        <button type='submit'>Submit</button>

      </form>
    </>
  )
}

export default App
