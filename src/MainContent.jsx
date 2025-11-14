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
import Gallery from './pages/Gallery/Gallery1'
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
import QuestionPapernonlaw from './pages/QuestionPapers/QuestionPapernonlaw';
import AdmissionPage from './pages/hiring/AdmissionPage';
import CriteriaPage from './pages/hiring/CriteriaPage';
import AnnualReport from './pages/History/AnnualReport';
import Enquiry from './pages/Enquiry/Enquiry';
import StatutoryCommittees from './pages/StatutoryCommittees/StatutoryCommittees';
import CollegeRules from './pages/CollegeRules/CollegeRules';
import ClassRules from './pages/CollegeRules/ClassRules';
import LibraryRules from './pages/CollegeRules/LibraryRules';
import ComplaintPage from './pages/Grievance/ComplaintPage';
import CompliancePage from './pages/Grievance/CompliancePage';
import HistorySection from './pages/History/HistorySection';
import StudentsTowardsTeachers from './pages/CollegeRules/StudentsTowardsTeachers';
import DutiesofParentsTowardstheCollege from './pages/CollegeRules/DutiesofParentsTowardstheCollege';
import StudentAchievement from './pages/Achievement/StudentAchievement';
import CollegeAchievement from './pages/Achievement/CollegeAchievement';
import Reviews from './pages/Testimonials/Reviews';
import AntiRaggingPage from './pages/Ragging/AntiRaggingPage';
import UGCAntiRaggingPage from './pages/Ragging/UGCAntiRaggingPage';
import AntiSexualHarassment from './pages/Ragging/AntiSexualHarassment';
import ScstobcGrievance from './pages/Ragging/ScstobcGrievance';
import StudentGrievance from './pages/Ragging/StudentGrievance';
import LawLibrary from './pages/QuestionPaper/LawLibrary/LawLibrary';



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
        <Route path="/HistorySection" element={<HistorySection />} />

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
        <Route path="/LawLibrary" element={<LawLibrary />} />



        <Route path="/BoardManagement" element={<BoardManagement />} />

        <Route path="/QuestionPapers" element={<QuestionPapers />} />
        <Route path="/QuestionPapernonlaw" element={<QuestionPapernonlaw />} />
        <Route path="/AdmissionPage" element={<AdmissionPage />} />
        <Route path="/CriteriaPage" element={<CriteriaPage />} />



        <Route path="/StatutoryCommittees" element={<StatutoryCommittees />} />

        <Route path="/CollegeRules" element={<CollegeRules />} />
        <Route path="/ClassRules" element={<ClassRules />} />
        <Route path="/LibraryRules" element={<LibraryRules />} />
        <Route path="/LibraryRules" element={<LibraryRules />} />
        <Route path="/StudentsTowardsTeachers" element={<StudentsTowardsTeachers />} />
        <Route path="/DutiesofParentsTowardstheCollege" element={<DutiesofParentsTowardstheCollege />} />
        <Route path="/CompliancePage" element={<CompliancePage />} />
        <Route path="/ComplaintPage" element={<ComplaintPage />} />
        <Route path="/AntiRaggingPage" element={<AntiRaggingPage />} />
        <Route path="/UGCAntiRaggingPage" element={<UGCAntiRaggingPage />} />
        <Route path="/AntiSexualHarassment" element={<AntiSexualHarassment />} />
        <Route path="/ScstobcGrievance" element={<ScstobcGrievance />} />
        <Route path="/StudentGrievance" element={<StudentGrievance />} />

        {/* Achievement */}
        <Route path="/StudentAchievement" element={<StudentAchievement />} />
        <Route path="/CollegeAchievement" element={<CollegeAchievement />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/PopupModal" element={<CollegeAchievement />} />


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
