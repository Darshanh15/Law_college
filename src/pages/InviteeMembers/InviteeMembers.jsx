import React from "react";
import "./InviteeMembers.scss";
import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";

import Subramanya from "../../assets/clints/Subramanya.jpeg";
import Raghavendra from "../../assets/clints/Raghavendra Auradkar IPS.jpeg";
import Patil from "../../assets/clints/C S Patil.jpeg";
import Ranjit from "../../assets/clints/Ranjit Shankar Varma.jpeg";
import Abhyuday from "../../assets/clints/Abhyuday Anand IRS.jpeg";
import Chandrashekar from "../../assets/clints/Chandrashekar.jpeg";
import Anil from "../../assets/clints/Anil Kumar M.O.jpg";


const members = [
  {
    id: 1,
    name: "Prof. Dr. T.R. Subramanya",
    role: "Dean of CMR University School of Legal Studies, Bengaluru",
    img: Subramanya
  },
  {
    id: 2,
    name: "Sri. Raghavendra Auradkar IPS (R)",
    role: "Karnataka State Administrative Tribunal, Bengaluru",
    img: Raghavendra
  },
  {
    id: 3,
    name: "Prof. Dr. C S Patil",
    role: "Former acting Vice-Chancellor of Karnataka State Law University (KSLU).  Currently the Director of the Karnataka Institute for Law and Parliamentary Reform (KILPAR)",
    img: Patil
  },
  {
    id: 4,
    name: "Sri. Ranjit Shankar Varma",
    role: "Senior Advocate - Supreme Court",
    img: Ranjit
  },
  {
    id: 5,
    name: "Sri. Abhyuday Anand IRS",
    role: "Joint Commisioner of Income Tax",
    img: Abhyuday
  },
  {
    id: 6,
    name: "Sri. Chandrashekar",
    role: "Manasa Education Center",
    img: Chandrashekar
  },

];

const InviteeMembers = () => {
  return (
<>


        <SectionTitle2 title="Invitee Members" />


    <div className="invitee-members">
      {/* <h2 className="page-title">Invitee Members</h2> */}
      <div className="members-grid">
        {members.map((member) => (
          <div className="member-card" key={member.id}>
            <div className="img-box">
              <img src={member.img} alt={member.name} />
            </div>
            <h3 className="name">{member.name}</h3>
            <p className="role">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
</>
  );
};

export default InviteeMembers;
