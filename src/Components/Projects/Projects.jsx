import React from "react";
import "./Projects.css";
import projects from "../../Data/Data";

const Projects = () => {
  return (
    <div className="projects">
      <h1> 🔰My projects🔰</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <div className="project-img">
            <img src={project.image} alt="" />

            </div>
            <div className="project-desc">
              <h2>{project.title}⚡ </h2>
              <p>
                <span>OVERVIEW✍ : </span> {project.Description}
              </p>

              <div className="links">
                <h3>Project Links ⬇</h3>
                <div className="btn">
                  <button >
                    {" "}
                    <a href={project.github} target="_blank">
                      Github  <i class="fa-brands fa-square-github"></i>
                    </a>
                  </button>
                  <button >
                    {" "}
                    <a href={project.live} target="_blank">
                      Live link  <i class="fa-regular fa-star"></i>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
