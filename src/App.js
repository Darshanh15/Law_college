import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// scss imports
import "./styles/main.scss";

//components
import Navbar  from './components/Navbar/Navbar'

// pages
import Home from './pages/Home/Home'
import DevelopmentProgress from './pages/DevelopmentProgress/DevelopmentProgress';

function App() {
  return (
   <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
   <DevelopmentProgress />
    </>

  );
}

export default App;
