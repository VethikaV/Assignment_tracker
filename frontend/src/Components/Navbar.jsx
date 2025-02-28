import React from "react";
import { Link } from "react-router-dom";
import './CSS/Navbar.css';

const Navbar = () => {

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Assignment">Assignments</Link></li>
        <li><Link to="/Task">Task</Link></li>
        <li><Link to="/Studentform">Student Profile</Link></li>
        <li><Link to="/TeacherProfile">Teacher Profile</Link></li>
        <li><Link to="/Signup">Signup</Link></li>
        <li><Link to="/Login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
