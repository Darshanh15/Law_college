// import React from "react";
// import "./Faculty.scss";
// import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

// const facultyMembers = [
//   {
//     id: 1,
//     name: "Prof. Meera Reddy",
//     designation: "Head of Department",
//     img: "https://via.placeholder.com/200",
//     linkedin: "#",
//     twitter: "#",
//     email: "meera@college.com",
//   },
//   {
//     id: 2,
//     name: "Dr. Arjun Patel",
//     designation: "Senior Lecturer",
//     img: "https://via.placeholder.com/200",
//     linkedin: "#",
//     twitter: "#",
//     email: "arjun@college.com",
//   },
//   {
//     id: 3,
//     name: "Ms. Ananya Rao",
//     designation: "Assistant Professor",
//     img: "https://via.placeholder.com/200",
//     linkedin: "#",
//     twitter: "#",
//     email: "ananya@college.com",
//   },
// ];

// const Faculty = () => {
//   return (
//     <div className="faculty-page">
//       <h2 className="page-title">Our Faculty</h2>
//       <div className="faculty-list">
//         {facultyMembers.map((faculty) => (
//           <div className="faculty-card" key={faculty.id}>
//             <div className="faculty-img">
//               <img src={faculty.img} alt={faculty.name} />
//             </div>
//             <div className="faculty-info">
//               <h3 className="name">{faculty.name}</h3>
//               <p className="designation">{faculty.designation}</p>
//               <div className="social-icons">
//                 <a href={faculty.linkedin} target="_blank" rel="noreferrer">
//                   <FaLinkedin />
//                 </a>
//                 <a href={faculty.twitter} target="_blank" rel="noreferrer">
//                   <FaTwitter />
//                 </a>
//                 <a href={`mailto:${faculty.email}`}>
//                   <FaEnvelope />
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Faculty;



// import React from "react";
// import "./Faculty.scss";
// import Faculty from './Faculty';

// const members = [
//   {
//     id: 1,
//     name: "Prof. Dr. T.R. Subramanya",
//     role: "CMR Law College - Dean",
//     desc: "Distinguished academic leader with 30+ years of experience in legal education.",
//     img: "https://via.placeholder.com/600x600?text=Prof+Subramanya"
//   },
//   {
//     id: 1,
//     name: "Prof. Dr. T.R. Subramanya",
//     role: "CMR Law College - Dean",
//     desc: "Distinguished academic leader with 30+ years of experience in legal education.",
//     img: "https://via.placeholder.com/600x600?text=Prof+Subramanya"
//   },
//   {
//     id: 1,
//     name: "Prof. Dr. T.R. Subramanya",
//     role: "CMR Law College - Dean",
//     desc: "Distinguished academic leader with 30+ years of experience in legal education.",
//     img: "https://via.placeholder.com/600x600?text=Prof+Subramanya"
//   },
//   {
//     id: 1,
//     name: "Prof. Dr. T.R. Subramanya",
//     role: "CMR Law College - Dean",
//     desc: "Distinguished academic leader with 30+ years of experience in legal education.",
//     img: "https://via.placeholder.com/600x600?text=Prof+Subramanya"
//   },
//   {
//     id: 1,
//     name: "Prof. Dr. T.R. Subramanya",
//     role: "CMR Law College - Dean",
//     desc: "Distinguished academic leader with 30+ years of experience in legal education.",
//     img: "https://via.placeholder.com/600x600?text=Prof+Subramanya"
//   },
//   {
//     id: 2,
//     name: "Sri. Raghavendra Auradkar IPS (R)",
//     role: "Former Director General of Police",
//     desc: "Former Director General of Police and Commissioner of Police Bangalore, Karnataka.",
//     img: "https://via.placeholder.com/600x600?text=Raghavendra+Auradkar"
//   },
//   // add more members here...
// ];

// const InviteeMembers = () => {
//   return (
//     <section className="invitee-members">
//       <h2 className="page-title">Invitee Members</h2>

