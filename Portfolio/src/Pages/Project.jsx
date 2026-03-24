import React from 'react'
import './Projectstyle.css'

const Project = () => {
  const projects = [
    {
      id: 1,
      image: "https://picsum.photos/400/250?1",
      title: "Ambulance Detection System",
      description: "Real-time ambulance detection using OpenCV to reduce traffic delay.",
      language: "Python / OpenCV"
    },
    {
      id: 2,
      image: "https://picsum.photos/400/250?2",
      title: "Hospital Management",
      description: "Web-based system to manage patient records and hospital data.",
      language: "React / Node.js"
    },
    {
      id: 3,
      image: "https://picsum.photos/400/250?3",
      title: "Gold Price Tracker",
      description: "Tracks daily gold prices using API and displays trends.",
      language: "React / API"
    }
  ];
  return (
    <>
      <div className="project-container">
        <h3>Project</h3>
        {projects.map((item) => (
          <div className="card" key={item.id}>

            <div className="imgBox">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <span className="tag">{item.language}</span>
            </div>

          </div>
        ))}
      </div>

    </>

  )
}

export default Project
