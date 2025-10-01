import React from "react";
import "./NonTeaching.scss";

import Shivaprasad from '../../assets/Non Teaching Staff/Shivaprasad.jpg'
import Thriveni from '../../assets/Non Teaching Staff/Thriveni.jpg'
import Shobha from '../../assets/Non Teaching Staff/Shobha.jpg'
import Darshan from '../../assets/Non Teaching Staff/Dasrshan.jpg'
import Durgesh from '../../assets/Non Teaching Staff/Durgesh.jpg'
import Bhagyamma from '../../assets/Non Teaching Staff/Bhagyamma.jpg'
import Lalita from '../../assets/Non Teaching Staff/Lalita.jpg'
import Parvathi from '../../assets/Non Teaching Staff/Parvathi.jpg'
import Sarswathamma from '../../assets/Non Teaching Staff/Sarswathamma.jpg'
import Mayigowda from '../../assets/Non Teaching Staff/Mayigowda.jpg'
import Manjunath from '../../assets/Non Teaching Staff/Manjunath.jpg'
import Christ from '../../assets/Non Teaching Staff/Christ Das.jpeg'

import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";

const staff = [
  {
    id: 1,
    name: "Mr. Shivaprasad S Ajila",
    role: "Office Superintendent",
    img: Shivaprasad,
  },
  {
    id: 4,
    name: "Mr. Darshan N",
    role: "FDC",
    img: Darshan,
  },
   {
    id: 5,
    name: "Mr. Durgesh",
    role: "Attender",
    img: Durgesh,
  },
     {
    id: 6,
    name: "Mrs. Bhagyamma",
    role: "Attender",
    img: Bhagyamma,
  },
     {
    id: 7,
    name: "Mrs. Lalita",
    role: "Attender",
    img: Lalita,
  },   {
    id: 8,
    name: "Mrs. Parvathi",
    role: "Sweeper",
    img: Parvathi,
  },
  {
      id: 9,
    name: "Mrs. Sarswathamma",
    role: "Sweeper",
    img: Sarswathamma,
  },
    {
      id: 10,
    name: "Mr. Mayigowda",
    role: "Day Security",
    img: Mayigowda,
  },
    {
      id: 11,
    name: "Mr. Manjunath S",
    role: "Night Security",
    img: Manjunath,
  },
   {
      id: 12,
    name: "Mr. Christ Das",
    role: "FDA",
    img: Christ,
  },
];

const NonTeaching = () => {
  return (
<>
        <SectionTitle2 title="Non-Teaching Staff" />

    <section className="nonteaching">
      {/* <h2 className="nonteaching__title">Non-Teaching Staff</h2> */}
      <div className="nonteaching__grid">
        {staff.map((member) => (
          <div className="nonteaching__card" key={member.id}>
            <div className="nonteaching__img-box">
              <img src={member.img} alt={member.name} />
            </div>
            <div className="nonteaching__info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
</>
  );
};

export default NonTeaching;
