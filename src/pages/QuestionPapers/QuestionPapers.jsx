import React from "react";
import "./QuestionPapers.scss";
import QuestionPaperArchives from "./QuestionPaperArchives/QuestionPaperArchives";
import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";

const subjects = [
// {
//     name: "Administrative Law",
//     link: "https://drive.google.com/drive/folders/1If1fQcMUgUObVCm40FEOo8c-tFbDE_6_",
//   },


//   {
//     name: "Family Law",
//     link: "https://drive.google.com/drive/folders/1uUv-Bz42nSXezVsq8vIXSFQewGsYsfYK",
//   },
//   {
//     name: "Penology & Victimology",
//     link: "https://drive.google.com/drive/folders/1SZKGlzM8djmJ4CgELa5rsoDgpzk3oFex",
//   },
//   {
//     name: "Interpretation of Statute",
//     link: "https://drive.google.com/drive/folders/1VQQ8SrllnJ2yNdG_QW5IJJdp0NGTVnnT",
//   },
//   {
//     name: "Legal method",
//     link: "https://drive.google.com/drive/folders/16hQ73A5Ce1gr15y0CWULNMFHCp54u9ej",
//   },
//   {
//     name: "Labour law",
//     link: "https://drive.google.com/drive/folders/1wXIWE6tvN5lX9CWbHtTEXgZoYRjfsaJb",
//   },
//   {
//     name: "Contract",
//     link:"https://drive.google.com/drive/folders/1Upt84dAsE-PmSrdh-Lowc2at1I0JfPug"
//   },
//   {
//     name: "Jurisprudence",
//     link: "https://drive.google.com/drive/folders/1ShwdV6xbxu0iZMWb4Oqiod6Tk9ejQgbS"
//   }

{
  name: "Administrative law",
  link: "https://drive.google.com/drive/folders/1If1fQcMUgUObVCm40FEOo8c-tFbDE_6_"
},
{
  name: "Alternative Dispute Resolution",
  link: "https://drive.google.com/drive/folders/1av4L6TqSnUaR9ak9Pt6DorIB2a4EDzWI"
},
{
  name: "Banking law",
  link: "https://drive.google.com/drive/folders/1DrGz3BAgfH-jkQKXobJVEf3t10zbgMKF"
},
{
  name: "Civil Procedure Code",
  link: "https://drive.google.com/drive/folders/1zvThK_Yy-Q370tRI6u_acq0MKHsmXJb4"
},
{
  name: "Company law",
  link: "https://drive.google.com/drive/folders/11RCD9qa1UGYlqSIrQp2dQ3zRiXyo5-F2"
},
{
  name: "Competition law",
  link: "https://drive.google.com/drive/folders/1tK-_AUwXOZ77oSTxR5ZHo7Cf8psI3MnT"
},
{
  name: "Constitution law",
  link: "https://drive.google.com/drive/folders/12uYLQQqx9NeRiiQB5kyoaZbIj1Ae8Al6"
},
{
  name: "Contract",
  link: "https://drive.google.com/drive/folders/1Upt84dAsE-PmSrdh-Lowc2at1I0JfPug"
},
{
  name: "Criminal law II / BNSS",
  link: "https://drive.google.com/drive/folders/1dabrgqfbGWF-8PywZ9BKL0ycMZdCMbll"
},
{
  name: "Economics",
  link: "https://drive.google.com/drive/folders/1JFfxjLye7n4ybavN1jbi4gK1aZOL7Ir4"
},

{
  name: "Environmental law",
  link: "https://drive.google.com/drive/folders/1zMMSZJOIqJdHRJ5F8CUqnAICnofYGMYF"
},
{
  name: "Family law I",
  link: "https://drive.google.com/drive/folders/1uUv-Bz42nSXezVsq8vIXSFQewGsYsfYK"
},
{
  name: "Family law II",
  link: "https://drive.google.com/drive/folders/12fbX71RKco39v-qYX_XeefHLarTn9tOt"
},

{
  name: "Human rights",
  link: "https://drive.google.com/drive/folders/1l47CD_e-AKDfPop_xbzGkc66-5KxjYP5"
},
{
  name: "Insurance",
  link: "https://drive.google.com/drive/folders/1Fi7sP83Q-ob0RlokDYbEkE_yjYEO_u4-"
},
{
  name: "Intellectual property",
  link: "https://drive.google.com/drive/folders/12eXSialK4eYxShBXyK1-7d6AwR6dCMdX"
},
{
  name: "International TRade",
  link: "https://drive.google.com/drive/folders/1Z2LgKbRs4F59L7ukIWwFZrmO2IrTAtzC"
},
{
  name: "Interpretation of statute",
  link: "https://drive.google.com/drive/folders/1VQQ8SrllnJ2yNdG_QW5IJJdp0NGTVnnT"
},
{
  name: "IPC / BNS",
  link: "https://drive.google.com/drive/folders/1_wXjvUZPL95WDd-j1WjEZtJo9qlLxEFN"
},
{
  name: "Jurisprudence",
  link: "https://drive.google.com/drive/folders/1ShwdV6xbxu0iZMWb4Oqiod6Tk9ejQgbS"
},

{
  name: "Labour law",
  link: "https://drive.google.com/drive/folders/1wXIWE6tvN5lX9CWbHtTEXgZoYRjfsaJb"
},
{
  name: "Land law",
  link: "https://drive.google.com/drive/folders/1Itz4ckx_ycLu3KyhSPEJowvydBnXRQx_"
},
{
  name: "Law of Evidence/BSA",
  link: "https://drive.google.com/drive/folders/1wCTi821MiMb8sGLOHrWACH3JKwq3BYP1"
},
{
  name: "Law of TORTS",
  link: "https://drive.google.com/drive/folders/1qCa5Tp8xFL93Ys20l4i1H0qff0yObT9F"
},
{
  name: "Legal method",
  link: "https://drive.google.com/drive/folders/16hQ73A5Ce1gr15y0CWULNMFHCp54u9ej"
},

{
  name: "Penology & Victimology",
  link: "https://drive.google.com/drive/folders/1SZKGlzM8djmJ4CgELa5rsoDgpzk3oFex"
},

{
  name: "PG Cyber law",
  link: "https://drive.google.com/drive/folders/1iN1kx667b7Z6-nfxfvwjcaFebIsKZ3Yk"
},



{
  name: "Public International law",
  link: "https://drive.google.com/drive/folders/1s93b8Lrr50F2dBLYvhZGTp9BHFr1-xlo"
},

{
  name: "RTI",
  link: "https://drive.google.com/drive/folders/1SP4vWDVdAR5tp_DoKpwXRYqJlFyrpyJQ"
},



{
  name: "Taxation law",
  link: "https://drive.google.com/drive/folders/1Jgj-rHKV78tAyxiwBSsJ0_3DjXp67DHW"
},

{
  name: "Transfer of property law",
  link: "https://drive.google.com/drive/folders/1O7-cKUzUxryK8WB3tBCWxJuOS-YmqUc3"
},

{
  name: "White Collar Crimes",
  link: "https://drive.google.com/drive/folders/1gfBhDQIE482qYcvPs9Ch1b-z5pmzXmzQ"
},

{
  name: "Women and Criminal Law",
  link: "https://drive.google.com/drive/folders/1jdySvAxnRhGtkSpnMr4selHsF3rsbT97"
}
];

const QuestionPapers = () => {
  return (
    <>
    <SectionTitle2 title="Question Papers" />
    <div className="question-papers">
      {/* <h2 className="qp-heading">📚 Question Paper Archives</h2> */}
      <div className="folder-container">
        {subjects.map((s, i) => (
          <div key={i} className="flip-entry-info">
            <a href={s.link} target="_blank" rel="noreferrer">
              <div className="flip-entry-visual">
                <div className="flip-entry-visual-card">
                  <div className="flip-entry-icon">📁</div>
                </div>
              </div>
              <div className="flip-entry-title">{s.name}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
    {/* <QuestionPaperArchives /> */}
    </>
  );
};

export default QuestionPapers;
