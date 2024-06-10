import React, { useRef, useEffect } from "react";
import "./Education.css";
import tu from "../../assets/tu.jpg"
import janaki from "../../assets/janaki.jpg"
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Education = () => {
    const educationRef = useRef(null);

    useGSAP(() => {
        const elements = educationRef.current.querySelectorAll(".school");
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: educationRef.current,
                start: "top center",
                end: "bottom center",
                scrub: true,
              
            }
        });

        tl.from(elements, {
            y: 100,
            // scale: 1.1,
            opacity: 0,
            duration: 2.4,
            stagger: 0.5,
            ease: "power3.out",
        });

        // Clean up on component unmount
        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, []);
  
    
  return (
    <div ref={educationRef}  className="education">
      <h1>🔰My Education🔰</h1>
      <div className="education-info">
        <div className="school">

          <img src={janaki} alt="" />
          <div className="school-info">
            <h2>Shree Janaki H. Secondary School 🎓 </h2>
            <h3>Year: 2014 🎓 </h3>
            <h3>School leaving certificate [SLC] 🎓</h3>
            <p>Faculty: <span>Primary/Basic Education</span></p>
        
          </div>
        </div>
        <div className="school">
          <img src={janaki} alt="" />
          <div className="school-info">
            <h2>Shree Janaki H. Secondary School 🎓</h2>
            <h3>Year: 2017 🎓</h3>
            <h3>Higher Secondary Education Board (HSEB) 🎓</h3>
            <p>Faculty: <span>Management</span> </p>
          </div>
        </div>
        <div className="school">
          <img src={tu} alt="" />
          <div className="school-info">
            <h2>Tribhuwan University, Nepal 🎓</h2>
            <h3>Year: 2017 - 2023 🎓</h3>
            <h3>Bachelor in Information and Communication Technology Education (BICTE) 🎓</h3>
            <p>Faculty: <span>Computer Science</span>  </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
