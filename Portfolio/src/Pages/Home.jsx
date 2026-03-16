import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div className='homecontainer'>
      <div className="about-me">
        <div className="my-image">
          <img src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg" alt="my image" />
        </div>
        <div className="about-content">
          <h2>Hello!!I am Kiruthika Sundaram</h2>
          <h2 class="typing">
            <span>MERN Stack Developer</span>
            {/* <span>Programmer</span> */}
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores placeat dicta voluptate autem dignissimos natus perferendis est quaerat nihil, pariatur eveniet eos, inventore ullam. Nostrum doloremque laborum dicta magni eaque.</p>
        </div>

      </div>
    </div>
  )
}

export default Home
