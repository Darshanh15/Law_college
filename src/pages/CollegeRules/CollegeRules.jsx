import React from "react";
import "./CollegeRules.scss";
import ruleIcon from "../../assets/law.jpg"; // optional small icon
import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";

const rules = [
  "Identity Card All students must carry/display the college ID card at all times inside campus If lost, apply for replacement with prescribed fee.",
  "Attendance Minimum attendance required (often about 70-75%) to appear for terminal/external exams. Regular attendance in lectures, tutorials, moot court, guest lectures etc.",
  "Dress Code / Uniform Students are expected to maintain decent/professional attire. For formal events, court visits etc., wear black & white formals or other prescribed dress.",
  "Punctuality & Discipline Be on time for classes & college activities. No loitering or making noise in corridors during class hours.",
  "Behaviour Respect for faculty, staff, and other students. Polite conduct expected. No violence, harassment, bullying, or ragging.",
  "Use of Mobile Phones & Electronic Devices Switch off or keep phones silent during class and library. Not allowed in exams or certain formal events.",
  "Examinations & Internal Assessment Students must complete internal assessments, assignments, seminars etc. Academic honesty is required — no cheating or malpractice is allowed.",
  "College Property & Cleanliness Treat college property with care; damaging furniture, equipment etc. will incur penalties. Keep campus clean — no littering, spitting etc.",
  "Permission for Activities / Meetings Any student activity (clubs, guest lecture, tours etc.) must have prior permission from college/Principal.Meetings or functions must follow college rules.",
  "Punishments for Violation Warning or fine. Withholding of scholarship or certificates. Suspension, rustication or expulsion in serious cases.",
  "Notice Board & Information Students must regularly check notice board / college portal for announcements.",
  "Compliance with University / Bar Council Rules Must follow the academic and regulatory rules prescribed by the affiliating University & Bar Council of India. For example: requisite attendance, exam rules, use of approved course material.",
  "Prohibited Items / Activities Smoking, alcohol, narcotics are strictly not allowed on campus. Carrying or using unauthorized material during exams."
];

const CollegeRules = () => {
  return (
    <>
    <SectionTitle2 title="College Rules" />

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

export default CollegeRules;
