// import React, { useEffect, useState } from "react";
// import "./PopupModal.scss";

// const PopupModal = () => {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     course: "",
//     message: "",
//   });

//   // Auto-open after site loads
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setOpen(true);
//     }, 500);
//     return () => clearTimeout(timer);
//   }, []);

//   if (!open) return null;

//   // Handle form input
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     alert("Your admission form has been submitted ✅");
//     setOpen(false);
//   };

//   return (
//     <div className="popup-overlay">
//       <div className="popup-box">
//         {/* Close button */}
//         <button className="close-btn" onClick={() => setOpen(false)}>
//           ✕
//         </button>

//         {/* Title */}
//         <h2 className="popup-title">Admission Form</h2>

//         {/* Form */}
//         <form className="admission-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Full Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your full name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Email Address</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Phone Number</label>
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Enter your phone number"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Course Interested</label>
//             <select
//               name="course"
//               value={formData.course}
//               onChange={handleChange}
//               required
//             >
//               <option value="">-- Select Course --</option>
//               <option value="LLB">LLB</option>
//               <option value="BA LLB">BA LLB</option>
//               <option value="BBA LLB">BBA LLB</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label>Message</label>
//             <textarea
//               name="message"
//               placeholder="Enter your message"
//               value={formData.message}
//               onChange={handleChange}
//               rows="3"
//             ></textarea>
//           </div>

//           <button type="submit" className="submit-btn">
//             Submit Application
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PopupModal;



import React, { useEffect, useState } from "react";
import "./PopupModal.scss";

const PopupModal = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  // Auto-open after site loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  // Handle form input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle submit (send to WhatsApp)
  const handleSubmit = (e) => {
    e.preventDefault();

    // format the WhatsApp message
    const whatsappMessage = `
📌 *New Admission Enquiry*
---------------------------------
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}
📚 Course: ${formData.course}
💬 Message: ${formData.message || "N/A"}
    `;

    // open WhatsApp chat with pre-filled message
    const whatsappUrl = `https://wa.me/918618235882?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");

    // optional: reset & close popup
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });
    setOpen(false);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        {/* Close button */}
        <button className="close-btn" onClick={() => setOpen(false)}>
          ✕
        </button>

        {/* Title */}
        <h2 className="popup-title">Apply Form</h2>

        {/* Form */}
        <form className="admission-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Course Interested</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Course --</option>
              <option value="LLB">LLB</option>
              <option value="BA LLB">BA LLB</option>
              <option value="BBA LLB">BBA LLB</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupModal;
