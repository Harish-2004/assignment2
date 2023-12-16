import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Approve from './components/approve';
import Signup from './components/SignUp';
import Login from './components/Login';
import CompanyForm from './components/retrievedata';
import InternshipForm from './components/InternshipForm';
import PastInternships from './components/PastInternships';
import ConditionalContent from './components/comp';
export default function App() {
  return (<>{localStorage.setItem("log",0)}
    <Router>
    <Routes>
    <Route exact path="/" element={<Navbar/>} />
    <Route exact path="/signup" element={<Signup/>} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/internship-form" element={<InternshipForm/>} />
    <Route exact path="/past-internships" element={<PastInternships/>} />
    <Route exact path="/internship-form/approve" element={<Approve/>} />
    <Route exact path="/retrieve-data" element={<Approve/>} />
    <Route exact path="/retrieve" element={<CompanyForm/>} />
    <Route exact path="/internship-form/approve/comp" element={<ConditionalContent/>} />
  </Routes>
 
</Router>
 </> );
}
