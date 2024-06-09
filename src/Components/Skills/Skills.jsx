import React from "react";
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import js from "../../assets/js.png";
import node from "../../assets/node.png";
import react from "../../assets/react.png";
import mongo from "../../assets/mongo.png";
import express from "../../assets/express.png";
import node2 from "../../assets/node2.png";
import "./Skills.css";


const Skills = () => {

  
  return (
    <div className="skills">
      <div className="frontend">
        <h1> Frontend Technologies</h1>

        <div className="frontend-logos">
          <img src={css} alt="" />
          <img src={html} alt="" />
          <img src={js} alt="" />
          <img src={node} alt="" />
          <img src={react} alt="" />
        </div>

        <div className="backend">
          <h1>Backend Technologies</h1>
          <div className="backend-logos">
            <img src={node2} alt="" />
            <img src={mongo} alt="" />
            <img src={express} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;