import React from 'react'
import { StudentDetails } from '../App'
import { useContext } from 'react'


const Final = () => {


  let data = useContext(StudentDetails)
  // console.log(data);



  return (
    <div className='final'>

      {
        data && data.length > 0 ? (

          data.map((ele, index) => (
            <div key={index} className='final-data'>
              <h3>Student  Name : {ele.Name}</h3>
              <h3>Student Email : {ele.email}</h3>
              <h3>Student Phone : {ele.phone}</h3>
            </div>
          ))

        )
          :
          (
            <h3>No Records</h3>
          )
      }


    </div>
  )
}

export default Final
