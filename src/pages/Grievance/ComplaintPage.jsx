import React, { useState } from "react";
import "./ComplaintPage.scss";
import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";

const ComplaintPage = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:bangalorelawcollege6@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Name: ${name}\n\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
    <SectionTitle2 title="Complaint" />
    
    <div className="complaint-page">
      <h1 className="page-title">Complaint / Feedback</h1>
      <p className="description">
        Have a complaint or feedback? Fill out the form below and we will respond promptly.
      </p>
      <form className="complaint-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            required
          />
        </label>
        <label>
          Subject
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Complaint subject"
            required
          />
        </label>
        <label>
          Message
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your complaint or feedback here..."
            required
          />
        </label>
        <button type="submit">Send Complaint</button>
      </form>
    </div>
    </>
  );
};

export default ComplaintPage;
