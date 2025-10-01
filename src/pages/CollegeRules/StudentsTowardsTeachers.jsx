

import React from "react";
import "./CollegeRules.scss";
import ruleIcon from "../../assets/law.jpg"; // optional small icon
import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";

const rules = [
  "Respect and Decorum Students must always address teachers respectfully as “Sir/Madam/Professor.",
  "Stand up and greet the teacher at the beginning and end of the class (if customary).",
  "Avoid interrupting when the teacher is speaking; raise your hand for permission to speak.",
  "Obedience and Discipline Follow all academic instructions, class schedules, and directions given by teachers.",
  "Do not argue or show disobedience; differences of opinion should be discussed politely.",
  "Punctuality and Attendance Be on time for every lecture; late entry is discouraged.",
  "Do not leave class without permission from the teacher.",
  "Communication Etiquette Use polite, professional language when interacting with teachers.",
  "Academic queries through emails, messages, or calls must be formal and restricted to official hours.",
  "Academic Honesty Complete assignments, moot preparations, and research sincerely.",
  "Never involve teachers in requests for unfair marks, favors, or malpractice.",
  "Gratitude and Courtesy Show appreciation for teachers’ guidance and efforts.",
  "Participate actively in class to encourage a healthy teaching–learning environment.",
  "Confidentiality & Trust Respect the privacy of teachers; avoid spreading rumors or personal remarks.",
  "Students must treat all teachers with courtesy, dignity, and respect both inside and outside the classroom.",
  "Disrespectful or inappropriate behavior towards faculty will not be tolerated.",
  "Students can contact teachers during working hours (9:00 AM-5.00PM), teachers personal time should be considered unless emergency.",
  "Do not misuse teacher’s notes, lectures, or discussions without permission.",
  "Professional Conduct Maintain proper dress code and wear ID cards when attending lectures.",
  "Do not engage in behavior that insults, humiliates, or undermines faculty members.",
  "Conflict Resolution If there is a grievance, approach the teacher respectfully first.",
  "If unresolved, bring it to the notice of the Head of Department/Principal rather than disrespecting the teacher.",
  "If unresolved, bring it to the notice of the Head of Department/Principal rather than disrespecting the teacher.",
  "Role as Law Students Remember that teachers are mentors and role models in legal education.",
  "Uphold values of discipline, honesty, and respect that are expected in the legal profession.",
];

const StudentsTowardsTeachers = () => {
  return (
    <>
    <SectionTitle2 title="Students Towards Teachers" />

    <div className="college-rules-page">
      {/* <h1 className="page-title">College Rules</h1> */}
      <div className="rules-grid">
        {rules.map((rule, idx) => (
          <div className="rule-card" key={idx}>
            <div className="rule-number">{idx + 1}</div>
            <div className="rule-text">{rule}</div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default StudentsTowardsTeachers;
