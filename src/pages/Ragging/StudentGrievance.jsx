import React from "react";
import "./StudentGrievance.scss";
import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";
import img from '../../assets/ragging/studentgraviance.png'
export default function StudentGrievance() {
  return (
    <>
      <SectionTitle2 title="Student Grievance" />
      <section className="sg__grid">
        <article className="sg__card sg__card--img">
          {/* <h2 className="card__title"></h2> */}
          <img src={img} alt="" />
        </article>
        <div className="sg__card sg__card--1">
          {/* <h2 className="card__title"></h2> */}
          <p>
            The Students’ Grievance Redressal Cell (SGRC) of Bengaluru Law College has been established in accordance with the guidelines of the University Grants Commission (UGC) (Redressal of Grievances of Students) Regulations, 2023 and Karnataka State Law University directives.
The Cell functions with the objective of promoting a harmonious educational environment, ensuring that all grievances of students are addressed promptly, fairly, and transparently.
          </p>
        </div>
        <div className="sg__card sg__card--2">
          <h2 className="card__title">Objectives</h2>
          <p>
            The primary objectives of the Students’ Grievance Redressal Cell are:

To provide a mechanism for students to voice their concerns and seek redressal regarding academic and non-academic matters.

To ensure that grievances are resolved in a fair, unbiased, and confidential manner.

To create a positive, respectful, and student-friendly atmosphere on campus.

To prevent harassment, discrimination, or unfair treatment within the institution.

To develop an attitude of responsibility and accountability among students, faculty, and staff.
          </p>
        </div>
        <div className="sg__card sg__card--3">
          <h2 className="card__title">Scope of Grievances</h2>
          <p>
            The Cell shall consider grievances related to:

Academic Matters – Admission, examination, assessment, attendance, internal marks, etc.

Infrastructure and Facilities – Classroom environment, library, canteen, sanitation, hostels, and internet facilities.

Behavioral Issues – Harassment, unfair treatment by staff or peers, or any form of discrimination.

Administrative Issues – Delay in services such as certificates, scholarships, or official documents.

General Student Welfare – Any matter affecting the well-being or dignity of students.

Note: Issues relating to ragging, sexual harassment, or caste discrimination are handled separately by the Anti-Ragging Committee, Internal Complaints Committee (ICC), and SC/ST/OBC Grievance Cell respectively.
          </p>
        </div>
        <div className="sg__card sg__card--4">
          <h2 className="card__title">Composition of the Cell</h2>
          <p>
            The Students’ Grievance Redressal Cell shall consist of the following members:

Designation	Role
Principal	Chairperson
Senior Faculty Member	Coordinator / Convenor
Two Faculty Members	Members
Student Representatives (One Male & One Female)	Members
Administrative Staff Member	Member Secretary

The Cell shall be reconstituted every academic year.
          </p>
        </div>
        {/* <div className="sg__card sg__card--committee">
          <h2 className="card__title">Composition of the Cell</h2>
          <p>The SC/ST/OBC Grievance Cell shall comprise the following members:</p>
          <div className="committee">
            <CommitteeRow title="Designation Role" role="" />
            <CommitteeRow title="Principal	Chairperson" role="" />
            <CommitteeRow title="Senior Faculty Member (preferably from SC/ST/OBC)" role="" />
            <CommitteeRow title="Coordinator / Nodal Officer" role="" />
            <CommitteeRow title="Two Faculty Members" role="" />
            <CommitteeRow title="One Non-Teaching Staff Representative	Member" role="" />
            <CommitteeRow title="Student Representatives (SC/ST/OBC)	Members" role="" />
          </div>
        </div> */}
        <div className="sg__card sg__card--6">
          <h2 className="card__title">Functions of the Cell</h2>
          <p>
            The Cell shall:

Receive, examine, and address grievances from students in a confidential and impartial manner.

Provide advice and counseling to students regarding institutional procedures.

Maintain a Grievance Register and track the status of each case.

Recommend corrective measures to the Principal for quick resolution.

Conduct orientation programs and awareness sessions to promote open communication and mutual respect.
          </p>
        </div>
        <div className="sg__card sg__card--7">
          <h2 className="card__title">Procedure for Redressal</h2>
          <p>
            Filing of Complaint:

A student may submit a written complaint addressed to the Convener/Coordinator.

Alternatively, grievances may be submitted via email to the official grievance address or online form available on the college website.

Acknowledgment:

The Cell shall acknowledge receipt of the complaint within 7 working days.

Inquiry & Resolution:

The Cell will review and resolve the issue within 30 working days, ensuring a fair hearing to all parties.

Appeal:

If the student is unsatisfied, they may appeal to the Principal or the University-level Grievance Committee.

Confidentiality:

The details and identity of the complainant shall remain confidential throughout the process.
          </p>
        </div>
        <div className="sg__card sg__card--8">
          <h2 className="card__title">Meeting and Reporting</h2>
          <p>
            The Cell shall meet at least once every semester and as and when grievances are received.

An annual report summarizing grievances received, resolved, and pending shall be submitted to the Principal and maintained in institutional records.</p>
        </div>
        <div className="sg__card sg__card--9">
          <h2 className="card__title">Awareness and Display</h2>
          <p>
            Details of the Students’ Grievance Cell, including names, designations, and contact details of members, shall be displayed on the college notice board and website.

The Cell shall also conduct awareness programs to encourage students to utilize the redressal mechanism without hesitation.
          </p>
        </div>
        {/* <div className="sg__card sg__card--10">
          <h2 className="card__title">Contact Information</h2>
          <p>
            STUDENTS’ GRIEVANCE REDRESSAL CELL
Bengaluru Law College
Email: [Insert grievance cell email]
Nodal Officer / Coordinator: Smt. Shreya Gopi
Office Hours: 10:00 AM – 4:00 PM (Working Days)</p>
        </div> */}
        {/* <div className="sg__card sg__card-11">
          <h2 className="card__title">Commitment</h2>
          <p>
           Bengaluru Law College is committed to providing an open, fair, and empathetic environment for all its students.
The institution upholds the values of justice, equality, and transparency to ensure that every student’s voice is heard and respected.</p>
        </div> */}
      </section>
    </>
  );
}
