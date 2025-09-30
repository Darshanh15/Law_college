// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
// import { ImCross } from "react-icons/im";

// // import fruits from "../../data/fruits";
// import "./Navbar.scss";
// import logo from "../../assets/logo2.png";

// function Navbar() {
//   const [mobile, setMobile] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <Link to="/">
//           <img src={logo} alt="FARM2BIZZ" className="navbar-logo" />
//         </Link>
//       </div>

//       {/* Top-right toggle icon */}
//       <div className="menu-icon" onClick={() => setMobile(!mobile)}>
//         {mobile ? <ImCross /> : <FaBars />}
//       </div>

//       {/* Menu links */}
//       <ul className={mobile ? "nav-links nav-links-mobile" : "nav-links"}>
//         <li>
//           <Link to="/" onClick={() => setMobile(false)}>
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/aboutus" onClick={() => setMobile(false)}>
//             About Us
//           </Link>
//         </li>
//         {/* <li>
//           <Link to="/features" onClick={() => setMobile(false)}>Features</Link>
//         </li> */}
//         <li>
//           <Link to="/clients" onClick={() => setMobile(false)}>
//             Academic Courses
//           </Link>
//         </li>

//         {/* Crop Dropdown */}
//         {/* <li className="dropdown">
//           <span
//             className="dropdown-toggle"
//             onClick={() => {
//               navigate("/fruitlist");
//               setMobile(false);
//             }}
//           >
//             Frutdetails ▾
//           </span>
//           <ul className="dropdown-menu">
//             {fruits.map((fruit) => (
//               <li key={fruit.id}>
//                 <button
//                   onClick={() => {
//                     navigate(`/fruit/${fruit.id}`);
//                     setMobile(false);
//                   }}
//                   className="dropdown-item"
//                 >
//                   {fruit.name}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </li> */}

//         <li>
//           <Link to="/processsteps" onClick={() => setMobile(false)}>
//             Application Form
//           </Link>
//         </li>
//         <li>
//           <Link to="/crops" onClick={() => setMobile(false)}>
//             Notification
//           </Link>
//         </li>
// <li>
//           <Link to="/contact" onClick={() => setMobile(false)}>
// Library
//           </Link>
//         </li>
//         <li>
//           <Link to="/contact" onClick={() => setMobile(false)}>
//             Contact Us
//           </Link>
//         </li>

//         {/* <li>
//           <Link to="/steps" onClick={() => setMobile(false)}>steps</Link>
//         </li> */}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

// ----------------------------------------------------------------------------------------------

// import React, { useState } from "react";
// import { FaAngleDown } from "react-icons/fa";
// import { FaEdit, FaMagic, FaPuzzlePiece, FaExchangeAlt, FaDotCircle } from "react-icons/fa";
// import "./Navbar.scss";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const toggleDropdown = (menu) => {
//     setActiveDropdown(activeDropdown === menu ? null : menu);
//   };

//   return (
//     <nav className="navbar">
//       {/* Logo */}
//       <div className="logo">SLIDER <span>REVOLUTION</span></div>

//       {/* menu-icon for mobile */}
//       <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//         ☰
//       </div>

//       {/* Menu Items */}
//       <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//         <li><a href="#">Templates</a></li>

//         <li className="dropdown">
//           <button onClick={() => toggleDropdown("design")}>
//             Design 
//           </button>
//           {activeDropdown === "design" && (
//             <div className="dropdown-menu">
//               <a href="#"> Visual Editor</a>
//               <a href="#">Animation Effects</a>
//             </div>
//           )}
//         </li>

//         <li className="dropdown">
//           <button onClick={() => toggleDropdown("features")}>
//             Features 
//           </button>
//           {activeDropdown === "features" && (
//             <div className="dropdown-menu">
//               <a href="#"> AddOns</a>
//               <a href="#"> Advanced Transitions</a>
//               <a href="#"><FaDotCircle /> Particle Animation</a>
//             </div>
//           )}
//         </li>

