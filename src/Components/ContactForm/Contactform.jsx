import React from "react";
import "./ContactForm.css";
const Contactform = () => {
  return (
    <div className="contact-form">
      <h1>🔰Stay Connected🔰</h1>
      <form action="">
        <label htmlFor="name">
          name: <br />
        </label>
        <input id="name" type="text" placeholder="name" />
        <br />
        <label htmlFor="email">
        Email: <br />
        </label>
        <input id="email" type="text" placeholder="email" />
        <br />
        <label htmlFor="message">
          Message: <br />
        </label>
        <textarea id="message" type="text" placeholder="your message here"  rows="4" cols="50"/>

        <button className="submit-button" type="submit">submit</button>
      </form>
    </div>
  );
};

export default Contactform;
