import React from "react";
import "./Projectstyle.css";
import ProjectCard from "./ProjectCard.jsx"
import Fish from '../Images/fish.jpg'
import Saree from '../Images/saree.jpg'
import Floral from '../Images/floral.jpg'
import Library from '../Images/library.jpg'


const Project = () => {
  const projects = [
    {
      id: 1,
      image: Fish ,
      title: "Fish Aquarium",
      description: "A visually appealing aquarium website showcasing different fish species with smooth animations and responsive design.",
      languages: ["HTML", "CSS"],
      link: "https://fish-aquarium-lovat.vercel.app/"
    },
    {
      id: 2,
      image: Saree ,
      title: "SK Saree Boutique",
      description: "An elegant boutique website displaying saree collections with modern UI, product sections, and responsive layout.",
      languages: ["HTML", "CSS", "Bootstrap"],
      link: "https://sk-boutique.vercel.app/"
    },
    {
      id: 3,
      image: Floral,
      title: "Floral Fantasy",
      description: "A creative floral-themed website featuring interactive UI elements, animations, and a vibrant design experience.",
      languages: ["HTML", "CSS", "JavaScript"],
      link: "https://flower-boutique-ecru.vercel.app/"
    },
    {
      id: 4,
      image: Library,
      title: "Library Management",
      description:
        "A dynamic library management system is to add books and students, manage borrowing, track issued books, and show remaining stock in simple interface.",
      languages: ["HTML", "CSS", "JQuery"],
      link: "https://library-management-weld-xi.vercel.app/"
    }
  ];

  return (
    <div className="project-Container">
      <h3>Projects</h3>

      <div className="project-grid">
        {projects.map((item) => (
          // <div className="carddesign" key={item.id}>

          //   <div className="imgBox">
          //     <img src={item.image} alt={item.title} />
          //   </div>

          //   <div className="content">
          //     <h2>{item.title}</h2>
          //     <p>{item.description}</p>
          //     <span className="tag">{item.language}</span>
          //     <span className="tag">{item.language1}</span>
          //     <span className="tag">{item.language2}</span>
          //   </div>

          // </div>

          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Project;