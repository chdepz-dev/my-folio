import React, {useRef} from 'react'
import "./Allprojects.css"
import Contact from '../Contact/Contact'
import allprojects from '../../Data/allprojects'
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
function Allprojects() {
  const projectRef = useRef(null)
  useGSAP(() => {
    const elements = projectRef.current.querySelectorAll(".allproject");
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
    <div>
       <div ref={projectRef} className="allprojects">
      <h1> 🔰All projects🔰</h1>
      <h5>I am passionate about building projects to refine my Development skills. <br /> Explore this archive to see the diverse range of my work.</h5>
      <div className="allprojects-container">
        {allprojects.map((project, index) => (
          <div className="allproject" key={index}>
            <div className="allproject-img">
              <img src={project.image} alt="" />
            </div>
            <div className="allproject-desc">
              <h2>{project.title}⚡ </h2>
              <p>
                <span>OVERVIEW✍: </span> {project.Description}
              </p>

              <div className="links">
                <h3>Project Links</h3>
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
        <Contact />
    </div>
  )
}

export default Allprojects