//         <li className="dropdown">
//           <button onClick={() => toggleDropdown("resources")}>
//             Resources 
//           </button>
//           {activeDropdown === "resources" && (
//             <div className="dropdown-menu">
//               <a href="#">Docs</a>
//               <a href="#">Support</a>
//               <a href="#">Community</a>
//             </div>
//           )}
//         </li>

//         <li><a href="#">Login</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// ------------------------------------------------------------------------------------------

// import React, { useState } from "react";
// import "./Navbar.scss";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <div className="logo">SLIDER REVOLUTION</div>

//       {/* menu-icon / Close button */}
//       <div
//         className={`menu-toggle ${isOpen ? "open" : ""}`}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>

//       {/* Nav links */}
//       <ul className={`nav-links ${isOpen ? "active" : ""}`}>
//         <li>Templates</li>
//         <li>
//           Design <span className="arrow">▼</span>
//         </li>
//         <li>
//           Features <span className="arrow">▼</span>
//         </li>
//         <li>
//           Resources <span className="arrow">▼</span>
//         </li>
//         <li>Login</li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// ---------------------------------------------------------------------------------------------

// import React, { useState } from "react";
// import { FaBars } from "react-icons/fa";
// import { ImCross } from "react-icons/im";
// import "./Navbar.scss";

// const Navbar = () => {
//   const [mobile, setMobile] = useState(false);

//   return (
//     <nav className="navbar">
//       <div className="logo">SLIDER REVOLUTION</div>

//       {/* Top-right toggle icon */}
//       <div className="menu-icon" onClick={() => setMobile(!mobile)}>
//         {mobile ? <ImCross /> : <FaBars />}
//       </div>

//       {/* Nav links */}
//       <ul className={mobile ? "nav-links-mobile" : "nav-links"}>
//         <li>Templates</li>
//         <li>Design ▼</li>
//         <li>Features ▼</li>
//         <li>Resources ▼</li>
//         <li>Login</li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// --------------------------------------------------------------------------------------------------

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaAngleDown } from "react-icons/fa";
// import { FaEdit, FaMagic, FaPuzzlePiece, FaExchangeAlt, FaDotCircle } from "react-icons/fa";
// import "./Navbar.scss";

// const Navbar = () => {
//   // const [menuOpen, setMenuOpen] = useState(false);
//   const [mobile, setMobile] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const toggleDropdown = (menu) => {
//     setActiveDropdown(activeDropdown === menu ? null : menu);
//   };

//   return (
//     <>
//     <nav className="navbar">
//       {/* Logo */}
//       <div className="logo">
//         <Link to="/">
//           <img src={logo} alt="FARM2BIZZ" className="navbar-logo" />
//         </Link>
//       </div>

//       {/* menu-icon for mobile */}
//       <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//        {mobile ? <ImCross /> : <FaBars />}
//       </div>

//       {/* Menu Items */}
//       <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//         <li><Link to="/" onClick={() => setMobile(false)}>
//             Home
//           </Link>
//           </li>

//         {/* <li className="dropdown">
//           <button onClick={() => toggleDropdown("design")}>
//             Design 
//           </button>
//           {activeDropdown === "design" && (
//             <div className="dropdown-menu">
//               <a href="#"> Visual Editor</a>
//               <a href="#">Animation Effects</a>
//             </div>
//           )}
//         </li> */}

//         <li className="dropdwon">
//           <span className="dropdown-menu">
//             <Link to="/Visual" onClick={() => setMobile(false)}>
//              Visual Editor
//           </Link>
//           <Link to="/Animation" onClick={() => setMobile(false)}>
//            Animation Effects
//           </Link>
//           </span>
//         </li>

//         <li className="dropdwon">
//           <button onClick={() => toggleDropdown("features")} >Features  </button>
//           <span className="dropdown-menu">
//             <Link to="/Visual" onClick={() => setMobile(false)}>
//              Visual Editor
//           </Link>
//           <Link to="/Animation" onClick={() => setMobile(false)}>
//            Animation Effects
//           </Link>
//           </span>
//         </li>

//         <li className="dropdown">
//           <button onClick={() => toggleDropdown("features")}>
//             Features 
//           </button>

