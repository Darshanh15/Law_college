import React from "react";
import "./BoardManagement.scss";
import presidentImg from "../../assets/clints/amma.jpg"; 
import vpImg from "../../assets/clints/Shailesh-Raju.jpeg"; 
import trusteeImg from "../../assets/clints/prasanna v raju.png"; 
import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";
import BoardSection from "./BoardSection";
import BoardSection1 from "./BoardSection1";
import BoardSection2 from "./BoardSection2";
import BoardSection3 from "./BoardSection3";

const boardMembers = [
  {
    name: "Smt. Renuka Raju",
    role: "President",
    quote: "Knowledge is like a garden: if it is not cultivated, it cannot be harvested. ~ Guinean Proverb",
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
    role: "Managing Trustee of Law Wings Educational Trust.",
    description: `A 1994 batch officer, Prasanna V Raju started his career as a sub-inspector, grew in ranks and 
    joined the anti-corruption watchdog since 2006. He was promoted as Lokayukta DySP in 2011. 
    For four years, Raju was part of the STF that helped nab forest brigand Veerappan.
    He has served across Karnataka, was decorated with the CM medal, and worked with United Nations in Sudan, 
    Kosovo, and Afghanistan as police advisor.`,
    img: trusteeImg,
  },
];

const BoardManagement = () => {
  return (


    <>
    
    <SectionTitle2 title="Board of Management" />

    {/* <BoardSection /> */}


    {/* <section className="board-section">
      <h2 className="board-heading">Board of Management</h2>
      <div className="board-grid">
        {boardMembers.map((member, index) => (
          <div className="board-card" key={index}>
            <div className="board-img">
              <img src={member.img} alt={member.name} />
            </div>
            <div className="board-content">
              <h3>{member.name}</h3>
              <span className="role">{member.role}</span>
              {member.quote && <p className="quote">“{member.quote}”</p>}
              <p className="desc">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section> */}


    {/* <BoardSection2 /> */}
    {/* <BoardSection2 /> */}
    <BoardSection3 />
    </>
  );
};

export default BoardManagement;
