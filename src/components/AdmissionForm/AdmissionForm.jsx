// import React, { useState } from "react";
// import "./AdmissionForm.scss";

// const AdmissionForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     dob: "",
//     course: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Admission form submitted successfully ✅");
//     console.log("Form Data:", formData);
//     // later connect to Django/Node backend API
//   };

//   return (
//     <div className="admission-container">
//       <h2>Admission Form</h2>
//       <form onSubmit={handleSubmit} className="admission-form">
//         <div className="form-group">
//           <label>Full Name</label>
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter your full name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Phone Number</label>
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Enter your phone number"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Date of Birth</label>
//           <input
//             type="date"
//             name="dob"
//             value={formData.dob}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Select Course</label>
//           <select
//             name="course"
//             value={formData.course}
//             onChange={handleChange}
//             required
//           >
//             <option value="">-- Select a Course --</option>
//             <option value="LLB 3 Years">LLB - 3 Years</option>
//             <option value="BA LLB 5 Years">BA LLB - 5 Years</option>
//             <option value="LLM">LLM</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Message</label>
//           <textarea
//             name="message"
//             placeholder="Write your message..."
//             value={formData.message}
//             onChange={handleChange}
//           />
//         </div>

//         <button type="submit" className="submit-btn">
//           Submit Application
//         </button>
//       </form>
//     </div>
//   );

// };

// export default AdmissionForm;


import React, { useState } from "react";
import "./AdmissionForm.scss";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    course: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format WhatsApp message
    const whatsappMessage = `
📌 *New Admission Enquiry*
---------------------------------
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}
🎂 Date of Birth: ${formData.dob}
📚 Course: ${formData.course}
💬 Message: ${formData.message || "N/A"}
    `;

    // Encode and open WhatsApp
    const whatsappUrl = `https://wa.me/918618235882?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");

    // Optional: clear form
    setFormData({
      name: "",
      email: "",
      phone: "",
      dob: "",
      course: "",
      message: ""
    });
  };

  return (
    <div className="admission-container">
      <h2>Admission Form</h2>
      <form onSubmit={handleSubmit} className="admission-form">
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
          <label>Email</label>
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
          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Select Course</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">-- Select a Course --</option>
            <option value="LLB 3 Years">LLB - 3 Years</option>
            <option value="BA LLB 5 Years">BA LLB - 5 Years</option>
            <option value="LLM">LLM</option>
          </select>
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default AdmissionForm;
