import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Patient from "./Patient/Patient"
import Doctor from "./Doctor/Doctor"
import DoctorGetGetails from './Doctor/DoctorGetGetails'
import Staff from "./Staff/Staff"
import News from "./News/News"
import DoctorDetails from './Doctor/DoctorDetails';
import Selection from './Selection/Selection';
import StaffContent from './Staff/StaffContent';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route index element={<Selection />} />
        <Route path="/" element={<Selection />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/staff/:staffId" element={<StaffContent/>}/>
        <Route path="/doctor/docsetdetails" element={<DoctorDetails />} />
        <Route path="/patient/:doctorId" element={<DoctorGetGetails/>} />
        <Route path="/HealthcareNews" element={<News/>} />
      </Routes>
    </Router>
  </div>
  )
}

export default App