//           <span className="dropdown-menu">
//             <Link to="/AddOns" onClick={() => setMobile(false)}>
//              AddOns
//           </Link>
//           <Link to="/Advanced" onClick={() => setMobile(false)}>
//             Advanced Transitions
//           </Link>
//           <Link to="/Particle" onClick={() => setMobile(false)}>
//           <FaDotCircle /> Particle Animation
//           </Link>

//           </span>

//         </li>

//       </ul>
//     </nav>
//     </>
//   );
// };

// export default Navbar;

// --------------------------------------------------------------------------------------------

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaAngleDown, FaBars } from "react-icons/fa";
// import { ImCross } from "react-icons/im";
// import { FaEdit, FaMagic, FaPuzzlePiece, FaExchangeAlt, FaDotCircle } from "react-icons/fa";
// import logo from "../../assets/logo.png"; // <-- adjust path to your logo
// import "./Navbar.scss";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const toggleDropdown = (menu) => {
//     setActiveDropdown(activeDropdown === menu ? null : menu);
//   };

//   return (
//     <nav className="navbar">
//       {/* Logo */}
//       <div className="logo">
//         <Link to="/">
//           <img src={logo} alt="FARM2BIZZ" className="navbar-logo" />
//         </Link>
//       </div>

//       {/* Mobile menu toggle */}
//       <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//         {menuOpen ? <ImCross /> : <FaBars />}
//       </div>

//       {/* Menu Items */}
//       <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//         <li>
//           <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
//         </li>

//          <li>
//           <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
//         </li>

//         <li className="dropdown">
//           <button onClick={() => toggleDropdown("design")}>
//             Design 
//           </button>
//           {activeDropdown === "design" && (
//             <div className="dropdown-menu">
//               <Link to="/Visual" onClick={() => setMenuOpen(false)}>
//                  Visual Editor
//               </Link>
//               <Link to="/Animation" onClick={() => setMenuOpen(false)}>
//                 Animation Effects
//               </Link>
//             </div>
//           )}
//         </li>

//         <li className="dropdown">
//           <button onClick={() => toggleDropdown("features")}>
//             Features 
//           </button>
//           {activeDropdown === "features" && (
//             <div className="dropdown-menu">
//               <Link to="/AddOns" onClick={() => setMenuOpen(false)}>
//                  AddOns
//               </Link>
//               <Link to="/Advanced" onClick={() => setMenuOpen(false)}>
//                  Advanced Transitions
//               </Link>
//               <Link to="/Particle" onClick={() => setMenuOpen(false)}>
//                 <FaDotCircle /> Particle Animation
//               </Link>
//             </div>
//           )}
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
// ------------------------------------------------------------------------------------

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaAngleDown, FaBars } from "react-icons/fa";
// import { ImCross } from "react-icons/im";
// import {
//   FaEdit,
//   FaMagic,
//   FaPuzzlePiece,
//   FaExchangeAlt,
//   FaDotCircle,
// } from "react-icons/fa";
// import logo from "../../assets/logo2.png"; // adjust to your path
// import "./Navbar.scss";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const toggleDropdown = (menu) => {
//     setActiveDropdown(activeDropdown === menu ? null : menu);
//   };

//   // ✅ close whole menu when user clicks any option
//   const handleCloseMenu = () => {
//     setMenuOpen(false);
//     setActiveDropdown(null);
//   };

//   return (
//     <nav className="navbar">
//       {/* Logo */}
//       <div className="logo">
//         <Link to="/" onClick={handleCloseMenu}>
//           <img src={logo} alt="FARM2BIZZ" className="navbar-logo" />
//         </Link>
//       </div>

//       {/* Mobile toggle button */}
//       <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//         {menuOpen ? <ImCross /> : <FaBars />}
//       </div>

//       {/* Nav Links */}
//       <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//         <li>
//           <Link to="/" onClick={handleCloseMenu}>
//             Home
//           </Link>
//         </li>

//         <li className="dropdown">
//           <button onClick={() => toggleDropdown("about")}>
//             About Us 
//           </button>
//           {activeDropdown === "about" && (
//             <div className="dropdown-menu">
              
