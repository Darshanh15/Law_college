import React from 'react'
import "./Contact.scss";

function Contact1() {
  return (
    <>
    <div className="contact-page">
      {/* Section Title with Fixed Logo */}

      <div className="contact-content">
        {/* Left Side - Info */}
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>
            Feel free to reach out to us for any admissions, courses,
            or general inquiries. We’ll get back to you as soon as possible.
          </p>

          <ul>
            <li><strong>Phone:</strong> +91 86182 35882</li>
            <li><strong>Email:</strong> bangalorelawclg@gmail.com</li>
            <li><strong>Address:</strong> 123, Main Road, Bangalore, India</li>
          </ul>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>  
      </div>
    </div>
    
    </>
  )
}

export default Contact1