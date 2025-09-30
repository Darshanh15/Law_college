import React from "react";
import "./StatutoryCommittees.scss";
import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";

const committees = [
  {
    title: "Anti-Ragging Cell",
    description: `Anti-Ragging Cells should be a vital feature of every educational institution's system. The formation of an Anti-Ragging Cell is required under UGC guidelines under the Act of 1956, as amended by UGC regulations on combating the scourge of ragging in higher educational institutions, 2009.`,
    p:'The Anti-Ragging Group will serve as a supervisory and advising committee in order to maintain a ragging-free environment on campus. This cell s major goals are as follows:',
    points: [
      "To make pupils aware of the degrading effects of ragging and its perversity.",
      "To maintain a constant eye on ragging in order to prevent it from occurring and recurring.",
      "To deal with ragging situations that come to our attention in a timely and strict manner.",
      "To create a disciplined environment by providing a clear message that ragging will not be permitted, and that any act of ragging will be observed and punished."
    ],
  },
  {
    title: "Student Grievance Redressal Committee",
    description: `The Student Grievance Redressal Committee is established to address and resolve student grievances in a fair and timely manner. The committee provides a platform for students to express their concerns and ensures that their issues are heard and addressed.`,
    p:'Objectives:',
    points: [
      "To provide a fair and transparent mechanism for addressing student grievances",
      "To ensure timely resolution of student complaints",
      "To foster a positive and supportive learning environment"
    ],
  },
  {
    title: "National Service Scheme (NSS)",
    description: `The goal of the NSS programme is to aid everyone who needs it, to improve and bring about a positive change in their level of living and the manner they live with dignity. Under the auspices of the National Service Scheme, the college has taken steps to visit rural communities and get out of its comfort zone.`,
  },
  {
    title: "Legal Aid Cell",
    description: `Law students are regarded as society's social engineers, and with the help of the Legal Aid cell, they give legal aid to the impoverished and weaker sections of society in order for them to enjoy their constitutional rights.

  The Cell provides free legal aid to residents of Basavanagudi and the surrounding areas. During college hours, anybody can use the Cell. The cell benefits citizens and adds value to society by providing timely and attentive support.

  Every year, the cell conducts several camp trips to rural regions. The committee tries to find a solution that complies with the law.`,
  },
  {
    title: "Human Rights Cell",
    description: `The cell's goal is to raise human rights knowledge among faculty, staff, and students. It also tries to help individuals develop their personalities and live good and dignified lives without infringing on the rights of others.`,
  },
  {
    title: "SC/ST Cell",
    description: `In 1983, the Special Cell for the Welfare of Scheduled Castes and Scheduled Tribes was formed. The University Grants Commission has sponsored the development of a Special Cell to enhance, implement, and monitor the reservation policies/guidelines issued by the Karnataka government, the Indian government, and the University Grants Commission for the welfare of SC-STs from time to time.
    The SC-ST Cell's major goal is to guarantee that SC-STs are adequately represented in matters of appointment to teaching and non-teaching positions, as well as admission to various University programmes.

  For the execution of programmes in the University and associated colleges, the Cell oversees the reservation policies of the Government of India and the Government of Karnataka. In addition, the Cell has raised awareness among SC-STs about numerous academic programmes aimed for their benefit.`,
  },
  {
    title: "Women’s Grievance Cell",
    description: `The Institution has developed a Women's Grievance Cell as an innovative practise with the goal of resolving student and staff issues connected to women of any kind. The Supreme Court recognised and addressed the subject of workplace sexual harassment in Vishakha and others vs. State of Rajasthan in 1997.

  The ruling established workplace sexual harassment prevention rules that are applicable throughout India. Knowledge and awareness about it can lead to a workplace where no one is subjected to sexual harassment. Sexual harassment instils the most humiliating sexual stereotypes in the workplace and is always a purposeful invasion of a person's personal space.`,
  },
  {
    title: "Disciplinary Committee",
    description: `The Disciplinary Committee is established to maintain discipline and order within the institution. The committee ensures that students adhere to the rules and regulations, promoting a conducive learning environment.

The primary objective of the Disciplinary Committee is to uphold institutional rules and regulations, address disciplinary issues and misconduct, and promote a culture of responsibility and respect. The committee investigates incidents of misconduct, conducts disciplinary hearings, and imposes penalties or corrective measures as necessary. Additionally, the committee provides guidance and counseling to students to help them understand the importance of discipline and responsibility.

The committee consists of faculty members and administrative representatives, ensuring a fair and impartial approach to disciplinary matters. By maintaining a disciplined and respectful campus environment, promoting student accountability and responsibility, and ensuring fairness and justice in disciplinary actions, the Disciplinary Committee plays a vital role in maintaining a positive and productive campus environment.`,
  },
  {
    title: "Moot Court",
    description: `The College has set up a spacious Moot Court hall with the necessary infrastructure. The Moot Court Society is in charge of putting up moot court competitions and selecting applicants for inter-collegiate competitions.

  Inter-class moot court and trial advocacy competitions are held by the Society and are open to students in all semesters. The Society also holds judgement writing competitions and other advocacy-related activities.`,
  },
  {
    title: "Internal Quality Assurance Cell (IQAC)",
    description: `The Internal Quality Assurance Cell (IQAC) is a vital component of our institution, dedicated to ensuring and enhancing the quality of education, research, and overall institutional performance. As per the guidelines of the National Assessment and Accreditation Council (NAAC), our IQAC plays a pivotal role in:`,
    points: [
      "Quality Enhancement: Identifying areas for improvement and implementing initiatives to enhance academic and administrative processes.",
      "Monitoring and Evaluation: Regularly assessing and evaluating institutional performance, using feedback from stakeholders to inform decision-making.",
      "Accreditation and Compliance: Ensuring compliance with NAAC and other regulatory bodies' requirements, facilitating accreditation processes."
    ],
  },
];

const StatutoryCommittees = () => {
  return (
    <>
    <SectionTitle2 title="Statutory Committees" />
    
    
    <div className="newspaper-layout">
      <h1 className="page-title">Statutory Committees</h1>
      <div className="columns">
        {committees.map((item, idx) => (
          <div className="article" key={idx}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.p}</p>
            {item.points && (
              <ul>
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default StatutoryCommittees;