//               <Link to="/InviteeMembers" onClick={handleCloseMenu}>
//                 Invitee Members
//               </Link>
//               <Link to="/Faculty" onClick={handleCloseMenu}>
//                 Faculty
//               </Link>
//               <Link to="/GoverningCouncil" onClick={handleCloseMenu}>
//                 Governing Council Members
//               </Link>
//               <Link to="/GoverningCouncil" onClick={handleCloseMenu}>
//                 Non Teaching Staff
//               </Link>
//               <Link to="/history" onClick={handleCloseMenu}>
//                  history
//               </Link>
//             </div>
//           )}
//         </li>

//         <li className="dropdown">
//           <button onClick={() => toggleDropdown("courses")}>
//             Courses 
//           </button>
//           {activeDropdown === "courses" && (
//             <div className="dropdown-menu">
//               <Link to="/Years3llb" onClick={handleCloseMenu}>
//                  3 Years LLB
//               </Link>
//               <Link to="/Years5llb" onClick={handleCloseMenu}>
//                 5 Years B.A, LLB
//               </Link>
//             </div>
//           )}
//         </li>

//         <li className="dropdown">
//           <button onClick={() => toggleDropdown("questionpaper")}>
//             question paper 
//           </button>
//           {activeDropdown === "questionpaper" && (
//             <div className="dropdown-menu">
//               <Link to="/Non Law" onClick={handleCloseMenu}>
//                  Non Law
//               </Link>
//               <Link to="/Advanced" onClick={handleCloseMenu}>
//                  Advanced Transitions
//               </Link>
//               <Link to="/Particle" onClick={handleCloseMenu}>
//                 <FaDotCircle /> Particle Animation
//               </Link>
//             </div>
//           )}
//         </li>

//         <li className="dropdown">
//   <button onClick={() => toggleDropdown("questionpaper")}>
//     Question Paper 
//   </button>

//   {activeDropdown === "questionpaper" && (
//     <div className="dropdown-menu">
//       {/* Non Law */}
//       <div className="sub-dropdown">
//         <button onClick={() => toggleDropdown("nonlaw")}>
//            Non Law 
//         </button>
//         {activeDropdown === "nonlaw" && (
//           <div className="sub-menu">
//             <Link to="/nonlaw/b1" onClick={handleCloseMenu}>B1</Link>
//             <Link to="/nonlaw/b2" onClick={handleCloseMenu}>B2</Link>
//             <Link to="/nonlaw/b3" onClick={handleCloseMenu}>B3</Link>
//           </div>
//         )}
//       </div>

//       {/* Law */}
//       <div className="sub-dropdown">
//         <button onClick={() => toggleDropdown("law")}>
//            Law 
//         </button>
//         {activeDropdown === "law" && (
//           <div className="sub-menu">
//             <Link to="/law/a1" onClick={handleCloseMenu}>A1</Link>
//             <Link to="/law/a2" onClick={handleCloseMenu}>A2</Link>
//             <Link to="/law/a3" onClick={handleCloseMenu}>A3</Link>
//           </div>
//         )}
//       </div>

//       {/* Law and Nonlaw */}
//       <div className="sub-dropdown">
//         <button onClick={() => toggleDropdown("lawandnonlaw")}>
//           <FaDotCircle /> Law and Nonlaw 
//         </button>
//         {activeDropdown === "lawandnonlaw" && (
//           <div className="sub-menu">
//             <Link to="/lawandnonlaw/c1" onClick={handleCloseMenu}>C1</Link>
//             <Link to="/lawandnonlaw/c2" onClick={handleCloseMenu}>C2</Link>
//             <Link to="/lawandnonlaw/c3" onClick={handleCloseMenu}>C3</Link>
//           </div>
//         )}
//       </div>
//     </div>
//   )}
// </li>

