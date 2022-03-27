import React from "react";
import Form from "../form/Form";
import './contact.scss'
const Contact = () => {
  return (
    <div id="contact" className="contact">
        <div className="left">
          <h1>I’d love to hear from you</h1>
        </div>
        <div className="right"><Form/></div>
    </div>
  );
};

export default Contact;
