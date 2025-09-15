// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // scss imports
// import "./styles/main.scss";

// //components
// import Navbar  from './components/Navbar/Navbar'
// import ScrollingText from './components/ScrollingText/ScrollingText'
// import Footer1 from './components/Footer/Footer1';
// import Footer from './components/Footer/Footer';



// // pages
// import Home from './pages/Home/Home'
// import DevelopmentProgress from './pages/DevelopmentProgress/DevelopmentProgress';
// import Gallery from './pages/Gallery/Gallery'
// import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
// import FloatingButtons from './components/FloatingButtons/FloatingButtons';
// import About from './pages/About/About'
// import Contact from './pages/Contact/Contact';
// import Admission from './pages/Admission/Admission';
// import InviteeMembers from './pages/InviteeMembers/InviteeMembers';
// import Faculty from './pages/Faculty/Faculty';
// import GoverningCouncil from './pages/GoverningCouncil/GoverningCouncil';
// import History from './pages/History/History';
// import NonTeaching from './pages/NonTeaching/NonTeaching';
// import Years3LLB from './pages/Years3LLB/Years3LLB';
// import Years5LLB from './pages/Years5LLB/Years5LLB';
// import ScrollToTop from './components/ScrollToTop/ScrollToTop';
// import PopupModal from './components/PopupModal/PopupModal';
// import FAQ from './components/FAQ/FAQ';
// import Intrship from './pages/Intrship/Intrship';

// function App() {
//   return (
//    <>
//       <ScrollingText />
//       <Navbar />
//       <Routes>
//         <Route path="/Law_college" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/admissions" element={<Admission />} />
//         <Route path="/inviteeMembers" element={<InviteeMembers />} />
//         <Route path="/faculty" element={<Faculty />} />
//         <Route path="/GoverningCouncil" element={<GoverningCouncil />} />
//         <Route path="/history" element={<History />} />
//         <Route path="/intrship" element={<Intrship />} />
//         <Route path="/NonTeaching" element={<NonTeaching />} />
//         <Route path="/Years3LLB" element={<Years3LLB />} />
//         <Route path="/Years5LLB" element={<Years5LLB />} />
//         <Route path="/Faq" element={<FAQ />} />
//       </Routes>
//       {/* <WhatsAppButton /> */}
//       <FloatingButtons />
//       <ScrollToTop />
//       <PopupModal />
       
//    {/* <DevelopmentProgress /> */}
//    {/* <Footer1 /> */}
//    <Footer />
//     </>

//   );
// }

// export default App;




import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Preloader/Preloader";
import MainContent from "./MainContent";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Preloader /> : <MainContent />}
    </>
  );
}

export default App;