//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import {
  FaEdit,
  FaMagic,
  FaPuzzlePiece,
  FaExchangeAlt,
  FaDotCircle,
} from "react-icons/fa";
import logo from "../../assets/logo2.png"; // adjust to your path
import "./Navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // for main dropdowns
  const [activeSubDropdown, setActiveSubDropdown] = useState(null); // for nested dropdowns

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
    setActiveSubDropdown(null); // reset submenus when switching
  };

  const toggleSubDropdown = (submenu) => {
    setActiveSubDropdown(activeSubDropdown === submenu ? null : submenu);
  };

  // ✅ close whole menu when user clicks any option
  const handleCloseMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  const handleSubmenuPosition = (e) => {
  const submenu = e.currentTarget.querySelector(".submenu");
  if (!submenu) return;

  submenu.classList.remove("left"); // reset first
  const rect = submenu.getBoundingClientRect();

  if (rect.right > window.innerWidth) {
    submenu.classList.add("left"); // flip left
  }
};


  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/Law_college" onClick={handleCloseMenu}>
          <img src={logo} alt="law collage" className="navbar-logo" />
        </Link>
      </div>

      {/* Mobile toggle button */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <ImCross /> : <FaBars />}
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/Law_college" onClick={handleCloseMenu}>
            Home
          </Link>
        </li>
        

        {/* About */}
        <li className="dropdown">
          <button onClick={() => toggleDropdown("about")}>
            About Us 
          </button>
          {activeDropdown === "about" && (
            <div className="dropdown-menu">
              <Link to="/BoardManagement" onClick={handleCloseMenu}>
                Board of Managemaent
              </Link>
              <Link to="/InviteeMembers" onClick={handleCloseMenu}>
                Invitee Members
              </Link>
              <Link to="/GoverningCouncil" onClick={handleCloseMenu}>
                Governing Council Members
              </Link>
              <Link to="/Faculty" onClick={handleCloseMenu}>
                Faculty
              </Link>
              <Link to="/NonTeaching" onClick={handleCloseMenu}>
                Non Teaching Staff
              </Link>
              {/* <Link to="/history" onClick={handleCloseMenu}>
                 Milestone of the collage
              </Link> */}
              <Link to="/AnnualReport" onClick={handleCloseMenu}>
                 Milestone of the collage
              </Link>
            </div>
          )}
        </li>

        {/* Courses */}
        <li className="dropdown">
          <button onClick={() => toggleDropdown("courses")}>
            Courses 
          </button>
          {activeDropdown === "courses" && (
            <div className="dropdown-menu">
              <Link to="/Years3llb" onClick={handleCloseMenu}>
                 3 Years LLB
              </Link>
              <Link to="/Years5llb" onClick={handleCloseMenu}>
                5 Years B.A LLB
              </Link>
              
            </div>
          )}
        </li>



         {/* Courses */}
        <li className="dropdown">
          <button onClick={() => toggleDropdown("questionpaper")}>
            Question Paper 
          </button>
          {activeDropdown === "questionpaper" && (
            <div className="dropdown-menu">
              <Link to="/QuestionPapers" onClick={handleCloseMenu}>
                Law
              </Link>
              <Link to="/QuestionPapernonlaw" onClick={handleCloseMenu}>
                Non Law
              </Link>
            </div>
          )}
        </li>




 
{/* __________________________________________________________________________ */}
 {/* Admission */}
        {/* <li className="dropdown">
  <button onClick={() => toggleDropdown("admission")}>
    Admission 
  </button>

  {activeDropdown === "admission" && (
    <div className="dropdown-menu"> */}

      {/* Admission Process (single link) */}
      {/* <div className="sub-dropdown">
        <Link to="/admissions" onClick={handleCloseMenu}>
          Admission Process
        </Link>
      </div> */}

      {/* FAQ's (single link) */}
      {/* <div className="sub-dropdown">
        <Link to="/Faq" onClick={handleCloseMenu}>
          FAQ's
        </Link>
      </div> */}

      {/* Career (with 2 sub-links) */}
      {/* <div className="sub-dropdown">
        <button onClick={() => toggleSubDropdown("Career")}>
          Career
        </button>
        {activeSubDropdown === "Career" && (
          <div className="sub-menu">
            <Link to="/AdmissionPage" onClick={handleCloseMenu}>
              Teaching and Non-Teaching
            </Link>
            <Link to="/CriteriaPage" onClick={handleCloseMenu}>
              Criteria
            </Link>
          </div>
        )}
      </div>

    </div>
  )}
</li> */}

