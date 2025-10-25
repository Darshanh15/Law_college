import React from "react";
import "./Testimonials.scss";
import { useEffect, useRef } from "react";


import Amrutha from '../../assets/student/Amrutha HS.jpeg'
import Divyashree from '../../assets/student/Divyashree.jpeg'
import Swathi from '../../assets/student/Swathi.jpeg'
import Pranathi from '../../assets/student/Pranathi1.png'
import Kajol from '../../assets/student/Kajol vishwanth.jpeg'
import Amrutha1 from '../../assets/student/Amrutha HS.jpeg'
import Vishwanath from '../../assets/student/Vishwanath.jpeg'

const testimonials = [
  {
    name: "Divyashree",
    role: "3years LLB (2021Batch)",
    img: Divyashree,
    feedback:
      `A dedicated and hardworking student with a deep interest in constitutional law.
Actively participates in debates and classroom discussions.
Shows great potential to become a strong legal professional.`
  },
  {
    name: "Swathi",
    role: "3years LLB (2020 Batch)",
    img: Swathi,
    feedback:
      `An enthusiastic learner who consistently completes assignments on time.
Has a clear understanding of legal principles and case analysis.
Displays excellent communication and teamwork skills.`
  },
  {
    name: "Pranathi",
    role: "5years BA LLb (2017 Batch)",
    img: Pranathi,
    feedback:
      `A sincere and disciplined student with a positive attitude.
Shows growing confidence in legal research and presentation skills.
Respects faculty and peers, maintaining a good academic record.`
  },
  {
    name: "Kajol vishwanth",
    role: "5 year BA LLB (2018 Batch)",
    img: Kajol,
    feedback:
      `Highly attentive in class and demonstrates strong analytical thinking.
Takes initiative in moot court activities and academic projects.
A promising student with leadership qualities.`
  }
  ,
  {
    name: "Amrutha HS",
    role: "Batch 2020 5year BA LLB",
    img: Amrutha1,
    feedback:
      `Shows consistent improvement in academics and class participation.
Has a good grasp of legal terminology and drafting.
Cooperative, punctual, and dependable in all academic tasks.`
  }
  ,
  {
    name: "Vishwanath",
    role: "2019 5 years batch",
    img: Vishwanath,
    feedback:
     `A bright and curious learner with an interest in criminal and civil law.
Engages actively in discussions and group activities.
Displays professionalism and enthusiasm in all assignments.`
  }
  ,
  
];

// const Testimonials = () => {
//   return (
//     <section className="testimonials">
//       <h2 className="section-heading">What Our Students Say</h2>
//       <div className="testimonials-container">
//         {testimonials.map((t, index) => (
//           <div className="testimonial-card" key={index}>
//             <div className="testimonial-img">
//               <img src={t.img} alt={t.name} />
//             </div>
//             <p className="testimonial-feedback">“{t.feedback}”</p>
//             <h4>{t.name}</h4>
//             <span className="role">{t.role}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;










// const Testimonials = () => {
//   return (
//     <section className="testimonials">
//       <h2 className="section-heading">What Our Students Say</h2>
//       <div className="testimonials-scroll">
//         {testimonials.map((t, index) => (
//           <div className="testimonial-card" key={index}>
//             <div className="testimonial-img">
//               <img src={t.img} alt={t.name} />
//             </div>
//             <p className="testimonial-feedback">“{t.feedback}”</p>
//             <h4>{t.name}</h4>
//             <span className="role">{t.role}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;









// const Testimonials = () => {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     let scrollAmount = 0;

//     const autoScroll = setInterval(() => {
//       if (scrollContainer) {
//         scrollAmount += 1; // speed (increase for faster)
//         scrollContainer.scrollTo({
//           left: scrollAmount,
//           behavior: "smooth",
//         });

//         // Reset when reaching end
//         if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
//           scrollAmount = 0;
//         }
//       }
//     }, 5); // interval (lower = smoother/faster)

//     return () => clearInterval(autoScroll);
//   }, []);

//   return (
//     <section className="testimonials">
//       <h2 className="section-heading">What Our Students Say</h2>
//       <div className="testimonials-scroll" ref={scrollRef}>
//         {testimonials.map((t, index) => (
//           <div className="testimonial-card" key={index}>
//             <div className="testimonial-img">
//               <img src={t.img} alt={t.name} />
//             </div>
//             <p className="testimonial-feedback">“{t.feedback}”</p>
//             <h4>{t.name}</h4>
//             <span className="role">{t.role}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;












const Testimonials = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let direction = 1; // 1 = right, -1 = left
    let speed = 1;     // pixels per step

    const autoScroll = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += direction * speed;

        // When reaching right end → reverse
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          direction = -1;
        }

        // When reaching left end → reverse
        if (scrollContainer.scrollLeft <= 0) {
          direction = 1;
        }
      }
    }, 20); // lower = smoother/faster

    return () => clearInterval(autoScroll);
  }, []);



//   useEffect(() => {
//   const scrollContainer = scrollRef.current;
//   let direction = -1; // 👈 start moving left
//   let speed = 1;

//   const autoScroll = setInterval(() => {
//     if (scrollContainer) {
//       scrollContainer.scrollLeft += direction * speed;

//       // Reverse when hitting edges
//       if (
//         scrollContainer.scrollLeft + scrollContainer.clientWidth >=
//         scrollContainer.scrollWidth
//       ) {
//         direction = -1;
//       }
//       if (scrollContainer.scrollLeft <= 0) {
//         direction = 1;
//       }
//     }
//   }, 20);

//   return () => clearInterval(autoScroll);
// }, []);


  return (
    <section className="testimonials">
      {/* <h2 className="section-heading">What Our Students Say</h2> */}
      <div className="testimonials-scroll" ref={scrollRef}>
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-img">
              <img src={t.img} alt={t.name} />
            </div>
            <p className="testimonial-feedback">“{t.feedback}”</p>
            <h4>{t.name}</h4>
            <span className="role">{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
