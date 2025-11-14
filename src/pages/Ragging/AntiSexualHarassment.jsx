import React from "react";
import "./AntiSexualHarassment.scss";
import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";
import img from '../../assets/ragging/antisexuel.png'

export default function AntiSexualHarassment() {
  return (
    <>
      <SectionTitle2 title="Anti Sexual Harassment" />
      <section className="ash__grid">
        <article className="ash__card ash__card--img">
          {/* <h2 className="card__title">Objective</h2> */}
          <img src={img} alt="" />
        </article>
        <div className="ash__card ash__card--1">
          {/* <h2 className="card__title"></h2> */}
          <p>
            The Government of India has notified the Sexual Harassment of Women at the Workplace (Prevention, Prohibition Redressal) Act, 2013 (“Act”) and the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Rules, 2013 (“Rules”). Both the Act and the Rules have come into force with effect from December 9, 2013. The Act and the Rules were both drawn up and passed in furtherance to the guidelines as laid down by the Supreme Court of India in the matter of Vishaka v. State of Rajasthan, to ensure that women, in particular, are protected against Sexual Harassment at all work places, be it in public or private, and to create work environments that recognizes right to gender equality, life and liberty and equality in working conditions everywhere.
          </p>
        </div>
        <div className="ash__card ash__card--2">
          {/* <h2 className="card__title"></h2> */}
          <p>
            Bengaluru Law College is firmly committed to creating and maintaining a safe, respectful, and inclusive environment for all its students, faculty, and staff. The institution upholds the principles of equality, dignity, and respect and follows a zero-tolerance policy towards any form of sexual harassment. This policy is framed in accordance with the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 and the UGC (Prevention, Prohibition and Redressal of Sexual Harassment of Women Employees and Students in Higher Educational Institutions) Regulations, 2015.
          </p>
        </div>
        <div className="ash__card ash__card--3">
          <h2 className="card__title">Objectives</h2>
          <p>
            To prevent any form of sexual harassment within the college premises
            and related activities. To provide a safe and supportive environment
            where everyone feels respected and protected. To ensure prompt,
            fair, and confidential redressal of complaints. To create awareness
            about gender sensitivity and promote mutual respect.
          </p>
        </div>
        <div className="ash__card ash__card--4">
          <h2 className="card__title">Scope</h2>
          <p>
            All students, teaching and non-teaching staff, and visitors. All
            academic, administrative, and extracurricular spaces on the college
            campus. Any event or activity conducted outside the campus but
            organized or supported by the college (moot courts, internships,
            seminars, study tours, etc.).
          </p>
        </div>
        <div className="ash__card ash__card--5">
          <h2 className="card__title">Definition of Sexual Harassment</h2>
          <p>
            As per the Act and UGC regulations, sexual harassment includes any
            unwelcome act or behavior (directly or by implication) such as:
            Physical contact and advances. Demand or request for sexual favors.
            Making sexually colored remarks or jokes. Showing pornography or
            sexually explicit content. Any other unwelcome physical, verbal, or
            non-verbal conduct of a sexual nature.
          </p>
        </div>
        <div className="ash__card ash__card--6">
          <h2 className="card__title">Functions of ICC</h2>
          <p>
            To receive and address complaints of sexual harassment. To conduct
            inquiries following due process and confidentiality. To recommend
            appropriate action against the offender based on findings. To
            organize gender-sensitization and awareness programs regularly. To
            submit annual reports to the management and relevant authorities.
          </p>
        </div>
        <div className="ash__card ash__card--7">
          <h2 className="card__title">Complaint Procedure</h2>
          <p>
            Filing of Complaint: A complaint should be submitted in writing to
            the ICC within 3 months of the incident. The complainant may seek
            help from a faculty advisor or committee member in drafting the
            complaint. Inquiry Process: The ICC conducts a fair, unbiased, and
            confidential inquiry. Both parties are given an equal opportunity to
            present their case. Action Taken: Based on the findings, the ICC
            recommends suitable action — which may include written apology,
            warning, suspension, termination, or other disciplinary measures.
            Confidentiality: The identity of the complainant and witnesses is
            strictly protected throughout the process. Awareness and
            Sensitization Bengaluru Law College regularly organizes: Orientation
            sessions for new students on gender sensitivity and legal rights.
            Workshops and seminars on POSH Act, 2013 and gender justice. Poster
            campaigns and awareness drives to promote respectful behavior on
            campus.
          </p>
        </div>
        <div className="ash__card ash__card--8">
          <h2 className="card__title">Support and Counseling</h2>
          <p>
            The college ensures emotional and psychological support to victims through counseling sessions and peer guidance. The institution stands by every student and staff member to ensure justice, fairness, and dignity.
          </p>
        </div>
        <div className="ash__card ash__card--9">
          <h2 className="card__title">Declaration</h2>
          <p>
            Bengaluru Law College believes that education thrives in an environment of mutual trust and respect. By enforcing a strict Anti-Sexual Harassment Policy and fostering awareness, the institution aims to build a culture of equality, accountability, and integrity.
          </p>
        </div>
      </section>
    </>
  );
}
