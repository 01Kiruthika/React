import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [details, setDetails] = useState([])
  const [editdetails, setEditdetails] = useState(null)

  let handleme = (e) => {
    // alert("hello")
    debugger;
    e.preventDefault()

    let emp = { name, email, role }

    if (editdetails !== null) {
      debugger;
      let updatedList = [...details]
      updatedList[editdetails] = emp
      setDetails(updatedList)
      setEditdetails(null)
    } else {
      setDetails([...details, emp])
    }

    setName("")
    setEmail("")
    setRole("")
  }



  let updateme = (indx) => {
    // alert("hello")
    debugger;
    let emp = details[indx]
    setName(emp.name)
    setEmail(emp.email)
    setRole(emp.role)
    setEditdetails(indx)
  }

  let deleteme = (indx) => {
    // alert("hello")
    debugger;
    if (window.confirm("Do you want to delete?")) {
      let updated = details.filter((_, i) => i !== indx)
      let b = setDetails(updated)
      console.log(b);

    } else {
      alert("your data is safe")
    }
  }



  return (
    <>
      <div className="container">
        <h3>Employee Details</h3>

        <form className="form" onSubmit={handleme}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Employee Name"
            required
          /><br />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Employee Email"
            required
          /><br />

          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Employee Role"
            required
          /><br />

          <button type='submit'>Submit</button>
        </form>
      </div>

      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {
            details.length > 0 ? (
              details.map((emp, indx) => (
                <tr key={indx}>
                  <td>{indx + 1}</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.role}</td>
                  <td>
                    <button onClick={() => updateme(indx)}>Update</button>
                    <button onClick={() => deleteme(indx)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No records</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  )
}

export default App