import React from "react";
import "./CollegeRules.scss";
import ruleIcon from "../../assets/law.jpg"; // optional small icon
import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";

const rules = [
"Punctuality & Attendance Arrive on time; late entry should be avoided",
"Attendance in all scheduled classes, labs, tutorials is compulsory (often a minimum percentage is required to appear for exams)",
"If you must miss class for valid reason (illness, emergency), inform the faculty / department in advance and submit required documents.",
"Come to class with all required books, notes, stationery, assignments, and devices (if allowed).",
"Complete and submit assignments, readings or lab work by the deadlines set by the faculty.",
"Respect & DecorumStand and greet the teacher when they enter (if culturally customary).",
"Maintain silence during lectures; avoid unnecessary talk, disruptions, or side conversations.",
"Refrain from eating, chewing gum, or drinking (except water) during class unless permitted.",
"Respect classmates’ views; avoid insults, offensive language, or discriminatory remarks.",
"Use of Electronic Devices Mobile phones, laptops, tablets or other devices should not be used during class except for academic purposes and with permission.",
"If device use is allowed, ensure it does not distract others (turn off sound, notifications).",
"Unauthorized recording/audiotaping of lectures is prohibited unless prior permission is granted.",
"Leaving & Entering the Classroom Do not leave the class mid-session unless it is urgent and with permission.",
"Entering late or leaving early should be done discreetly and minimally disruptive.",
"Use restrooms / breaks between classes when possible.",
"Academic Integrity No form of cheating, plagiarism, copying, unfair means in tests, assignments, or examinations.",
"Always do your own work, and cite sources properly when using external material.",
"Care of Infrastructure & Cleanliness Do not scribble on desks, walls, boards, or damage any property.",
"Dispose of waste properly; maintain cleanliness of classroom space",
"Use furniture and equipment responsibly and with care.", 
"Dress Code / Identity Wear attire consistent with the college’s dress code (if any).",
"If identity cards are issued, wear them visibly on campus.",
"Dress decently and respectfully.",
"Behavior Outside the Classroom (within College Premises) No loitering in corridors or verandahs during class hours.",
"Avoid creating disturbances in neighboring classes or communal areas.",
"Refrain from bringing visitors or outsiders into the campus or classrooms without permission.",
"Prohibition of Ragging, Harassment, Substance Abuse Ragging in any form (verbal, physical, psychological) is strictly prohibited.",
"Harassment, bullying, or discrimination on any ground will be subject to severe disciplinary action.",
"Consumption or possession of alcohol, drugs, tobacco, or other prohibited substances on campus is banned.",
"Follow Notices & Instructions Regularly check notice boards (physical or digital) for announcements, deadlines, or schedule changes.",
"Adhere to instructions from faculty, department heads, or administrative authorities",
"Consequences for Violations Repeated or serious breaches of rules may lead to warnings, fines, suspension, or expulsion (as per the college’s disciplinary policy).",
"Damages to college property may incur cost recovery.",
"In extreme cases, involvement of higher authorities or legal action might follow (e.g. in cases of ragging or harassment).",
];

const ClassRules = () => {
  return (
    <>
    <SectionTitle2 title="Class Rules" />

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

export default ClassRules;
