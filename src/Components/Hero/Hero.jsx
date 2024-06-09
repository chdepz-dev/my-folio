import React, { useRef } from "react";
import "./Hero.css";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.7,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
      fullScreen: { enable: false },
    }),
    []
  );

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
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <div className="left-hero">
          <h1>Hello There, This is</h1>
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
            <button className="btn">Contact</button>
            <button className="btn">Resume</button>
          </div>
        </div>

        <div className="right-hero">
          <div className="hero-img">
            <img
              src="https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/271143730_1339405439814608_6508990784632072882_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jyacXGOX-9IQ7kNvgF7k5NF&_nc_ht=scontent.fktm6-1.fna&oh=00_AYAaSGgSwTY7GIbyM-lgXgeXJo66RCK-hlbcCMxAFfiXew&oe=6667B7FF"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
