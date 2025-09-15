import React from "react";
import "./GoverningCouncil.scss";
import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";

import principal from "../../assets/collage_img/principal.jpeg";
import Subramanya from "../../assets/clints/Subramanya.jpg";
import Raghavendra from "../../assets/clints/Raghavendra Auradkar IPS.jpeg";
import Patil from "../../assets/clints/C S Patil.jpeg";
import Ranjit from "../../assets/clints/Ranjit Shankar Varma.jpeg";
import Abhyuday from "../../assets/clints/Abhyuday Anand IRS.jpeg";
import Chandrashekar from "../../assets/clints/Chandrashekar.jpeg";
import Anil from "../../assets/clints/Anil Kumar M.O.jpg";
import Rajendrakumar from "../../assets/clints/Rajendrakumar1.jpg";
import Gowda from "../../assets/clints/Gowda.jpg";

const councilMembers = [
  {
    name: "Dr. Devika S Ajila",
    role: "Principal (Convenor) Bengaluru Law College",
    image: principal,
    description:
      ""
  },
  {
    name: "Prof. Dr. C S Patil",
    role: "Member",
    image: Patil,
    description:
      ""
  },
  {
    name: "Dr. RajendraKumar Hittangi",
    role: "Assistant professor",
    image: Rajendrakumar,
    description:
      "KSLU's' law school"
  },
  {
    name: "Dr. N D GOWDA",
    role: "Assistant professor",
    image: Gowda,
    description:
      "Saraswathi law college Chitradurga."
  },
  {
    name: "Sri. Chandrashekar",
    role: "Member",
    image: Chandrashekar,
    description:
      "."
  },
  {
    name: "Sri. Anil Kumar M.O",
    role: "Member",
    image: Anil,
    description:
      ""
  },
];

const GoverningCouncil = () => {
  return (
<>

        <SectionTitle2 title="Governing Council" />

        
    <div className="council-page">
      {/* <h2 className="page-title">Governing Council</h2> */}
      <div className="council-grid">
        {councilMembers.map((member, index) => (
          <div className="council-card" key={index}>
            <div className="council-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="council-details">
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
</>
  );
};

export default GoverningCouncil;
