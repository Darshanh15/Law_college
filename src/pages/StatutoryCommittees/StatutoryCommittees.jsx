import React from "react";
import "./StatutoryCommittees.scss";
import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";

const committees = [
  {
    title: "Anti-Ragging Cell",
    description: `Anti-Ragging Cells are an essential feature of every educational institution, ensuring a safe and respectful learning environment for all students. The formation of the Anti-Ragging Cell at Bengaluru Law College is in accordance with UGC guidelines and the University Grants Commission (Prevention of Ragging) Regulations, 2009, under the UGC Act of 1956.
The Anti-Ragging Cell functions as a supervisory and advisory committee dedicated to maintaining a ragging-free campus. It plays a proactive role in promoting awareness, monitoring student behavior, and addressing any incidents of ragging promptly.`,
    obj:'Major Objectives of the Anti-Ragging Cell',
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
    description: `The Women’s Grievance Cell is established in accordance with UGC and Government guidelines to ensure a safe, respectful, and supportive environment for female students, teaching staff, and non-teaching staff. The Cell aims to safeguard the rights of women and provide a platform for addressing issues related to gender discrimination, sexual harassment, and other grievances faced by women within the institution.`,
    obj:'Objectives of the Cell:',
    points: [
      "To create awareness about the rights and responsibilities of women.",
      "To prevent any form of gender-based discrimination or harassment.",
      "To provide a safe and confidential mechanism for redressal of grievances.",
      "To promote gender equality and sensitize students and staff on women-related issues.",
      "To organize workshops, seminars, and awareness programs on women empowerment, legal rights, and personal safety.",
     
    ],
    Functions: "Functions of the Cell:",
    pointFun: [
      "Receiving complaints from aggrieved women students or staff.",
      "Conducting inquiries in a confidential and impartial manner.",
      "Recommending appropriate action against those found guilty of misconduct.",
      "Providing counseling and support services to complainants.",
      "Conducting gender-sensitization programs and campaigns within the campus.",
    ],
    Commitment: "The Women’s Grievance Cell consists of:",
     pointcom: [
        "Chairperson (Senior Faculty Member)",
        "Faculty Members (both male and female)",
        "Student Representatives",
        "External Member (from NGO/Legal background, if required)",
       
    ],
    scope: "Scope:",
     pointsco: [
        "Covers issues of harassment, discrimination, abuse, or any grievance related to women’s welfare.",
        "Ensures strict confidentiality and fairness in handling complaints.",
        "Works in line with the guidelines of the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.",
       
    ],
},
  {
    title: "Disciplinary Committee",
    description: `The Disciplinary Committee of the college is constituted to maintain discipline, decorum, and a healthy academic environment within the campus. It ensures that students adhere to the rules and regulations of the institution and take corrective measures whenever there is any deviation.`,
    obj:'Objectives of the Committee::',
    points: [
      "To promote discipline and good conduct among students.",
      "To create a safe and respectful environment conducive to learning.",
      "To address cases of misconduct, indiscipline, and violation of college rules.",
      "To take corrective and preventive measures in cases of disputes or conflicts.",
    
    ],
    Functions: "Functions of the Committee:",
    pointFun: [
      "Monitor student behavior inside and outside the classroom.",
       "Inquire into reported incidents of indiscipline.",
       "Counsel students on values of responsibility, respect, and integrity.",
       "Recommend disciplinary action as per the gravity of the case.",
       "Work in coordination with teachers, parents, and administration for student welfare.",
       "",
    ],
    Commitment: "Possible Actions by the Committee:",
     pointcom: [
        "Oral/written warnings.",
        "Counseling sessions.",
        "Intimation to parents/guardians.",
        "Suspension from classes/college activities (in severe cases).",
        "Any other action deemed necessary by the committee in accordance with college rules.",
    ],
},
  {
    title: "Moot Court Society ",
    description: `The Moot Court Society of Bengaluru Law College functions as a Statutory Committee in accordance with the Bar Council of India Rules of Legal Education, 2008. Moot Court exercises form a compulsory part of the LL.B. curriculum, ensuring that every law student gains practical training in advocacy, drafting, and court etiquette.`,
    obj:'Objectives:',
    points: [
      "To organize and conduct compulsory moot court exercises as prescribed by BCI.",
      "To train students in legal research, drafting of memorials, oral advocacy, and courtroom manners.",
      "To conduct intra-college and inter-college moot court competitions.",
      "To guide and prepare students for participation in national and international moot court competitions.",
      "To bridge the gap between theoretical learning and practical exposure in the legal profession.",
      
    ],
    Functions: "Composition",
    pointFun: [
    "Chairperson: Principal of the College",  
    "Faculty Convenor(s): Nominated law faculty members",  
    "Student Members: Selected from each year of the LL.B. course",  
    "Moot Court Captains: Student representatives assisting in organization and training",  
    
    ],
    Commitment: "",
     pointcom: [
"The Moot Court Society is recognized as a Statutory Committee, since it is established to fulfill the mandatory clinical legal education requirements under the BCI Rules. All law students are required to participate in its activities as part of their academic training.",
"Through its activities, the Moot Court Society provides students with a platform to develop essential skills that are vital for their journey as future advocates, judges, academicians, and legal professionals."    
],
},
  {
    title: "Internal Quality Assurance Cell (IQAC)",
    description: `The Internal Quality Assurance Cell (IQAC) of Bengaluru Law College has been established in accordance with the guidelines of the University Grants Commission (UGC) and the National Assessment and Accreditation Council (NAAC). The IQAC functions as a statutory and quality assurance body of the institution, with the primary aim of developing a systematic and consistent quality culture in all academic and administrative activities of the college.`,
    obj:'Objectives of IQAC',
    points: [
      "To develop a system for conscious, consistent, and catalytic improvement in the academic and administrative performance of the institution.",
      "To promote measures for institutional functioning towards quality enhancement through internalization of quality culture and institutionalization of best practices.",
      "To ensure continuous improvement of teaching-learning processes, research, extension, and evaluation methods.",
      "To prepare the institution for accreditation and quality audits by NAAC and other statutory bodies.",
    
    ],
    Functions: "Functions of IQAC",
    pointFun: [
    "Development and application of quality benchmarks for various academic and administrative activities.",  
    "Facilitating a learner-centric environment conducive to quality education.",  
    "Collection and analysis of feedback from students, parents, alumni, and other stakeholders.",  
    "Organization of seminars, workshops, and training programs on quality-related themes.",  
    "Documentation of various programs/activities leading to quality improvement.",  
    "Preparation of the Annual Quality Assurance Report (AQAR) for submission to NAAC.",  
    ],
    Commitment: "Composition of IQAC As per NAAC guidelines, the IQAC consists of:",
     pointcom: [
        "Chairperson – Head of the Institution (Principal)",
        "Senior Administrative Officers",
        "Faculty Members",
        "Management Representative",
        "Nominees from Local Society/Alumni/Students",
        "External Experts",
        "Statutory Nature",
        "The IQAC is a statutory committee as per the directives of the UGC and NAAC, and its recommendations are integral for the growth and development of the institution.",
],  
    
},

// {
//     title: "Alumni Relationship – Bengaluru Law College",
//     description: `The alumni of Bengaluru Law College form an integral part of the institution’s legacy and growth. They not only carry the name of the college into society and the legal profession but also continue to remain closely connected with their alma mater.`,
//     obj:'Expression of Gratitude',
//     points: [
//       "As a token of respect and thankfulness, the alumni organize Guru Vandana to honor their teachers for their invaluable guidance. This tradition reflects the values of respect, gratitude, and lifelong bonding between teachers and students.",
//     ],
//     Functions: "Alumni Contributions",
//     pointFun: [
//         "The alumni have shown their love and commitment towards the college through several contributions, such as:",
//         "Donation of water purifiers for students and staff welfare.",
//         "Providing mic stands and other facilities to support academic and cultural events.",
//         "Contributing mementos and assistance for college programs.",
//         "Extending continuous support towards the betterment of the institution.",
//     ],
//     Commitment: "Alumni Association",
//      pointcom: [
//         "The Alumni Association of Bengaluru Law College acts as a bridge between the past and present students. It regularly engages with the college by:",
//         "Organizing alumni meets and interactive sessions.",
//         "Guiding students through mentorship, career counseling, and internship opportunities.",
//         "Actively supporting the college in its developmental and outreach activities",    
//     ],  
//      scope: "College’s Gratitude Towards Alumni",
//      pointsco: [
//         "The college also expresses its gratitude to its alumni. On Graduation Day, alumni are felicitated and blessed by esteemed guests. They are warmly welcomed to all institutional programs and are always considered as an integral part of every event at Bengaluru Law College.",
//         "A Lifelong Bond:",
//         "This strong alumni relationship highlights mutual respect, continuous cooperation, and shared pride. The alumni remain an everlasting part of the college family, enriching its legacy and inspiring future generations.",
       
//     ],
// },
];

const StatutoryCommittees = () => {
  return (
    <>
    <SectionTitle2 title="Statutory Committees" />
    
    
    <div className="newspaper-layout">
      {/* <h1 className="page-title">Statutory Committees</h1> */}
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
           
            <span>{item.scope}</span>
            {item.pointsco && (
              <ul>
                {item.pointsco.map((point, i) => (
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
