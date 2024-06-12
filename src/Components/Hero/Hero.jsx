import React, { useRef } from "react";
import "./Hero.css";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";
import chdepz from "../../assets/chdepz.jpg"
gsap.registerPlugin(useGSAP);

const Hero = () => {

  const container = useRef();
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".left-hero h1", {
        scale: 0,
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        ease: " easein ",
      });

      gsap.from(".hero-img", {
        scale: 0,
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        ease: " easein ",
      });
      gsap.from(".socials i", {
        scale: 0,
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        ease: " easein ",
      });
      gsap.from(".buttons", {
        scale: 0,
        y: 50,
        opacity: 0,
        duration: 2,
        stagger: 0.5,
        ease: " easein ",
      });
    }, container);

    return () => ctx.revert();
  }); // <-- scope is for selector text (optional)

  return (
    <div ref={container} className="container">
      <div className="hero">
        <div className="left-hero">
          <h1>Hello there ! i am ,</h1>
          <h1>
            <span>DIPAK CHAUDHARY.</span>
          </h1>
          <h1>I am a,</h1>
          <h1>
            WEB DEVELOPER ! BASED IN BHARATPUR,NEPAL.
            <span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Animated-Flag-Nepal.gif"
                alt=""
              />{" "}
            </span>
          </h1>

          <div className="socials">
            <a href="">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div className="buttons">
            
              <NavLink to="/contact-form" style={{ textDecoration: "none" }}>
                <button className="btn1">Contact</button>
              </NavLink>
            
            <button className="btn1">Resume</button>
          </div>
        </div>

        <div className="right-hero">
          <div className="hero-img">
            <img
              src={chdepz}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
