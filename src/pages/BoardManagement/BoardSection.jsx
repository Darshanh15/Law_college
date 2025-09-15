import React from "react";
import "./BoardSection.scss";
import renukaImg from "../../assets/clints/amma.jpg"; // replace with actual


const BoardSection = () => {
  return (

    <>
    
      <section className="board-section">
      <div className="board-container">
        {/* Left Image */}
        <div className="board-left">
          <img src={renukaImg} alt="Smt. Renuka Raju" />
          {/* <a href="/" className="download-btn">Click here to Download</a> */}
          <h3>Smt. Renuka Raju</h3>
          <span className="role">Hon’ble President,</span>
        </div>

        {/* Profile Middle */}
        <div className="board-middle">
          <h2 className="title">Profile</h2>
          <h3>Hon’ble President, <span>Smt. Renuka Raju</span></h3>
          <p className="quote">
            “Knowledge is like a garden: if it is not cultivated, it cannot be harvested.”
          </p>
          <p>
            The institution’s essence lies in imparting knowledge to millions of aspirants
            who want to make a remarkable growth in the field of legal education and profession.
          </p>
          <p>
            You know, you teach. You do not know, you learn is what we believe in. 
            Every human is born to learn and will continue to do so over the years to come.
            Our Institution has attempted the first step in this endeavour.
          </p>
          <a href="/" className="read-more">› Read More</a>
        </div>

        {/* Right Section (Speeches/News) */}
        <div className="board-right">
          <h2 className="title">President's Speeches</h2>
          <ul className="speeches">
            <li>
              <span className="date">08 <small>Sep 25</small></span>
              <p>Speech at Platinum Jubilee celebration (Hindi)</p>
            </li>
            <li>
              <span className="date">05 <small>Sep 25</small></span>
              <p>Teacher’s Day address at National Awards ceremony</p>
            </li>
            <li>
              <span className="date">03 <small>Sep 25</small></span>
              <p>Convocation ceremony of Central University</p>
            </li>
          </ul>
          <a href="/" className="read-more">› Read More</a>
        </div>
      </div>
    </section>

  
    
    </>
  );
};

export default BoardSection;
