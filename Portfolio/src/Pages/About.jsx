import React from 'react'
import './About.css'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className='about'>
      <h3>About <span className='colorme'>Me</span></h3>
      <div className="box">
        <div className="aboutme">
          <div className="personal">

            <div className="info-grid">

              <div className="info-row">
                <span className="label">Name</span>
                <span className="colon">:</span>
                <span className="value">Kiruthika Sundaram</span>
              </div>

              <div className="info-row">
                <span className="label">Date of Birth</span>
                <span className="colon">:</span>
                <span className="value">01/11/2004</span>
              </div>

              <div className="info-row">
                <span className="label">Age</span>
                <span className="colon">:</span>
                <span className="value">21</span>
              </div>

              <div className="info-row">
                <span className="label">Nationality</span>
                <span className="colon">:</span>
                <span className="value">Indian</span>
              </div>

              <div className="info-row">
                <span className="label">Location</span>
                <span className="colon">:</span>
                <span className="value">Karur, Tamil Nadu</span>
              </div>

              <div className="info-row">
                <span className="label">Phone Number</span>
                <span className="colon">:</span>
                <span className="value">9159620313</span>
              </div>

              <div className="info-row">
                <span className="label">Email</span>
                <span className="colon">:</span>
                <span className="value">kiruthikasundaram2004@gmail.com</span>
              </div>

              <div className="info-row">
                <span className="label">Language</span>
                <span className="colon">:</span>
                <span className="value">Tamil, English, Telugu</span>
              </div>

            </div>

          </div>
          <div className="cv-button">
            <Link to="/kiruthika_resume.pdf" target='_blank' download>
              Download CV<i class="fa fa-download" aria-hidden="true"></i></Link>
          </div>
          {/* <p>I am Kiruthika Sundaram, a passionate and dedicated Computer Science student with a strong interest in MERN Stack Development. I enjoy building modern and responsive web applications using MongoDB, Express.js, React, and Node.js.
          </p> */}

          {/* <p>
            I am a quick learner and always eager to explore new tools and technologies in web development. My goal is to become a skilled MERN Stack Developer and build scalable and impactful web applications.</p> */}
        </div>

      </div>

      <div className="edu-container">
        <h3><span>Edu</span>cation</h3>
        <div className="edu-box">
          <div className="cards card1">
            <p><strong>B.Sc Computer Science</strong></p>
            <p>Bishop Heber College</p>
            <p>2022 to 2025</p>
          </div>
          <div className="cards card2">
            <p><strong>HSC</strong></p>
            <p>C.S.I Methodist Girls Hr Sec School</p>
            <p>2021 to 2022</p>
          </div>
          <div className="cards card3">
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
