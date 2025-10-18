import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./BoardSection3.scss";

import presidentImg from "../../assets/clints/amma.jpg"; 
import vpImg from "../../assets/clints/Shailesh-Raju.jpeg"; 
import trusteeImg from "../../assets/clints/prasanna v raju.png";

const boardMembers = [
  {
    name: "Smt. Renuka Raju",
    role: "President,",
    quote: "Knowledge is like a garden: if it is not cultivated, it cannot be harvested.",
    description: "The institution’s essence lies in imparting knowledge to millions of aspirants who want to make a remarkable growth in the field of legal education and profession",
    p1: "You know, you teach. You do not know, you learn is what we believe in. Every human is born to learn and will continue to do so over the years to come. Our Institution has attempted the first step in this endeavour.",
    p2: "We vow to gift a crew of proficient Advocates to the society.",
    p3: "Bangalore Law College is dedicated to nurturing future legal professionals with excellence in education and ethics. We empower students with knowledge, discipline, and practical skills to excel in the field of law. You know, you teach. You do not know, you learn is what we believe in. Every human is born to learn and will continue to do so over the years to come. Our Institution has attempted the first step in this endeavour.",
    img: presidentImg,
    showBio: false,
  },
  {
    name: "Sri. K Shailesh Raju",
    role: "Vice-President",
    quote:"Education is the most powerful weapon which you can use to change the world --by Nelson Mandela.",
    description: "A Postgraduate in Literature, he began his career in Human Resource Development (HRD) training, where he designed and conducted training programs for students from diverse academic backgrounds, as well as facilitated capacity-building sessions for government officials and corporate professionals.",
    p1: "With over 14 years of rich experience in the field of HRD, he later transitioned into the construction industry, where he continues to actively pursue his professional endeavors with dedication and leadership.",
    p2: "In addition to his professional commitments, he serves as the Secretary of an NGO that manages a school in Sidlaghatta and a Nursing College in Kolar, Karnataka, demonstrating his commitment to education and social development.",
    p3: "The vision is to empower students to become responsible advocates and leaders who uphold the rule of law, champion justice, and contribute meaningfully to society at national and global levels. To promote discipline, ethical conduct, and a sense of responsibility among students. research, and participation in moot courts, internships, and community legal services. To create a culture of inclusiveness, mentorship, and leadership for holistic student development. To build strong collaborations with the legal fraternity, judiciary, and institutions for the benefit of students. To ensure that the college remains a center of academic excellence and moral integrity.",
    img: vpImg,
  },
  {
    name: "Prof. Prasanna V Raju",
    role: "Managing Trustee & Treasurer",
    quote: "An investment in knowledge pays the best interest. --by Benjamin Franklin",
    description: "Shri Prasanna V. Raju is a distinguished officer from the 1994 batch who has served the nation with exceptional dedication, integrity, and leadership. He began his illustrious career as a Sub-Inspector of Police and rose through the ranks, displaying exemplary professionalism and commitment to justice. Since 2006, he has rendered commendable service in the Anti-Corruption Bureau and was promoted as Deputy Superintendent of Police (DySP) in the Lokayukta in 2011.",
    p1: "During his tenure, Shri Raju played a crucial role as part of the Special Task Force (STF) that successfully brought down the notorious forest brigand Veerappan, a historic achievement that stands as a testament to his courage, tactical skill, and dedication to public service. Over the years, he has served in various districts across Karnataka, earning the trust and respect of colleagues and citizens alike for his unwavering sense of duty and ethical conduct.",
    p3: "In recognition of his outstanding service, he was decorated with the Chief Minister’s Medal, one of the highest honors conferred upon police officers in the state. His distinguished career also extended to the international arena, where he represented India with great distinction as part of the United Nations Peacekeeping Forces in Sudan, South Sudan, and Kosovo.",
    p2: `Further expanding his global contributions, Shri Raju served as a Police Advisor with the United Nations Development Programme (UNDP) to the Interim Ministry Government of Afghanistan from 2019 to June 2021, where he played a key role in policy development and law enforcement training initiatives. Upon his return, he continued to serve the country as a Legal Advisor and Consultant with the National Investigation Agency (NIA) in Bengaluru, and subsequently as an Investigation Expert with the agency from 2022 to 2025, lending his expertise to cases of national importance.

After taking voluntary retirement from the Lokayukta, Shri Prasanna V. Raju transitioned his focus to education—driven by his deep belief in nation-building through knowledge and youth empowerment. In 2015, he joined Bengaluru Law College as a Professor, where his experience in law enforcement, governance, and ethics added immense value to the academic environment. His dedication and vision for holistic legal education led him to take on the role of Managing Trustee, where he continues to guide the institution with purpose and vision.
Shri Prasanna V. Raju envisions Bengaluru Law College as a premier institution of legal education, rooted in ethics, innovation, and academic excellence. His mission is to nurture competent, disciplined, and socially responsible legal professionals who uphold justice and contribute meaningfully to the nation and the world.
He is deeply committed to, Building a strong foundation of academic excellence grounded in integrity and moral values. Creating a student-centric environment that fosters knowledge, discipline, and holistic growth. Promoting ethical leadership, civic consciousness, and a commitment to justice among students.
Beyond his professional and academic accomplishments, Shri Prasanna V. Raju is a renowned Yoga Guru and the founder of Prabhav Vayama Rathna (PVR) — a yoga institution that has been dedicated to promoting physical fitness, mental discipline, and spiritual harmony for over 25 years.

Through PVR, he has conducted yoga sessions and training programs in several countries, including Switzerland, Russia, the USA, Afghanistan, Indonesia, Malaysia, Sudan, and Kosovo, sharing India’s ancient wisdom of yoga with global communities. Over the years, he has trained and mentored more than 25,000 students worldwide, inspiring countless individuals to embrace wellness and mindfulness as a way of life.
Shri Prasanna V. Raju’s life and career stand as a remarkable blend of service, scholarship, and spirituality. From a decorated police officer and international peacekeeper to an educator and yoga practitioner, his journey exemplifies the spirit of dedication to society, ethical leadership, and personal excellence. His continued efforts at Bengaluru Law College reflect his enduring commitment to shaping a generation of legal professionals who will uphold the principles of justice, equality, and integrity.`,
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
                
                {member.showBio !== false && (
                <a className="read-more"  onClick={(e) => { e.preventDefault(); setActiveMember(member);}}>
                  Bio
                </a>
                
                )}
              </div>

              {/* Middle Section */}
              <div className="board-middle">
                {/* <h2 className="title">Profile</h2> */}
                <h3>
                  {member.role} <span>{member.name}</span>
                </h3>
                {/* <p className="quote">“{member.quote}”</p> */}
                <p>{member.p3}</p>

                {/* <a
                  className="read-more"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveMember(member);
                  }}
                >
                  Bio..
                </a> */}
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
