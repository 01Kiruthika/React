import React from 'react'
import './Skills.css'
import html from '../Images/html.png'
import css from '../Images/css.png'
import boot from '../Images/Bootstrap-icon.png'
import js from '../Images/JavaScript-logo.png'
import mdb from '../Images/MongoDB.png'
import react from '../Images/React.png'
import node from '../Images/Node.png'
import ex from '../Images/express.png'
import git from '../Images/git.png'
import vs from '../Images/VS_Code.png'
import vercel from '../Images/vercel.png'

const Skills = () => {
  return (
    <div className="skills-section">

      <h2>Skills</h2>
      <div className="skills-container">

        <div className="tilt-card">
          <img src={html} alt="HTML" />
          <h3>HTML</h3>
        </div>

        <div className="tilt-card">
          <img src={css} alt="HTML" />
          <h3>CSS</h3>
        </div>

        <div className="tilt-card">
          <img src={js} alt="HTML" />
          <h3>JavaScript</h3>
        </div>

        <div className="tilt-card">
          <img src={boot} alt="HTML" />
          <h3>BootStrap</h3>
        </div>

        <div className="tilt-card">
          <img src={node} alt="HTML" />
          <h3>Node</h3>
        </div>

        <div className="tilt-card">
          <img src={mdb} alt="HTML" />
          <h3>MongoDB</h3>
        </div>

        <div className="tilt-card">
          <img src={react} alt="HTML" />
          <h3>React</h3>
        </div>


        <div className="tilt-card">
          <img src={ex} alt="HTML" />
          <h3>Express</h3>
        </div>

      </div>


      <h2>Tools</h2>
      <div className="skills-container">
        <div className="tilt-card">
          <img src={git} alt="HTML" />
          <h3>Github</h3>
        </div>

        <div className="tilt-card">
          <img src={vercel} alt="HTML" />
          <h3>Vercel</h3>
        </div>

        <div className="tilt-card">
          <img src={vs} alt="HTML" />
          <h3>VS Code</h3>
        </div>


      </div>

    </div>
  )
}

export default Skills
