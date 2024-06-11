import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="contact">
      <div className="contact-wrapper">
        <h1>🔰Stay Connected🔰</h1>
        <p>I'm currently focusing on Front-end Development.</p>
        <p>Reach out anytime to discuss your projects further.</p>
      </div>
      <div className="contact-button">
        <button className="contact">
          <a href="mailto:dipakchaudhary8998@gmail.com">
            Email<i class="fa-regular fa-envelope"></i>
          </a>
        </button>
      </div>
    </div>
  );
}

export default Contact;
