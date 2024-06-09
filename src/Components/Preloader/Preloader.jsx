import React, { useRef } from "react";
import { gsap } from "gsap";
import "./Preloader.css";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const preloaderWords = [
  "Namaste",
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "سلام",
  "やあ",
  "Guten tag",
  "Hallo",
];

const Preloader = () => {
  const loader = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: 0 });

      // Initial fade-in animation for the loader container
      tl.from(loader.current, { duration: 1, opacity: 0 });

      // Animation for each word
      preloaderWords.forEach((word, index) => {
        // Fade in each word
        tl.from(`#word-${index}`, { duration: 0.4, opacity: 0 });
        // Fade out each word after a delay
        tl.to(`#word-${index}`, { duration: 0.4, opacity: 0, delay: "+=1" });
      });

      // removing the loader container after all words have been shown
      tl.to(loader.current, {
        y: -1000,
        duration: 1,
        
        delay: "+=1",
        ease: "power1.inOut"
      });
    },
    { scope: loader }
  );

  return (
    <div ref={loader} className="loader">
      {preloaderWords.map((word, index) => (
        <div id={`word-${index}`} className="word" key={index}>
          {word}
        </div>
      ))}
    </div>
  );
};

export default Preloader;
