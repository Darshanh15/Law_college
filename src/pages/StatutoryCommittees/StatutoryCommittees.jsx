import React from "react";
import "./StatutoryCommittees.scss";
import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";

const committees = [
  {
    title: "Anti-Ragging Cell",
    description: `Anti-Ragging Cells are an essential feature of every educational institution, ensuring a safe and respectful learning environment for all students. The formation of the Anti-Ragging Cell at Bengaluru Law College is in accordance with UGC guidelines and the University Grants Commission (Prevention of Ragging) Regulations, 2009, under the UGC Act of 1956.

The Anti-Ragging Cell functions as a supervisory and advisory committee dedicated to maintaining a ragging-free campus. It plays a proactive role in promoting awareness, monitoring student behavior, and addressing any incidents of ragging promptly.`,
    p:'Major Objectives of the Anti-Ragging Cell',
    points: [
      "Major Objectives of the Anti-Ragging Cell",
      "Awareness: Educate students about the degrading, harmful, and illegal effects of ragging.",
      "Prevention: Monitor campus activities to prevent ragging from occurring or recurring.",
      "Action: Address and respond to reported ragging incidents promptly and firmly.",
      "Discipline: Establish a clear message that ragging will not be tolerated, and offenders will face strict disciplinary action.",
      "Through these measures, Bengaluru Law College ensures that students can pursue their studies in a safe, secure, and disciplined environment, fostering respect, personal growth, and academic excellence."
    ],
  },
  {
    title: "Student Grievance Redressal Committee",
    description: `Bengaluru Law College is committed to providing a supportive and transparent academic environment. To ensure that students’ concerns are heard and addressed effectively, the college has established a Student Grievance Redressal Committee. This committee serves as a formal platform for students to voice their complaints, grievances, or suggestions regarding academic, administrative, or infrastructural matters.`,
    obj:'Objectives:',
    points: [
      "The Student Grievance Redressal Committee at Bengaluru Law College is dedicated to fostering a safe, fair, and supportive environment for all students, ensuring that their voices are heard and their concerns addressed promptly.",
      "To ensure timely resolution of issues relating to academic programs, faculty, administration, or campus facilities.",
      "To promote a fair and equitable environment where students’ concerns are handled professionally and confidentially.",
      "To encourage constructive feedback for continuous improvement of the institution.",
    ],
    Functions: "Functions",
    pointFun: [
     "Receive and review grievances from students in written or online form.",
     "Investigate complaints thoroughly, consulting faculty, administration, or relevant authorities as necessary.",
     "Recommend corrective actions and follow up to ensure resolution.",
     "Maintain confidentiality and impartiality throughout the grievance handling process.",
     "Create awareness among students about their rights and the grievance redressal mechanism.",
    ],
    Commitment: "Commitment",
     pointcom: [
      "The Student Grievance Redressal Committee at Bengaluru Law College is dedicated to fostering a safe, fair, and supportive environment for all students, ensuring that their voices are heard and their concerns addressed promptly.",
    ],
  },
  {
    title: "National Service Scheme (NSS)",
    description: `The National Service Scheme (NSS) at Bengaluru Law College is an important initiative that encourages students to engage in community service, social welfare, and nation-building activities. NSS aims to develop a sense of social responsibility, leadership, and civic consciousness among students, complementing their academic growth with practical life experiences.`,
    obj:'Objectives:',
    points: [
      "To instill a spirit of social service and community involvement in students.",
      "To promote awareness about societal issues, including health, education, environment, and social justice.",
      "To develop leadership skills, discipline, and teamwork through organized outreach programs.",
      "To encourage students to contribute positively to the local community and society at large."   
    ],
    Functions: "Activities and Programs",
    pointFun: [
      "Bengaluru Law College NSS unit conducts a wide range of activities, such as:",
      "Community Development Programs: Health camps, literacy drives, awareness campaigns, and legal aid initiatives.",
      "Environmental Initiatives: Tree plantation drives, cleanliness programs, and campaigns promoting sustainable practices.",
      "Social Awareness Campaigns: Workshops and seminars on gender equality, legal rights, hygiene, and public health.",
      "Disaster Relief and Volunteering: Participating in relief efforts during natural calamities or social emergencies.",
      "Cultural and Educational Outreach: Conducting programs in schools and local communities to foster learning and inclusivity.",
      
    ],
    Commitment: "Benefits for Students",
     pointcom: [
      "Enhances social awareness and empathy for marginalized communities.",
      "Develops leadership, communication, and organizational skills.",
      "Provides opportunities for national-level recognition and awards for outstanding service.",
      "Complements legal education by connecting students with real-world issues.",
      ],
    cmd:"Commitment",
    pointscmd:"Through NSS, Bengaluru Law College fosters a culture of service, responsibility, and ethical citizenship, empowering students to become socially conscious legal professionals who contribute meaningfully to society."
  
},
  {
    title: "Legal Aid Cell",
    description: `The Legal Aid Cell at Bengaluru Law College is a vital initiative aimed at providing free legal assistance and guidance to underprivileged and marginalized sections of society. The cell bridges the gap between law students, legal professionals, and the community by promoting access to justice while enhancing students’ practical skills and social responsibility.`,
    obj:'Objectives:',
    points: [
      "To provide free legal advice, counseling, and support to individuals who cannot afford legal services.",
      "To promote awareness of legal rights and responsibilities among the public.",
      "To give students practical exposure in legal research, drafting, and client counseling.",
      "To encourage students to participate in social justice initiatives and community service.",
      ],
    Functions: "Activities and Programs",
    pointFun: [
      "Legal Awareness Camps: Organizing workshops and seminars in schools, villages, and local communities to educate people about their legal rights.",
      "Free Legal Clinics: Offering advice and guidance on civil, criminal, family, and property-related matters.",
      "Mediation and Counseling: Assisting in dispute resolution through counseling and legal guidance.",
      "Internships and Training: Providing students with opportunities to engage in legal aid work, draft petitions, and interact with practicing lawyers under supervision.",
      "Collaboration with Judiciary and NGOs: Partnering with courts, legal aid authorities, and non-governmental organizations to expand outreach.",
    ],
    Commitment: "Benefits for Students",
     pointcom: [
      "Develops practical legal skills and hands-on experience in real-world cases.",
      "Enhances communication, research, and professional ethics",
      "Encourages students to become responsible advocates and socially conscious citizens.",
    ],
    cmd:"Commitment",
    pointscmd:"Through the Legal Aid Cell, Bengaluru Law College fosters a culture of justice, empathy, and social service, ensuring that students contribute meaningfully to society while developing the skills and ethics necessary for a successful legal career.",
  },
  {
    title: "Human Rights Cell",
    description: `The Human Rights Cell at Bengaluru Law College is dedicated to promoting awareness, protection, and advocacy of human rights among students and the broader community. The cell serves as a platform for students to understand human rights issues, engage in research, and participate in initiatives aimed at creating a just and equitable society.`,
    obj:'Objectives:',
    points: [
      "To educate students and the community about fundamental human rights and constitutional safeguards.",
      "To promote awareness on issues such as gender equality, child rights, minority rights, and social justice.",
      "To organize programs and workshops that encourage advocacy, research, and ethical responsibility.",
      "To collaborate with legal experts, NGOs, and government bodies to address human rights violations.",
      "To encourage students to take part in campaigns, seminars, and community outreach programs related to human rights.",

    ],
    Functions: "Activities and Programs",
    pointFun: [
      "Workshops and Seminars: Sessions on human rights law, international conventions, and landmark judgments.",
      "Awareness Campaigns: Initiatives targeting schools, local communities, and marginalized groups to educate them about their rights.",
      "Legal Assistance: Guidance and support to victims of human rights violations in collaboration with Legal Aid Cell.",
      "Student Research Projects: Encouraging students to study and publish on contemporary human rights issues.",
      "Collaborative Events: Working with NGOs, human rights organizations, and government bodies for advocacy programs.",

    ],
    Commitment: "Benefits for Students",
     pointcom: [
      "Develops understanding of legal and social frameworks protecting human rights.",
      "Enhances research, advocacy, and public speaking skills.",
      "Fosters ethical awareness and social responsibility, preparing students for careers in law, policy-making, and social justice initiatives."
    ],
    cmd:"Commitment",
    pointscmd:"Through the Legal Aid Cell, Bengaluru Law College fosters a culture of justice, empathy, and social service, ensuring that students contribute meaningfully to society while developing the skills and ethics necessary for a successful legal career.",
},
  {
    title: "SC/ST Cell",
    description: `The SC/ST Cell at Bengaluru Law College is established in compliance with Government of India regulations to ensure the welfare, protection, and empowerment of students belonging to Scheduled Castes (SC) and Scheduled Tribes (ST). The cell plays a crucial role in promoting equality, inclusivity, and access to educational opportunities for marginalized communities.`,
    obj:'Objectives:',
    points: [
      "To safeguard the rights and interests of SC/ST students within the institution.",
      "To monitor the academic and overall development of SC/ST students and address their grievances.",
      "To create awareness about government schemes, scholarships, and opportunities available to SC/ST students.",
      "To promote inclusivity, equality, and a supportive learning environment on campus.",
      "To ensure that no discrimination or bias occurs based on caste or community."
    ],
    Functions: "Functions and Activities",
    pointFun: [
      "Grievance Redressal: Addressing complaints and issues related to discrimination, harassment, or academic concerns.",
      "Scholarship and Financial Guidance: Helping students access government scholarships, fee concessions, and educational support schemes.",
      "Awareness Programs: Conducting workshops and sessions on rights, reservations, and educational opportunities.",
      "Mentorship and Counseling: Providing guidance to SC/ST students for academic, career, and personal development.",
      "Collaborative Initiatives: Liaising with government agencies, NGOs, and legal authorities to support student welfare.",
    ],
    Commitment: "Commitment",
     pointcom: [
"The SC/ST Cell at Bengaluru Law College ensures a safe, equitable, and inclusive environment where SC/ST students can thrive academically and personally. The cell reinforces the institution’s commitment to social justice, equal opportunity, and empowerment of marginalized communities."
    ],
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
            
            <span>{item.obj}</span>
            {item.points && (
              <ul>
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}

            <span>{item.Functions}</span>
            {item.pointFun && (
              <ul>
                {item.pointFun.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}

            <span>{item.Commitment}</span>
            {item.pointcom && (
              <ul>
                {item.pointcom.map((point, i) => (
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
