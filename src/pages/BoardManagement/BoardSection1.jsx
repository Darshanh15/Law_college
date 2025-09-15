import React from "react";
import "./BoardSection1.scss";
import renukaImg from "../../assets/clints/amma.jpg";

import presidentImg from "../../assets/clints/amma.jpg";
import vpImg from "../../assets/clints/Shailesh-Raju.jpeg";
import trusteeImg from "../../assets/clints/prasanna v raju.png";

const boardMembers = [
  {
    name: "Smt. Renuka Raju",
    role: "President",
    quote:
      "Knowledge is like a garden: if it is not cultivated, it cannot be harvested. ~ Guinean Proverb",
    description: `The institution’s essence lies in imparting knowledge to millions of aspirants who want to make 
    a remarkable growth in the field of legal education and profession.
    You know, you teach. You do not know, you learn is what we believe in. 
    Every human is born to learn and will continue to do so over the years to come. 
    Our Institution has attempted the first step in this endeavour.
    We vow to gift a crew of proficient Advocates to the society.`,
    img: presidentImg,
  },
  {
    name: "Sri. K Shailesh Raju",
    role: "Vice-President",
    description: `A post graduate in literature he started his career in HRD training that catered to students from 
    various streams of education as well as facilitating training for Government officials and Corporates.
    After 14 years in HRD he also ventured into the construction industry and continues to work in that field.
    He is the Secretary of an NGO that runs a school at Sidlaghata and a Nursing college at Kolar in Karnataka.`,
    img: vpImg,
  },
  {
    name: "Prof. Prasanna V Raju",
    role: "Managing Trustee & Treasurer",
    description: `A 1994 batch officer, Prasanna V Raju started his career as a sub-inspector, grew in ranks and 
    joined the anti-corruption watchdog since 2006. He was promoted as Lokayukta DySP in 2011. 
    For four years, Raju was part of the STF that helped nab forest brigand Veerappan.
    He has served across Karnataka, was decorated with the CM medal, and worked with United Nations in Sudan, 
    Kosovo, and Afghanistan as police advisor.`,
    img: trusteeImg,
  },
];

const BoardSection = () => {
  return (

    <>
    <section className="board-section">
      <div className="board-container">
        {/* Left Image */}
        <div className="board-left">
          <img src={renukaImg} alt="Smt. Renuka Raju" />
          <h3>Smt. Renuka Raju</h3>
          <span className="role">Hon’ble President</span>
        </div>

        {/* Profile Middle */}
        <div className="board-middle">
          <h2 className="title">Profile</h2>
          <h3>
            Hon’ble President, <span>Smt. Renuka Raju</span>
          </h3>
          <p className="quote">
            “Knowledge is like a garden: if it is not cultivated, it cannot be
            harvested.”
          </p>
          <p>
            The institution’s essence lies in imparting knowledge to millions of
            aspirants who want to make a remarkable growth in the field of legal
            education and profession.
          </p>
          <p>
            You know, you teach. You do not know, you learn is what we believe
            in. Every human is born to learn and will continue to do so over the
            years to come. Our Institution has attempted the first step in this
            endeavour.
          </p>
          <a href="/" className="read-more">
            › Read More
          </a>
        </div>

        {/* Right Section (Speeches/News) */}
        <div className="board-right">
          <h2 className="title">President's Speeches</h2>
          <ul className="speeches">
            <li>
              <span className="date">
                08 <small>Sep 25</small>
              </span>
              <p>Speech at Platinum Jubilee celebration (Hindi)</p>
            </li>
            <li>
              <span className="date">
                05 <small>Sep 25</small>
              </span>
              <p>Teacher’s Day address at National Awards ceremony</p>
            </li>
            <li>
              <span className="date">
                03 <small>Sep 25</small>
              </span>
              <p>Convocation ceremony of Central University</p>
            </li>
          </ul>
          <a href="/" className="read-more">
            › Read More
          </a>
        </div>
      </div>

      
    </section>

{/* Board Members Grid */}
      <div className="board-members-grid">
        {boardMembers.map((member, index) => (
          <div className="member-card" key={index}>
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <span className="role">{member.role}</span>
            {member.quote && <p className="quote">“{member.quote}”</p>}
            <p className="description">{member.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default BoardSection;
