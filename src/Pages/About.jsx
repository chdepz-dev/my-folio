import React, { useRef, useEffect } from 'react';
import './css/About.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef();

  useGSAP(() => {
       gsap.to('.about h1 ', {
        x: "-280%",
      
        delay: 3,
        duration: 5,
        scrollTrigger: {
          trigger:'.about',
          scroller: "body",
          // markers: true,
          start: "top 0%", 
          end: "top -100%",    
          scrub: 1,           
          pin: true,         
        },
        
      }, container);
    
  });

  return (
    <>
    <div ref={container} className="about">
      <h1>Aboutme</h1>
   
    <div className="bio">
      <p>I am a Artisian who discoverd passion: <span>Web Development</span> . I love studying to improve my skills. I enjoy working in a multi-culture team and solving problems. </p>
      <p>
      I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love almost all the stacks of <span>web application development</span> and love to make the <span> web </span> more open to the world. My core <span>skill</span> is based on <span>JavaScript</span> and I love to do most of the things using <span>JavaScript</span>. I am available for any kind of job opportunity that suits my skills and interests.
      </p>
    </div>
    </div>
    </>
  );
}

export default About;
