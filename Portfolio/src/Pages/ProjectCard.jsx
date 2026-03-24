import React from "react";

const ProjectCard = ({ item }) => {
  return (
    <>
      <div className="carddesign">

        <div className="imgBox">
          <img src={item.image} alt={item.title} />
          <div className="overlay">
            <a href={item.link} target="_blank" className="demo-btn">
              Live Demo
            </a>
          </div>
        </div>

        <div className="content">
          <h2>{item.title}</h2>
          <p>{item.description}</p>

          {item.languages.map((lang, i) => (
            <span key={i} className="tag">{lang}</span>
          ))}
        </div>

      </div>
    </>

  );
};

export default ProjectCard;