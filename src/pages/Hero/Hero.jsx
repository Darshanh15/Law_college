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
        {/* <p>
          Bengaluru Law College focuses on excellence as continuous process and is functioning under the able support of Law wings educational Trust..
        </p> */}
        <p>Bengaluru Law College is committed to excellence as a continuous process and operates under the able guidance of the Law Wings Educational Trust.</p>
        <p>Situated in the heart of the city with excellent accessibility, the college is affiliated with Karnataka State Law University (KSLU) and approved by the Bar Council of India, New Delhi.</p>
        
        {/* <p>The college is located in the heart of the city with easy accessibility. The College is affiliated to Karnataka State Law University (KSLU) and is approved by the Bar Council of India, New Delhi.</p> */}
        {/* <p>The college endeavours to transmit quality legal education. Bengaluru Law College provides an affluent infrastructure with highly qualified and determined faculty. The institution boasts a spacious library with a collection of 15000 books and journals which are updated periodically. Moot Court coaching bestowed by the college, effectively equips the students in enhancing their capability on instituting legal proceeding.</p> */}
        <p>The college strives to deliver quality legal education and offers state-of-the-art infrastructure supported by a team of highly qualified and dedicated faculty. The institution features a spacious library with a collection of over 15,000 books and journals, regularly updated to meet academic needs. Additionally, the college provides Moot Court coaching, effectively equipping students with the practical skills required to navigate legal proceedings.</p>
        {/* <div className="hero-buttons">
          <button className="btn primary">Explore Courses</button>
          <button className="btn secondary">Contact Us</button>
        </div> */}
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="College Campus" />
      </div>
    </section>
  );
};

export default Hero;
