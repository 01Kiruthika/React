import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className='about'>
      <h3>About Me</h3>
      <div className="box">
        <div className="aboutme">
          <div className="personal">

            <div className="personal-left">
              <h3>Personal Infos</h3>
              <h4><strong>Name:</strong>Kiruthika Sundaram</h4>
              <h4><strong>Age:</strong>21</h4>
              <h4><strong>Location:</strong>Karur,Tamil Nadu</h4>
              <h4><strong>Email:</strong>kiruthikasundaram2004@gmail.com</h4>
            </div>
            <div className="personal-right">
              <h4></h4>
              <h4><strong>Date of Birth:</strong>01/11/2004</h4>
              <h4><strong>Nationality:</strong>Indian</h4>
              <h4><strong>Phone Number:</strong>9159620313</h4>
              <h4><strong>Language:</strong>Tamil,English,Telugu</h4>
            </div>

            <div className="cv-button">
                   <button>Download CV<i class="fa fa-download" aria-hidden="true"></i></button>
            </div>

          </div>
          {/* <p>I am Kiruthika Sundaram, a passionate and dedicated Computer Science student with a strong interest in MERN Stack Development. I enjoy building modern and responsive web applications using MongoDB, Express.js, React, and Node.js.
          </p> */}

          {/* <p>
            I am a quick learner and always eager to explore new tools and technologies in web development. My goal is to become a skilled MERN Stack Developer and build scalable and impactful web applications.</p> */}
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
            <p><strong>HSC</strong></p>
            <p>C.S.I Methodist Girls Hr Sec School</p>
            <p>2021 to 2022</p>
          </div>
          <div className="card card3">
            <p><strong>SSLC</strong></p>
            <p>C.S.I Methodist Girls Hr Sec School</p>
            <p>2019 to 2020</p>
          </div>
        </div>

      </div>
    </div>
  )

}

export default About
