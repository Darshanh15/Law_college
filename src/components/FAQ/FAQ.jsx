import React, { useState } from "react";
import "./FAQ.scss";

const faqs = [
  {
    question: "What courses are offered at the Law College?",
    answer: "We offer LLB (3 Years), BA LLB (5 Years), and LLM programs."
  },
  {
    question: "How can I apply for admission?",
    answer: "You can apply online through our Admission Form or visit the college office."
  },
  {
    question: "What documents are required for admission?",
    answer: "You will need marks cards, transfer certificate, ID proof, and passport-sized photographs."
  },
  {
    question: "Is hostel accommodation available?",
    answer: "Yes, we provide separate hostel facilities for boys and girls with all amenities."
  },
  {
    question: "Does the college provide placement assistance?",
    answer: "Yes, we have a dedicated placement cell to assist students in finding career opportunities."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span>{activeIndex === index ? "−" : "+"}</span>
            </div>
            {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
