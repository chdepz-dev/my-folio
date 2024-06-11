import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const Contactform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send("service_x2bqodj", "template_j0gl53b", templateParams, "q8aYhheZ6h_cxgw_K")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("There was an error sending the message.");
      });
  };

  return (
    <div className="contact-form">
      <h1>🔰Stay Connected🔰</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name: <br />
        </label>
        <input
          id="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">
          Email: <br />
        </label>
        <input
          id="email"
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="message">
          Message: <br />
        </label>
        <textarea
          id="message"
          type="text"
          placeholder="Your message here"
          rows="4"
          cols="50"
          value={formData.message}
          onChange={handleChange}
        />
        <br />
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contactform;
