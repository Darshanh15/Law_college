import React from "react";
import "./AntiRaggingPage.scss";
import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";
import ragging from '../../assets/ragging/anti-ragging-cell.jpg'

const CommitteeRow = ({ title, role }) => (
  <div className="arc__row">
    <div className="arc__cell arc__cell--title">{title}</div>
    <div className="arc__cell">{role}</div>
  </div>
);

export default function AntiRaggingPage() {
  return (
      <main className="arc">
        <SectionTitle2 title="Anti‑Ragging Committee Policy" />
      {/* <header className="arc__header">
        <h1 className="arc__title">Anti‑Ragging Committee</h1>
        <p className="arc__subtitle">Bengaluru Law College — Zero tolerance policy</p>
      </header> */}

      <section className="arc__grid">

        <article className="arc__card arc__card--img">
          {/* <h2 className="card__title">Objective</h2> */}
          <img src={ragging} alt="" />
        </article>

        <article className="arc__card arc__card--info">
          <h2 className="card__title">Objective</h2>
          <p>
            To maintain a ragging‑free campus environment by preventing, prohibiting,
            and punishing all acts of ragging in or outside the institution in
            accordance with UGC (2009), Karnataka Education Act (Sec.116) and
            Supreme Court directives.
          </p>
        </article>

        <article className="arc__card arc__card--duties">
          <h3 className="card__title">Duties & Functions</h3>
          <ul>
            <li>Ensure strict implementation of the Anti‑Ragging Policy campus‑wide.</li>
            <li>Oversee awareness programmes, orientation and affidavit collection.</li>
            <li>Receive and examine complaints; conduct prompt, fair enquiries.</li>
            <li>Recommend disciplinary or legal action when required.</li>
            <li>Coordinate with police when criminal offences are involved.</li>
            <li>Maintain records and submit annual reports.</li>
          </ul>
        </article>

        <article className="arc__card arc__card--measures">
          <h3 className="card__title">Preventive Measures</h3>
          <ol>
            <li>Display "Ragging is a Criminal Offence" posters prominently.</li>
            <li>Orientation & counselling sessions for freshers and seniors.</li>
            <li>Obtain affidavits from students and parents during admission.</li>
            <li>24×7 helpline / emergency contact and CCTV surveillance.</li>
            <li>Surprise inspections of hostels and common areas.</li>
            <li>Include anti‑ragging message in student handbooks and induction materials.</li>
          </ol>
        </article>

        <article className="arc__card arc__card--reporting">
          <h3 className="card__title">Reporting & Redressal</h3>
          <p>
            Any student may lodge a complaint in writing or by email to the Nodal Officer / Principal. The
            Committee will meet within <strong>48 hours</strong> of receiving the complaint and conduct a
            confidential enquiry granting both parties a fair hearing.
          </p>
          {/* <p className="arc__small">Complainants are protected against victimisation or retaliation.</p> */}
        </article>

        <article className="arc__card arc__card--disciplinary">
          <h3 className="card__title">Disciplinary Actions (as per UGC norms)</h3>
          <ul>
            <li>Suspension from classes / academic privileges</li>
            <li>Debarring from examinations; withholding results/scholarships</li>
            <li>Expulsion from hostel or rustication from college</li>
            <li>Cancellation of admission</li>
            <li>Filing of FIR and legal proceedings</li>
          </ul>
        </article>

        <article className="arc__card arc__card--squad">
          <h3 className="card__title">Anti‑Ragging Squad</h3>
          <p>
            A separate squad functions under the Committee to maintain vigilance and conduct surprise inspections in areas
            like hostels, classrooms, corridors and other vulnerable areas.
          </p>
        </article>

        <article className="arc__card arc__card--awareness">
          <h3 className="card__title">Awareness & Review</h3>
          <p>
            The ARC meets at least once every semester or as required. Regular awareness drives, seminars and competitions are
            organised to reinforce a ragging‑free culture.
          </p>
        </article>



       

        <article className="arc__card arc__card--committee">
          <h3 className="card__title">Composition of the Committee</h3>
          <div className="committee">
            <CommitteeRow title="Principal / Head of Institution" role="Dr. Devika.S.Ajila" />
            <CommitteeRow title="Senior Faculty Members" role="Smt. Bhavya N" />
            {/* <CommitteeRow title="Hostel Warden(s)" role="Members" /> */}
            <CommitteeRow title="Representative from Non‑Teaching Staff" role="Smt. Rashmishree M Shetty" />
            <CommitteeRow title="Representative from Parents" role="Sri. Venkatesha" />
            <CommitteeRow title="Student Representatives" role="Sri Deelip Jaganatha Rao/ Smt Rajeshwari" />
            <CommitteeRow title="Local Police / NGO Representative" role="Basaweswara Nagara Police Staion" />
            <CommitteeRow title="Anti‑Ragging Nodal Officer" role="Smt. Shreya Gopi" />
          </div>
          {/* <p className="arc__small">(Note: Names & contacts should be displayed on the notice board and website.)</p> */}
        </article>

                <article className="arc__card arc__card--declaration">
          <h3 className="card__title">Declaration</h3>
          <blockquote className="declaration">
            "Bengaluru Law College follows a zero‑tolerance policy towards ragging. Any act of ragging shall invite strict
            disciplinary action and may result in expulsion and criminal prosecution."
          </blockquote>
        </article>

        
         <aside className="arc__card arc__card--helpline">
          <h3 className="card__title">Helpline & Support</h3>
          <div className="helpline">
            <div className="helpline__item">
              <strong>UGC National Anti‑Ragging Helpline</strong>
              <div className="helpline__value">1800‑180‑5522</div>
            </div>
            <div className="helpline__item">
              <strong>Email</strong>
              <div className="helpline__value">helpline@antiragging.in</div>
            </div>
            <div className="helpline__item">
              <strong>Website</strong>
              <div className="helpline__value">www.antiragging.in</div>
            </div>
            {/* <div className="helpline__note">Institutional Nodal Officer Contact: <em>(Fill details)</em></div> */}
          </div>
        </aside>

        
      </section>

      {/* <footer className="arc__footer">
        <p>Last updated: <span className="muted">(Fill date)</span></p>
        <div className="arc__actions">
          <button className="btn btn--primary">Download Policy (PDF)</button>
          <button className="btn">Print</button>
        </div>
      </footer> */}
    </main>
  );
}

