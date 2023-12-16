import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link ,useNavigate} from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  let navigate = useNavigate();
const handleLogout = () => {
    localStorage.setItem("log",'0');
    navigate("/")
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} className='fs-1' to="/">
            Internship Community
          </Navbar.Brand>
          <Nav className="ml-auto">
            {localStorage.getItem('log')=='1'? (
              <>
                <Nav.Link as={Link} to="/internship-form">
                  Apply for Internship
                </Nav.Link>
                <Nav.Link as={Link} to="/past-internships">
                  Past Internships
                </Nav.Link>
                <Nav.Link as={Link} to="/retrieve">
                  Get Data
                </Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/signup">
                  Sign Up
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
        <div className="m-3">
       
          {/* <img src="download.jpeg" alt=""/> */}
          <h1>Welcome to Internship community - Your Gateway to Professional Growth!</h1>
<hr/>
<p>
Internship community is a user-friendly and dynamic platform designed to streamline the internship application process and provide students with a comprehensive overview of their past internship experiences. As a dedicated space for aspiring professionals, InternHub aims to connect students with exciting opportunities and empower them to build a solid foundation for their future careers.

Key Features:
Effortless Internship Applications:
Easily navigate through our intuitive interface to fill out internship applications tailored to your preferences and career goals. With a simplified form, you can efficiently communicate your skills, aspirations, and qualifications to potential employers.
Centralized Internship Management:
Keep track of your entire internship journey in one place. InternHub allows you to view a detailed history of your past internships, including company details, project summaries, and key learnings. This feature not only helps you reflect on your growth but also serves as a valuable resource for future job applications.
Personalized Dashboard:
Upon logging in, you'll be greeted by a personalized dashboard that provides insights into your application status, upcoming deadlines, and recommended opportunities based on your profile. Stay organized and never miss out on an internship that aligns with your career aspirations.
          </p>   </div></div>  );};
export default App;
