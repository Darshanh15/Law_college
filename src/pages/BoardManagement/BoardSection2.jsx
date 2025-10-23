import React, { useState } from "react";
import Modal from "../Modal/Modal"

import "./BoardSection2.scss";
import renukaImg from "../../assets/clints/amma.jpg"; // replace with actual


import presidentImg from "../../assets/clints/amma.jpg"; 
import vpImg from "../../assets/clints/Shailesh-Raju.jpeg"; 
import trusteeImg from "../../assets/clints/prasanna v raju.png";

const boardMembers = [
  {
    name: "Dr. Renuka Raju",
    role: "President",
    quote: "Knowledge is like a garden: if it is not cultivated, it cannot be harvested. ~ Guinean Proverb",
    description: `The institution’s essence lies in imparting knowledge to millions of aspirants who want to make a remarkable growth in the field of legal education and profession.`,
    img: presidentImg,
     p1: 'Knowledge is like a garden: if it is not cultivated, it cannot be harvested. ~ Guinean Proverb',
    p2: 'You know, you teach. You do not know, you learn is what we believe in. Every human is born to learn and will continue to do so over the years to come. Our Institution has attempted the first step in this endeavour.',
    p3: 'We vow to gift a crew of proficient Advocates to the society.',
    s1: 'We vow to gift a crew of proficient Advocates to the society.',
    s2: 'Lorem ipsum dolor sit amet.',
    s3: 'Lorem ipsum dolor sit amet.',
     date: '08',
    yearmonth:'aug 25',
    date1: '07',
    yearmonth1:'Sep 25',
    date2: '06',
    yearmonth2:'nov 25',

  },
  {
    name: "Sri. K Shailesh Raju",
    role: "Vice-President",
    quote: "Knowledge is like a garden: if it is not cultivated, it cannot be harvested. ~ Guinean Proverb",
    description: `A post graduate in literature he started his career in HRD training that catered to students from various streams of education as well as facilitating training for Government officials and Corporates.`,
    p2: 'After 14 years in HRD he also ventured into the construction industry and continues to work in that field.',
    p3: 'He is the Secretary of an NGO that runs a school at sidlaghata and a Nursing college at Kolar in Karnataka.',
    p1: 'He is the Secretary of an NGO that runs a school at sidlaghata and a Nursing college at Kolar in Karnataka.',
    img: vpImg,
    s1: 'Lorem ipsum dolor sit amet.',
    s2: 'Lorem ipsum dolor sit amet.',
    s3: 'Lorem ipsum dolor sit amet.',
     date: '08',
    yearmonth:'aug 25',
    date1: '07',
    yearmonth1:'Sep 25',
    date2: '06',
    yearmonth2:'nov 25',
  },
  {
    name: "Prof. Prasanna V Raju",
    role: "Managing Trustee & Treasurer",
    description: `Sir is a distinguished officer from the 1994 batch, who began his career as a Sub-Inspector and rose steadily through the ranks. Since 2006, he has rendered commendable service in the Anti-Corruption Bureau and was promoted as DySP in the Lokayukta in 2011.`, 
    p1: 'Sir is a distinguished officer from the 1994 batch, who began his career as a Sub-Inspector and rose steadily through the ranks. Since 2006, he has rendered commendable service in the Anti-Corruption Bureau and was promoted as DySP in the Lokayukta in 2011.',
    p2: 'He played a vital role as part of the Special Task Force (STF) that brought down the notorious forest brigand Veerappan and has served in various districts across Karnataka.',
    p3: 'An officer decorated with the Chief Minister’s Medal, Shri Prasanna V. Raju has brought pride to our nation through his international service with the UN peacekeeping forces in Sudan, South Sudan, and Kosovo. He later served as a Police Advisor with the United Nations Development Programme (UNDP) to the Interim Government of Afghanistan.',
    p4: 'Sir also worked as a Legal Advisor and Consultant with the National Investigation Agency (NIA) in Bengaluru. After taking voluntary retirement from the Lokayukta, he followed his passion for teaching. In 2015, he began serving as a Professor at Bengaluru Law College, which later inspired him to take on the role of Managing Trustee of the college.Now, I warmly invite Shri Prasanna V. Raju, Managing Trustee of Law Wings Educational Trust, to deliver the Presidential Address.',
    s1: '',
    s2: '',
    s3: '',
    date: '',
    yearmonth:'',
    date1: '',
    yearmonth1:'',
    date2: '',
    yearmonth2:'',
    img: trusteeImg,
  },
];

const BoardSection2 = () => {

    const [isOpen, setIsOpen] = useState(false);
  return (

    <>
    
<div className="grid-clm">
    {boardMembers.map((member, index) => (
      <section className="board-section">
      <div className="board-container">
        {/* Left Image */}
        <div className="board-left">
          <img src={member.img} alt={member.name} />
          {/* <a href="/" className="download-btn">Click here to Download</a> */}
          {/* <h3>{member.name}</h3> */}
          <span className="role">{member.role}</span>
        </div>

        {/* Profile Middle */}
        <div className="board-middle">
          {/* <h2 className="title">Profile</h2>   */}
          <h3>{member.role} <span>{member.name}</span></h3>
          <p className="quote">
            {member.quote}
          </p>
          <p>
            {member.description}
          </p>
          <p>
            {member.p2}
          </p>
          <p>
            {member.p3}
            {member.p4}
          </p>
          {/* <a href="http://localhost:3000/Law_college" className="read-more">Bio</a> */}
          <a href="#" className="read-more" onClick={(e) => { e.preventDefault(); setIsOpen(true); }}>
        Bio
      </a>
      {/* Modal */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} member={member} />
        </div>

        {/* Right Section (Speeches/News) */}
        {/* <div className="board-right">
          <h2 className="title">{member.role} Speeches</h2>
          <ul className="speeches">
            <li>
              <span className="date">{member.date} <small>{member.yearmonth}</small></span>
              <p>{member.s1}</p>
            </li>
            <li>
              <span className="date">{member.date1}<small>{member.yearmonth1}</small></span>
              <p>{member.s2}</p>
            </li>
            <li>
              <span className="date">{member.date2}<small>{member.yearmonth2}</small></span>
              <p>{member.s3}</p>
            </li>
          </ul>
          <a href="http://localhost:3000/Law_college" className="read-more">› Read More</a>
        </div> */}
      </div>
    </section>
      ))}

        
</div>
    
    </>
  );
};

export default BoardSection2;
