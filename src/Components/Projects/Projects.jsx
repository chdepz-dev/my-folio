import React,{useRef} from "react";
import "./Projects.css";
import projects from "../../Data/Data";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
const Projects = () => {
  const projectRef = useRef(null)
  useGSAP(() => {
    const elements = projectRef.current.querySelectorAll(".project");
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: projectRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          
        }
    });

    tl.from(elements, {
      y: 100,
        // scale: 1.1,
        opacity: 0,
        duration: 0.6,
        stagger: 0.3,
        ease: "power4.out",
    });

    // Clean up on component unmount
    return () => {
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
        tl.kill();
    };
}, []);

  return (
    <div ref={projectRef} className="projects">
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
                <span>OVERVIEW✍: </span> {project.Description}
              </p>

              <div className="links">
                <h3>Project Links ⬇</h3>
                <div className="btn">
                  <button>
                    {" "}
                    <a href={project.github} target="_blank">
                      Github <i className="fa-brands fa-github"></i>
                    </a>
                  </button>
                  <button>
                    {" "}
                    <a href={project.live} target="_blank">
                      Live link <i className="fa-regular fa-star"></i>
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
