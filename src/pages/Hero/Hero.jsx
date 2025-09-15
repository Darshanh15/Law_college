import React from "react";
import "./Hero.scss";
import heroImg from "../../assets/home/main.jpg"; // 🎓 Replace with your college image

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Welcome to <span>Law College</span>
        </h1>
        <p>
          Bengaluru Law College focuses on excellence as continuous process and is functioning under the able support of Law wings educational Trust..
        </p>
        <p>The college is located in the heart of the city with easy accessibility. The College is affiliated to Karnataka State Law University (KSLU) and is approved by the Bar Council of India, New Delhi.</p>
        <p>The college endeavours to transmit quality legal education. Bengaluru Law College provides an affluent infrastructure with highly qualified and determined faculty. The institution boasts a spacious library with a collection of 15000 books and journals which are updated periodically. Moot Court coaching bestowed by the college, effectively equips the students in enhancing their capability on instituting legal proceeding.</p>
        <div className="hero-buttons">
          <button className="btn primary">Explore Courses</button>
          <button className="btn secondary">Contact Us</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="College Campus" />
      </div>
    </section>
  );
};

export default Hero;