//       <div className="members-grid">
//         {members.map((m) => (
//           <article className="member-card" key={m.id}>
//             <div className="member-img-wrap">
//               <img src={m.img} alt={m.name} />
//             </div>

//             <div className="member-content">
//               <h3 className="member-name">{m.name}</h3>
//               <p className="member-role">{m.role}</p>
//               <p className="member-desc">{m.desc}</p>
//               <div className="member-accent" />
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default InviteeMembers;


import React from "react";
import "./Faculty.scss";
import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";

import img from "../../assets/law.jpg";
import principal from "../../assets/collage_img/principal.jpeg";
import Indira from "../../assets/clints/faculty/Indira.jpg";
import Prasanna from "../../assets/clints/faculty/prasanna v raju.png";
import Bhavya from "../../assets/clints/faculty/Bhavya.jpg";
import Sona from "../../assets/clints/faculty/Sona.jpeg";
import Harika from "../../assets/clints/faculty/Harika.jpeg";
import MissHarshitha from "../../assets/clints/faculty/MissHarshitha.jpg";
import Kavya from "../../assets/clints/faculty/Kavya.jpg";
import Apoorva from "../../assets/clints/faculty/apporva khandelwal.png";
import Chitrika from "../../assets/clints/faculty/Chaitrika Hegde.jpg";
import Ayesha from "../../assets/clints/faculty/ayesha.jpg";
import Gowri from "../../assets/clints/faculty/Gowri.jpg";
import Manjulakshmi from "../../assets/clints/faculty/Manjulaxmi.jpg";
import Shreya from "../../assets/clints/faculty/ShreyaGopi.jpg";
import Vikshitha from "../../assets/clints/faculty/Vikshitha M H.jpg";
import Harshitha from "../../assets/clints/faculty/Harika.jpeg";
import Chaluvaraju from "../../assets/clints/faculty/Chaluvaraju.jpg";
import Sujatha from "../../assets/clints/faculty/Sijatha.jpg";
import Narendra from "../../assets/clints/faculty/Narendra.jpg";
import Usha from "../../assets/clints/faculty/Usha KM.jpg";
import Tejaswini from "../../assets/clints/faculty/thejaswini.png";
import Veena from "../../assets/clints/faculty/veena pujar.png";
import Prakasha from "../../assets/clints/faculty/Prakash.jpg";
import Shivakumar from "../../assets/clints/faculty/Shivakumar.jpg";
import Spoorthi from "../../assets/clints/faculty/Spoorthi.jpg";
import Siddappa from "../../assets/clints/faculty/SiddappaN.jpg";


import NagaveniN from "../../assets/clints/Guest Faculty/NagaveniN.jpg";
import Sumathi from "../../assets/clints/Guest Faculty/Sumathi.jpg";

import Rajashekar from "../../assets/clints/Visiting Faculty/Rajashekar.jpg";

