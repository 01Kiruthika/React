import React from 'react'
import "./Projectstyle.css";
import ProjectCard from "./ProjectCard.jsx"

const MiniProject = () => {
  const projects = [

   
    {
      id: 2,
      image: "https://picsum.photos/400/250?2",
      title: "About Tamil Nadu Dams",
      description:
        "An interactive web application displaying detailed information about Tamil Nadu dams, including filtering by district and dynamic data rendering using React.",
      languages: ["HTML", "CSS", "React"],
      link: "https://sk-boutique.vercel.app/"
    },
    {
      id: 3,
      image: "https://picsum.photos/400/250?3",
      title: "Voice to Text Converter",
      description:
        "A real-time voice-to-text conversion application that captures speech input and converts it into text using browser speech recognition APIs with a simple UI.",
      languages: ["HTML", "CSS", "React"],
      link: "https://flower-boutique-ecru.vercel.app/"
    }
  ];

  return (
    <div className="project-Container">
      <h3>Mini <span className='letter'>Projects</span></h3>

      <div className="project-grid">
        {projects.map((item) => (

          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default MiniProject
