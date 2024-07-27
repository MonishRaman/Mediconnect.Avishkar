import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import EmergencyPage from "./Components/Emergencyform";
import GeneralPhysician from './Components/GeneralPhysician';
import Cardiology from './Components/Cardiology';
import Dermatology from './Components/Dermatology';
import Diabetology from './Components/Diabetology';
import Eye from './Components/Eye';
import Gastroenterology from './Components/Gastroenterology';
import Gynaecology from './Components/Gynaecology';
import Nephrology from './Components/Nephrology';
import Neurology from './Components/Neurology';
import Optics from './Components/Optics';
import Orthopedic from './Components/Orthopedic';
import Pediatrics from './Components/Pediatrics';
import Pulmonology from './Components/Pulmonology';
import Stomach from './Components/Stomach';
import Urology from './Components/Urology';
import Login from "./Components/Login"
import HospitalsPage from './Components/HospitalsPage';
import Apollo from './Components/Apollo';
import Aster from './Components/Asterdoc'
import BBH from './Components/BBH';
import BGS from './Components/BGS';
import Fortis from './Components/Fortis';
import John from './Components/John';
import Manipal from './Components/Manipal';
import Narayana from './Components/Narayana';
import Sagar from './Components/Sagar';
import Sparsh from './Components/Sparsh';
import Victoria from './Components/Victoria';
import AppointmentDetails from './Pages/AppointmentDetails';
import DocumentDetails from './Components/Document'


function App() {
  return (
    <div className="App">
      <Router basename="/Health-Plus">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/emergency" element={<EmergencyPage />} />
          <Route path="/general" element={<GeneralPhysician />} />
          <Route path="/cardiology" element={<Cardiology />} />
          <Route path="/Dermatology" element={<Dermatology />} />
          <Route path="/Diabetology" element={<Diabetology />} />
          <Route path="/Eye" element={<Eye />} />
          <Route path="/Gastroenterology" element={<Gastroenterology />} />
          <Route path="/Gynaecology" element={<Gynaecology />} />
          <Route path="/Nephrology" element={<Nephrology />} />
          <Route path="/Neurology" element={<Neurology />} />
          <Route path="/Optics" element={<Optics />} />
          <Route path="/Orthopedic" element={<Orthopedic />} />
          <Route path="/Pediatrics" element={<Pediatrics />} />
          <Route path="/Pulmonology" element={<Pulmonology />} />
          <Route path="/Stomach" element={<Stomach />} />
          <Route path="/Urology" element={<Urology />} />
          <Route path="/hospitals" element={<HospitalsPage />} />
          <Route path="/apollo" element={<Apollo />} />
          <Route path="/aster" element={<Aster />} />
          <Route path="/bbh" element={<BBH />} />
          <Route path="/bgs" element={<BGS />} />
          <Route path="/fortis" element={<Fortis />} />
          <Route path="/john" element={<John />} />
          <Route path="/manipal" element={<Manipal />} />
          <Route path="/narayana" element={<Narayana />} />
          <Route path="/sagar" element={<Sagar />} />
          <Route path="/sparsh" element={<Sparsh />} />
          <Route path="/victoria" element={<Victoria />} />
          <Route path="/confirmation" element={<AppointmentDetails />} />
          <Route path="/document" element={<DocumentDetails />} />

          
         
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
