import React from "react";
import "./UGCAntiRaggingPage.scss";
import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";
import ugcfile from "../../assets/Pdf/ragging/ugcfile.pdf";
import ugc from "../../assets/Pdf/udc.png";
import ragging1 from "../../assets/Pdf/complance/img (1).jpeg";
import ragging2 from "../../assets/Pdf/complance/img (2).jpeg";
import ragging3 from "../../assets/Pdf/complance/img (3).jpeg";
import ragging4 from "../../assets/Pdf/complance/img (4).jpeg";

export default function UGCAntiRaggingPage() {
  return (
    <main className="ugcrc">
      <SectionTitle2 title="UGC Anti-Ragging Policy" />
      <section className="ugcrc__grid">
        <article className="ugcrc__card ugcrc__card--info">
          <h2 className="card__title">UGC Anti-Ragging Policy</h2>
          <p>
            It is brought to your kind notice that ragging is a criminal offence
            and UGC has framed Regulations on Curbing the Menace of Ragging in
            Higher Educational Institutions in order to prohibit, prevent and
            eliminate the scourge of ragging. These Regulations are mandatory
            and all institutions are required to take necessary steps for its
            implementation including the monitoring mechanism as per provisions
            in the regulations and ensure its strict compliance. This is in
            pursuance to the Judgment of the Hon'ble Supreme Court of India
            dated 8.5.2009 in Civil Appeal No. 887/2OO9. It is compulsory for
            each student and his/her parent/Guardian to submit an online
            undertaking each academic year at either of the two designated
            websites, namely, www.antiragging.in and www.amanmovement.org The
            student will receive an E-Mail with his/her registration number and
            web link after the submission from the UGC Team. The student has to
            share the Anti Ragging Registration Reference Number and received
            E-Mail to the concerned body of the college.
          </p>
        </article>

        {/* <article className="ugcrc__card ugcrc__card--pdf">
          <h2 className="card__title">UGC Anti-Ragging Policy</h2>
         <div className="ugcrc__actions">
          <button className="btn btn--primary">{ugcfile} Download Policy (PDF)</button>
          <button className="btn">{ugcfile} Print</button>
        </div>
        </article> */}

        <article className="ugcrc__card ugcrc__card--pdf">
          <div className="ugcrc__actions">
            <h2 className="card__title">
              Steps to register you on the UGC websites.
            </h2>

            {/* ✅ Download Button */}
            <a href={ugcfile} download="UGC-Anti-Ragging-Policy.pdf">
              <button className="btn btn--primary">
                Download Policy (PDF)
              </button>
            </a>
          </div>
        </article>

        <article className="ugcrc__card ugcrc__card--img">
          {/* <h2 className="card__title">Objective</h2> */}
          <img src={ugc} alt="" />
        </article>
        <article className="ugcrc__card ugcrc__card--img1">
          {/* <h2 className="card__title">Objective</h2> */}
          <img src={ragging3} alt="" />
        </article>
                <article className="ugcrc__card ugcrc__card--img2">
          {/* <h2 className="card__title">Objective</h2> */}
          <img src={ragging1} alt="" />
         
        </article>
                <article className="ugcrc__card ugcrc__card--img3">
          {/* <h2 className="card__title">Objective</h2> */}
          <img src={ragging2} alt="" />
        </article>
                <article className="ugcrc__card ugcrc__card--img4">
          {/* <h2 className="card__title">Objective</h2> */}
          <img src={ragging4} alt="" />
        </article>
    
      </section>
    </main>
  );
}
