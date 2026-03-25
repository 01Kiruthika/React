import React, { useState } from "react";
import "./Contact.css";
import Icons from '../Components/Icons.jsx'

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent");
  };

  return (
    <>

      <h2>Contact <span>Me</span> </h2>

      <div className="contact">

        <div className="form-container">

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <input type="text" name="name" required onChange={handleChange} />
              <label>Your Name</label>
            </div>

            <div className="input-group">
              <input type="email" name="email" required onChange={handleChange} />
              <label>Your Email</label>
            </div>

            <div className="input-group">
              <textarea name="message" required onChange={handleChange}></textarea>
              <label>Your Message</label>
            </div>

            <button type="submit">Send Message</button>

          </form>



        </div>

      </div>
      <div className="iconsget">
        <h3>Get In touch with me</h3>
        <div className="iconsplace">
          <Icons />
        </div>

      </div>
    </>
  );
};

export default Contact;