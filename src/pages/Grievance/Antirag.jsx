import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './Antirag.scss'

import s1 from "../../assets/Pdf/complance/anti-ragging-poster.pdf";
import s2 from "../../assets/Pdf/complance/student.pdf";
// import s2 from "../../../assets/Pdf/complance/student.pdf";


const subjects = [
  // {
  //   name: "Anti-Ragging-Poster",
  //   fileId: s1,
  // },
    {
      name: "Student Redressal Grievance Cell",
      fileId: s2,
    },
];



function Antirag() {
  return (
        <div className="container-fluid syllabus-container">
  {/* <h3 className="text-center my-4">LIST OF SYLLABUS</h3> */}
  <div className="row justify-content-center">
    {subjects.map((subject, index) => (
      <div className="col-12 col-lg-10 mb-5 text-center" key={index}>
        <h5 className="text-center mb-3">{subject.name}</h5>
        <iframe
          src={subject.fileId}
          className="syllabus-iframe"
          title={subject.name}
        />
      </div>
    ))}
  </div>
</div>
  )
}

export default Antirag