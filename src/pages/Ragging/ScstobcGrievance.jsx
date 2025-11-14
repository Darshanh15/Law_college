import React from 'react'
import './ScstobcGrievance.scss'
import SectionTitle2 from '../../components/SectionTitle/SectionTitle2'
import img from '../../assets/ragging/SC-ST-OBC-Cell.jpg'

const CommitteeRow = ({ title, role }) => (
  <div className="arc__row">
    <div className="arc__cell arc__cell--title">{title}</div>
    <div className="arc__cell">{role}</div>
  </div>
);

export default function ScstobcGrievance() {
  return (
    <>
      <SectionTitle2 title="SC / ST / OBC Grievance" />
          <section className="sso__grid">
        <article className="sso__card sso__card--img">
          {/* <h2 className="card__title">Objective</h2> */}
          <img src={img} alt="" />
        </article>
        <div className="sso__card sso__card--1">
          {/* <h2 className="card__title"></h2> */}
          <p>
            The SC/ST/OBC Grievance Redressal Cell of Bengaluru Law College has been established in accordance with the directives of the University Grants Commission (UGC) and Government of India to promote equality, social justice, and inclusiveness within the institution.
        </p>
        </div>
        <div className="sso__card sso__card--2">
          {/* <h2 className="card__title"></h2> */}
          <p>
            The Cell aims to safeguard the interests of students, teaching, and non-teaching staff belonging to Scheduled Castes (SC), Scheduled Tribes (ST), and Other Backward Classes (OBC) and to provide a platform for redressal of grievances related to discrimination or denial of equal opportunities.
            </p>
        </div>
        <div className="sso__card sso__card--3">
          <h2 className="card__title">Objectives</h2>
          <p>
            The main objectives of the SC/ST/OBC Grievance Redressal Cell are:

To ensure protection against discrimination based on caste, creed, or community.

To promote awareness among students and staff regarding the constitutional provisions for SC/ST/OBC communities.

To provide a mechanism for redressal of grievances relating to admission, academic matters, scholarships, or any other injustice faced by SC/ST/OBC members.

To ensure implementation of reservation policies in admissions, appointments, and other benefits as per Government and University regulations.

To maintain harmony and equality among all students and employees in the institution.
          </p>
        </div>
        <div className="sso__card sso__card--4">
          <h2 className="card__title">Legal Framework</h2>
          <p>
            The functioning of the Cell is guided by the following:

The Constitution of India (Articles 15(4), 17, and 46)

The Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act, 1989

UGC (Promotion of Equity in Higher Educational Institutions) Regulations, 2012

AICTE/UGC Guidelines for Establishment of Grievance Redressal Mechanisms

Relevant notifications of the Karnataka State Law University (KSLU)
          </p>
        </div>
        {/* <div className="sso__card sso__card--committee">
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
        <div className="sso__card sso__card--6">
          <h2 className="card__title">Functions of the Cell</h2>
          <p>
           The Cell shall:

Receive and address complaints from SC/ST/OBC students and staff regarding:

Discrimination in classroom, examination, or evaluation.

Harassment, bias, or denial of opportunities.

Delay in scholarship disbursal or benefit allocation.

Violation of reservation norms in recruitment/admissions.

Ensure confidentiality and impartiality in all grievance proceedings.

Recommend corrective and preventive actions to the Principal or College Management.

Conduct awareness and sensitization programs on:

Caste equality and inclusion.

Legal rights and welfare schemes for SC/ST/OBC communities.

Maintain a register of complaints and resolutions, and prepare an annual report for submission to the Principal and University authorities.
          </p>
        </div>
        <div className="sso__card sso__card--7">
          <h2 className="card__title">Procedure for Grievance Redressal</h2>
          <p>
            <strong>Submission:</strong>
The aggrieved individual may submit a written complaint to the Nodal Officer or email it to the Cell’s official address.

<br /><strong>Acknowledgment:</strong>
The Cell shall acknowledge the complaint within 7 working days.

<br /><strong>Inquiry:</strong>
A fair and confidential inquiry shall be conducted within 30 days.

<br /><strong>Action:</strong>
Based on findings, recommendations will be made to the Principal for appropriate action.

<br /><strong>Confidentiality:</strong>
The identity and details of the complainant shall be kept strictly confidential.
Awareness & Outreach

The Cell will organize orientation sessions, workshops, and lectures to promote social harmony and educate students about their rights and available welfare schemes.

The details of the Cell, including contact information, will be displayed on the college notice boards and website.
          </p>
        </div>
        {/* <div className="sso__card sso__card--8">
          <h2 className="card__title">Support and Counseling</h2>
          <p>
            The college ensures emotional and psychological support to victims through counseling sessions and peer guidance. The institution stands by every student and staff member to ensure justice, fairness, and dignity.
          </p>
        </div> */}
        <div className="sso__card sso__card--9">
          <h2 className="card__title">Commitment</h2>
          <p>
            Bengaluru Law College believes that education thrives in an environment of mutual trust and respect. By enforcing a strict Anti-Sexual Harassment Policy and fostering awareness, the institution aims to build a culture of equality, accountability, and integrity.
          </p>
        </div>
      </section>
    </>
  )
}
