import React from "react";
import "./Testimonials.scss";
import { useEffect, useRef } from "react";


import img from '../../assets/law.jpg'

const testimonials = [
  {
    name: "Aishwarya R",
    role: "Alumni, BA LLB",
    img: img,
    feedback:
      "Bangalore Law College gave me the confidence and practical exposure to excel in my legal career. The faculty support is amazing!"
  },
  {
    name: "Rahul Sharma",
    role: "Final Year LLB Student",
    img: img,
    feedback:
      "The mock court sessions and internships arranged by the college were invaluable. Highly recommend this institution."
  },
  {
    name: "Priya Verma",
    role: "Parent",
    img: img,
    feedback:
      "The discipline, dedication, and holistic education approach at this college is commendable. Proud parent!"
  },
  {
    name: "Priya Verma",
    role: "Parent",
    img: img,
    feedback:
      "The discipline, dedication, and holistic education approach at this college is commendable. Proud parent!"
  }
  ,
  {
    name: "Priya Verma",
    role: "Parent",
    img: img,
    feedback:
      "The discipline, dedication, and holistic education approach at this college is commendable. Proud parent!"
  }
  ,
  {
    name: "Priya Verma",
    role: "Parent",
    img: img,
    feedback:
      "The discipline, dedication, and holistic education approach at this college is commendable. Proud parent!"
  }
  ,
  {
    name: "Priya Verma",
    role: "Parent",
    img: img,
    feedback:
      "The discipline, dedication, and holistic education approach at this college is commendable. Proud parent!"
  }
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
      <h2 className="section-heading">What Our Students Say</h2>
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
