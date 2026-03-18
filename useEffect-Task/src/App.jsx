import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState([])

  useEffect(() => {
    let loaddata = async () => {
      let apidata = await axios.get('https://freegoldapi.com/data/latest.json')
      // console.log(apidata.data)
      setCount(apidata.date)
    }
    loaddata()
    console.log(count);

  }, [])

  return (
    <>
      <div className="container">
        <div className='box'>
          <h3>Gold Tracking System</h3>
          <input type="date"
            placeholder='Enter the Date'
          /><br></br>
          <button className='btn'>Submit</button>

          {/* <p>0</p> */}
        </div>


      </div>
    </>
  )
}

export default App
