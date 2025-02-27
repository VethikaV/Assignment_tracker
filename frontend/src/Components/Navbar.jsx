import React from "react";
import { Link, useLocation } from "react-router-dom";
import './CSS/Navbar.css';

const Navbar = () => {
  const location = useLocation(); // Get current route

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Assignment">Assignments</Link></li>
        <li><Link to="/Task">Task</Link></li>
        <li><Link to="/StudentProfile">Student Profile</Link></li>
        <li><Link to="/TeacherProfile">Teacher Profile</Link></li>
      </ul>

      {/* Show Signup link only on the Signup page */}
      {location.pathname === "/Signup" && (
        <div className="signup-link">
          <p>Already have an account? <Link to="/Login">Login</Link></p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
