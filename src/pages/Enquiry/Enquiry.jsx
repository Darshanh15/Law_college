import React, { useState } from "react";
import "./Enquiry.scss";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // later connect API here
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="enquiry-page">
      <div className="enquiry-container">
        <h2>Enquiry Form</h2>
        <p>Have a question? Please fill out the form below, and we’ll get back to you soon.</p>

        {submitted ? (
          <div className="thank-you">
            <h3>Thank you for contacting us! ✅</h3>
            <p>We will reach out to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="enquiry-form">
            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Subject *</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">Send Enquiry</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Enquiry;
