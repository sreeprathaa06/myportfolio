import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send("service_id", "template_id", form, "public_key")
      .then(() => {
        setStatus("Message sent successfully ✨");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus(""), 3000);
      })
      .catch(() => {
        setStatus("Failed to send. Try again!");
      });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>

      <form className="contact-form" onSubmit={sendEmail}>
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="send-btn">
          Send Message
        </button>

        {status && <p className="form-status">{status}</p>}
      </form>
    </div>
  );
}

export default Contact;
