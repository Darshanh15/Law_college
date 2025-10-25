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
      "Bangalore Law College gave me the confidence and practical exposure to excel in my legal career. The faculty support is amazing!"
  },
  {
    name: "Swathi",
    role: "3years LLB (2020 Batch)",
    img: Swathi,
    feedback:
      "The mock court sessions and internships arranged by the college were invaluable. Highly recommend this institution."
  },
  {
    name: "Pranathi",
    role: "5years BA LLb (2017 Batch)",
    img: Pranathi,
    feedback:
      "The discipline, dedication, and holistic education approach at this college is commendable. Proud parent!"
  },
  {
    name: "Kajol vishwanth",
    role: "5 year BA LLB (2018 Batch)",
    img: Kajol,
    feedback:
      "The discipline, dedication, and holistic education approach at this college is commendable. Proud parent!"
  }
  ,
  {
    name: "Amrutha HS",
    role: "Batch 2020 5year BA LLB",
    img: Amrutha1,
    feedback:
      "The discipline, dedication, and holistic education approach at this college is commendable. Proud parent!"
  }
  ,
  {
    name: "Vishwanath",
    role: "2019 5 years batch",
    img: Vishwanath,
    feedback:
      "The discipline, dedication, and holistic education approach at this college is commendable. Proud parent!"
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