const facultyMembers = [
  {
    name: "Dr. Devika.S.Ajila",
    role: "Principal",
    image: principal,
    description:
      "LL.M, Ph.D"
  },
  {
    name: "Dr. Indira G Naik",
    role: "Vice Principal",
    image: Indira,
    description:
      "LL.M, Ph.D"
  },
  {
    name: "Sri. Prasanna V.R",
    role: "Assistant Professor",
    image: Prasanna,
    description:
      "LL.M, MA(Pol.Science), MA(Sociology)(PH.D)"
  },
  {
    name: "Mrs. Bhavya N",
    role: "Assistant Professor",
    image: Bhavya,
    description:
      "LL.M (NET, KSET)(PH.D)"
  },
  {
    name: "Smt. Sona C.Y",
    role: "Assistant Professor",
    image: Sona,
    description:
      "LL.M"
  },
  {
    name: "Smt. Harika S S",
    role: "Assistant Professor",
    image: Harika,
    description:
      "LL.M"
  },


  {
    name: "Smt. Ayesha Kausar",
    role: "Assistant Professor",
    image: Ayesha,
    description:
      "LL.M"
  },
  {
    name: "Smt. Gowri S",
    role: "Assistant Professor",
    image: Gowri,
    description:
      "MA in political science (PH.D)"
  },

  {
    name: "Mrs. Shreya Gopi",
    role: "Assistant Professor",
    image: Shreya,
    description:
      "LL.M"
  },
  {
    name: "Mrs. Vikshitha M H",
    role: "Assistant Professor",
    image: Vikshitha,
    description:
      "LL.M"
  },
  {
    name: "Miss. Harshitha",
    role: "Assistant Professor",
    image: MissHarshitha,
    description:
      "LL.M"
  },
  {
    name: "Mr. Chaluvaraju.B C",
    role: "Assistant Professor",
    image: Chaluvaraju,
    description:
      "LL.M"
  },
  {
    name: "Mrs. Sujatha H.M",
    role: "Assistant Professor",
    image: Sujatha,
    description:
      "LL.M"
  },
  {
    name: "Sri. Narendra Prakash",
    role: "Assistant Professor",
    image: Narendra,
    description:
      "LL.M"
  },
  {
    name: "Mrs. Usha K M",
    role: "Assistant Professor",
    image: Usha,
    description:
      "LL.M"
  },

  {
    name: "Mrs. Veena Pujar",
    role: "Assistant Professor",
    image: Veena,
    description:
      "LL.M"
  },
  {
    name: "Sri. Prakasha Paramesh Nayak Lamani",
    role: "Assistant Professor",
    image: Prakasha,
    description:
      "M.A (Economics), KSET, KARTET"
  },
    {
    name: "Sri. Shivakumar",
    role: "Assistant Professor",
    image: Shivakumar,
    description:
      "LL.M"
  },
    {
    name: "Smt. Spoorthi D J",
    role: "Librarian",
    image: Spoorthi,
    description:
      "MLSc"
  },
    {
    name: "Sri. Siddappa S.B",
    role: "Physical Director",
    image: Siddappa,
    description:
      "BA BPED, (P.E)"
  },
];





const Guest = [
  {
    name: "Smt. Nagaveni R",
    role: "Assistant Professor",
    image: NagaveniN,
    description:
      "PH.D in Kannada "
  },
  {
    name: "Smt. Sumathi",
    role: "Assistant Professor",
    image: Sumathi,
    description:
      "M.A in Sociology"
  },]


  const GuesVisitingFacultyt = [
  {
    name: "Prof. Rajashekar",
    role: "Professor",
    image: Rajashekar,
    description:
      "LL.M"
  }]



const Faculty = () => {
  return (

<>
    
        <SectionTitle2 title="Our Faculty" />


    <div className="faculty-page">
      {/* <h2 className="page-title">Our Faculty</h2> */}
      <div className="faculty-grid">
        {facultyMembers.map((faculty, index) => (
          <div className="faculty-card" key={index}>
            <div className="faculty-image">
              <img src={faculty.image} alt={faculty.name} />
            </div>
            <div className="faculty-details">
              <h3>{faculty.name}</h3>
              <h4>{faculty.role}</h4>
              <p>{faculty.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="page-title">Our Guest Faculty</h2>
      <div className="faculty-grid">
        {Guest.map((faculty, index) => (
          <div className="faculty-card" key={index}>
            <div className="faculty-image">
              <img src={faculty.image} alt={faculty.name} />
            </div>
            <div className="faculty-details">
              <h3>{faculty.name}</h3>
              <h4>{faculty.role}</h4>
              <p>{faculty.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="page-title">Our Visiting Faculty</h2>
      <div className="faculty-grid">
        {GuesVisitingFacultyt.map((faculty, index) => (
          <div className="faculty-card" key={index}>
            <div className="faculty-image">
              <img src={faculty.image} alt={faculty.name} />
            </div>
            <div className="faculty-details">
              <h3>{faculty.name}</h3>
              <h4>{faculty.role}</h4>
              <p>{faculty.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
</>
  );
};

export default Faculty;
