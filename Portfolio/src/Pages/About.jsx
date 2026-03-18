import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className='about'>
      <h3>Know Me More</h3>
      <p>Who am I?</p>
      <div className="box">
        <div className="aboutme">
          <p>I am Kiruthika Sundaram, a passionate and dedicated Computer Science student with a strong interest in MERN Stack Development. I enjoy building modern and responsive web applications using MongoDB, Express.js, React, and Node.js.
          </p>

          <p>
            I am a quick learner and always eager to explore new tools and technologies in web development. My goal is to become a skilled MERN Stack Developer and build scalable and impactful web applications.</p>
        </div>

      </div>

      <div className="edu-container">
        <h3>Education</h3>
        <div className="edu-box">
          <div className="card card1">
            <p><strong>B.Sc Computer Science</strong></p>
            <p>Bishop Heber College</p>
            <p>2022 to 2025</p>
          </div>
          <div className="card card2">
            <p><strong>B.Sc Computer Science</strong></p>
            <p>Bishop Heber College</p>
            <p>2022 to 2025</p>
          </div>
           <div className="card card3">
            <p><strong>B.Sc Computer Science</strong></p>
            <p>Bishop Heber College</p>
            <p>2022 to 2025</p>
          </div>
        </div>
       
      </div>
    </div>
  )

}

export default About
