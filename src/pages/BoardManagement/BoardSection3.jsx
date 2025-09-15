import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./BoardSection3.scss";

import presidentImg from "../../assets/clints/amma.jpg"; 
import vpImg from "../../assets/clints/Shailesh-Raju.jpeg"; 
import trusteeImg from "../../assets/clints/prasanna v raju.png";

const boardMembers = [
  {
    name: "Dr. Renuka Raju",
    role: "President",
    quote: "Knowledge is like a garden: if it is not cultivated, it cannot be harvested.",
    description: "The institution’s essence lies in imparting knowledge to millions of aspirants who want to make a remarkable growth in the field of legal education and profession",
    p1: "You know, you teach. You do not know, you learn is what we believe in. Every human is born to learn and will continue to do so over the years to come. Our Institution has attempted the first step in this endeavour.",
    p2: "We vow to gift a crew of proficient Advocates to the society.",
    p3: "“Bangalore Law College is dedicated to nurturing future legal professionals with excellence in education and ethics. We empower students with knowledge, discipline, and practical skills to excel in the field of law.”",
    img: presidentImg,
  },
  {
    name: "Sri. K Shailesh Raju",
    role: "Vice-President",
    quote:"Education is the most powerful weapon which you can use to change the world",
    description: "A post graduate in literature he started his career in HRD training that catered to students from various streams of education as well as facilitating training for Government officials and Corporates.",
    p1: "After 14 years in HRD he also ventured into the construction industry and continues to work in that field.",
    p2: "He is the Secretary of an NGO that runs a school at sidlaghata and a Nursing college at Kolar in Karnataka.",
    p3: "Bangalore Law College is dedicated to nurturing future legal professionals with excellence in education and ethics. We empower students with knowledge, discipline, and practical skills to excel in the field of law. Our mission is to create responsible leaders who uphold justice and contribute to society.",
    img: vpImg,
  },
  {
    name: "Prof. Prasanna V Raju",
    role: "Managing Trustee & Treasurer",
    quote: "An investment in knowledge pays the best interest.",
    description: "A 1994 batch officer, Prasanna V Raju started his career as a sub-inspector, grew in ranks and joined the anti-corruption watchdog since 2006.",
    p1: "Sir is a distinguished officer from the 1994 batch, who began his career as a Sub-Inspector and rose steadily through the ranks. Since 2006, he has rendered commendable service in the Anti-Corruption Bureau and was promoted as DySP in the Lokayukta in 2011.",
    p2: "He played a vital role as part of the Special Task Force (STF) that brought down the notorious forest brigand Veerappan and has served in various districts across Karnataka.",
    p3: "Bangalore Law College is dedicated to nurturing future legal professionals with excellence in education and ethics. We empower students with knowledge, discipline, and practical skills to excel in the field of law. Our mission is to create responsible leaders who uphold justice and contribute to society. With a student-centric approach, we strive to inspire lifelong learning and professional growth.",
    p4: "An officer decorated with the Chief Minister’s Medal, Shri Prasanna V. Raju has brought pride to our nation through his international service with the UN peacekeeping forces in Sudan, South Sudan, and Kosovo. He later served as a Police Advisor with the United Nations Development Programme (UNDP) to the Interim Government of Afghanistan.Sir also worked as a Legal Advisor and Consultant with the National Investigation Agency (NIA) in Bengaluru. After taking voluntary retirement from the Lokayukta, he followed his passion for teaching. In 2015, he began serving as a Professor at Bengaluru Law College, which later inspired him to take on the role of Managing Trustee of the college",
    img: trusteeImg,
  },
];

const BoardSection3 = () => {
  const [activeMember, setActiveMember] = useState(null);

  return (
    <>
      <div className="grid-clm">
        {boardMembers.map((member, index) => (
          <section className="board-section" key={index}>
            <div className="board-container">
              {/* Left Image */}
              <div className="board-left">
                <img src={member.img} alt={member.name} />
                <h3>{member.name}</h3>
                <span className="role">{member.role}</span>
              </div>

              {/* Middle Section */}
              <div className="board-middle">
                <h2 className="title">Profile</h2>
                <h3>
                  {member.role} <span>{member.name}</span>
                </h3>
                <p className="quote">“{member.quote}”</p>
                <p>{member.p3}</p>

                <a
                  className="read-more"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveMember(member);
                  }}
                >
                  Bio..
                </a>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Modal */}
      {activeMember && (
        <Modal
          isOpen={!!activeMember}
          onClose={() => setActiveMember(null)}
          member={activeMember}
        />
      )}
    </>
  );
};

export default BoardSection3;
