import React, { useRef } from "react";
import emailjs from "emailjs-com";

import "./form.scss";
const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_2mawbmg',
        "template_dk8khsi",
        form.current,
        process.env.REACT_APP_EMAIL_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset()
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form">
      <h1>Contact</h1>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label htmlFor="" name="name">
          Name
        </label>
        <input type="text" placeholder="Enter your Name" name="name" />
        <label htmlFor="" name="email">
          Email
        </label>
        <input type="text" placeholder="Enter your Email" name="email" />
        <label htmlFor="">Message</label>
        <input type="text" name="message" placeholder="Enter your Message" />
        <div className="footer-container">
          <input type="submit" placeholder="" value="Submit →" />
        </div>
      </form>
    </div>
  );
};

export default Form;