{/* __________________________________________________________________________ */}



       <li className="dropdown">
  <button onClick={() => toggleDropdown("admission")}>
    Admission 
  </button>

  {activeDropdown === "admission" && (
    <div className="dropdown-menu">

      {/* Admission Process (single link) */}
      <div className="sub-dropdown">
        <Link to="/admissions" onClick={handleCloseMenu}>
          Admission Process
        </Link>
      </div>

      {/* FAQ's (single link) */}
      <div className="sub-dropdown">
        <Link to="/Faq" onClick={handleCloseMenu}>
          FAQ's
        </Link>
      </div>
      
      <div className="sub-dropdown">
        <Link to="/CriteriaPage" onClick={handleCloseMenu}>
          Criteria
        </Link>
      </div>

      {/* Career (with 2 sub-links) */}
      {/* <div className="sub-dropdown">
        <button onClick={() => toggleSubDropdown("Career")}>
          Career
        </button>
        {activeSubDropdown === "Career" && (
          <div className="sub-menu">
            <Link to="/AdmissionPage" onClick={handleCloseMenu}>
              Teaching and Non-Teaching
            </Link>
            <Link to="/CriteriaPage" onClick={handleCloseMenu}>
              Criteria
            </Link>
          </div>
        )}
      </div> */}

    </div>
  )}
</li>

        {/* Courses */}
        <li className="dropdown">
          <button onClick={() => toggleDropdown("CodeOfConductRules")}>
          Code of Conduct rules
          </button>
          {activeDropdown === "CodeOfConductRules" && (
            <div className="dropdown-menu">
              <Link to="/CollegeRules" onClick={handleCloseMenu}>
                Collage rule
              </Link>
              <Link to="/LibraryRules" onClick={handleCloseMenu}>
                Library rule
              </Link>
              <Link to="/ClassRules" onClick={handleCloseMenu}>
                Class rule
              </Link>
            </div>
          )}
        </li>

        {/* Grievance */}
        <li className="dropdown">
          <button onClick={() => toggleDropdown("Grievance")}>
          Grievance
          </button>
          {activeDropdown === "Grievance" && (
            <div className="dropdown-menu">
              <Link to="/ComplaintPage" onClick={handleCloseMenu}>
                Complaint
              </Link>
              <Link to="/CompliancePage" onClick={handleCloseMenu}>
                Compliance
              </Link>
            </div>
          )}
        </li>

        {/* achievement */}
        <li className="dropdown">
          <button onClick={() => toggleDropdown("achievement")}>
          Achievement
          </button>
          {activeDropdown === "achievement" && (
            <div className="dropdown-menu">
              <Link to="/ComplaintPage" onClick={handleCloseMenu}>
                Student Achievement
              </Link>
              <Link to="/CompliancePage" onClick={handleCloseMenu}>
                College Achievements
              </Link>
              <Link to="/CompliancePage" onClick={handleCloseMenu}>
                Reviews
              </Link>
            </div>
          )}
        </li>
        


        <li>
          <Link to="/gallery" onClick={handleCloseMenu}>
            Gallery

          </Link>
        </li>


        {/* About */}
        {/* <li className="dropdown">
          <button onClick={() => toggleDropdown("internship")}>
            Internship 
          </button>
          {activeDropdown === "internship" && (
            <div className="dropdown-menu">
              <Link to="/inviteeMembers" onClick={handleCloseMenu}>
                 Invitee Members
              </Link>
              <Link to="/faculty" onClick={handleCloseMenu}>
                 Faculty
              </Link>
              <Link to="/GoverningCouncil" onClick={handleCloseMenu}>
                 Governing Council Members
              </Link>
              <Link to="/NonTeaching" onClick={handleCloseMenu}>
                 Non Teaching Staff
              </Link>
              <Link to="/history" onClick={handleCloseMenu}>
                 History
              </Link>
            </div>
          )}
        </li> */}


         {/* Statutory Committees */}
        <li>
          <Link to="/StatutoryCommittees" onClick={handleCloseMenu}>
            Statutory Committees
          </Link>
        </li>


        <li>
          <Link to="/contact" onClick={handleCloseMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
