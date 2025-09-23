import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// scss imports
import "./styles/main.scss";

//components
import Navbar  from './components/Navbar/Navbar'
import ScrollingText from './components/ScrollingText/ScrollingText'
import Footer1 from './components/Footer/Footer1';
import Footer from './components/Footer/Footer';



// pages
import Home from './pages/Home/Home'
import DevelopmentProgress from './pages/DevelopmentProgress/DevelopmentProgress';
import Gallery from './pages/Gallery/Gallery'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import FloatingButtons from './components/FloatingButtons/FloatingButtons';
import About from './pages/About/About'
import Contact from './pages/Contact/Contact';
import Admission from './pages/Admission/Admission';
import InviteeMembers from './pages/InviteeMembers/InviteeMembers';
import Faculty from './pages/Faculty/Faculty';
import GoverningCouncil from './pages/GoverningCouncil/GoverningCouncil';
import History from './pages/History/History';
import NonTeaching from './pages/NonTeaching/NonTeaching';
import Years3LLB from './pages/Years3LLB/Years3LLB';
import Years5LLB from './pages/Years5LLB/Years5LLB';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import PopupModal from './components/PopupModal/PopupModal';
import FAQ from './components/FAQ/FAQ';
import Intrship from './pages/Intrship/Intrship';
import BoardManagement from './pages/BoardManagement/BoardManagement';
import NonlawQp100 from './pages/QuestionPaper/Nonlaw/NonlawQp100';
import NonlawQp80 from './pages/QuestionPaper/Nonlaw/NonlawQp80';
import LawQp80 from './pages/QuestionPaper/Law/LawQp80';
import LawQp100 from './pages/QuestionPaper/Law/LawQp100';
import QuestionPapers from './pages/QuestionPapers/QuestionPapers';
import AdmissionPage from './pages/hiring/AdmissionPage';
import CriteriaPage from './pages/hiring/CriteriaPage';
import AnnualReport from './pages/History/AnnualReport';
import Enquiry from './pages/Enquiry/Enquiry';


function MainContent() {
  return (
   <>
      <ScrollingText />
      <Navbar />
      <Routes>
        <Route path="/Law_college" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admissions" element={<Admission />} />
        <Route path="/inviteeMembers" element={<InviteeMembers />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/GoverningCouncil" element={<GoverningCouncil />} />
        <Route path="/history" element={<History />} />
        <Route path="/AnnualReport" element={<AnnualReport />} />

        <Route path="/intrship" element={<Intrship />} />
        <Route path="/NonTeaching" element={<NonTeaching />} />
        <Route path="/Years3LLB" element={<Years3LLB />} />
        <Route path="/Years5LLB" element={<Years5LLB />} />
        <Route path="/Faq" element={<FAQ />} />

        <Route path="/enquiry" element={<Enquiry />} />

        <Route path="/Lawqp100" element={<LawQp100 />} />
        <Route path="/Lawqp80" element={<LawQp80 />} />

        <Route path="/Nonlawqp100" element={<NonlawQp100 />} />
        <Route path="/Nonlawqp80" element={<NonlawQp80 />} />



        <Route path="/BoardManagement" element={<BoardManagement />} />

        <Route path="/QuestionPapers" element={<QuestionPapers />} />
        <Route path="/AdmissionPage" element={<AdmissionPage />} />
        <Route path="/CriteriaPage" element={<CriteriaPage />} />


      </Routes>
      {/* <WhatsAppButton /> */}
      <FloatingButtons />
      <ScrollToTop />
      <PopupModal />
       
   {/* <DevelopmentProgress /> */}
   {/* <Footer1 /> */}
   <Footer />
    </>

  );
}

export default MainContent;
