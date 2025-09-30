//     import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./QuestionPaperArchives.scss"
// import s1 from "../../../assets/Pdf/sylobus/3y.pdf"
// import s2 from "../../../assets/Pdf/sylobus/5y.pdf"

// const subjects = [
//   {
//     // name: "Subject 1",
//     fileId: "1hV5KWliI4odgfY4keUWQ0vA4PynVNZ2A",
//   },
//   {
//     // name: "Subject 2",
//     fileId: "1joUd5r1H1c5QitMoCgqepfHI95XZVV8J",
//   }
// ];

// const QuestionPaperArchives = () => {
//   return (
//     <div className="container-fluid">
//       <h3 className="text-center my-4">LIST OF SYLLABUS</h3>
//       <div className="row">
//         {subjects.map((subject, index) => (
//           <div className="col-lg-6 mb-4" key={index}>
//             <h5 className="text-center">{subject.name}</h5>
//             <iframe
//               src={`https://drive.google.com/file/d/${subject.fileId}/preview`}
//               className="w-100"
//               style={{ height: "90vh", border: "none" }}
//               title={subject.name}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default QuestionPaperArchives;


import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./QuestionPaperArchives.scss";

import s1 from "../../../assets/Pdf/sylobus/3y.pdf";
import s2 from "../../../assets/Pdf/sylobus/5y.pdf";

const subjects = [
  {
    name: "3 Year LLB Syllabus",
    fileId: s1,
  },
  {
    name: "5 Year LLB Syllabus",
    fileId: s2,
  },
];

const QuestionPaperArchives = () => {
  return (
    <div className="container-fluid">
      <h3 className="text-center my-4">LIST OF SYLLABUS</h3>
      <div className="row">
        {subjects.map((subject, index) => (
          <div className="col-lg-6 mb-4" key={index}>
            <h5 className="text-center mb-3">{subject.name}</h5>
            <iframe
              src={subject.fileId}  
              className="w-100"
              style={{ height: "90vh", border: "none" }}
              title={subject.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionPaperArchives;
