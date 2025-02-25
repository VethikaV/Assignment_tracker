import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
        <li style={styles.navItem}><Link to="/assignment" style={styles.navLink}>Assignments</Link></li>
        <li style={styles.navItem}><Link to="/task" style={styles.navLink}>Task</Link></li>
        <li style={styles.navItem}><Link to="/studentprofile" style={styles.navLink}>Student Profile</Link></li>
        <li style={styles.navItem}><Link to="/teacherprofile" style={styles.navLink}>Teacher Profile</Link></li>
      </ul>
    </nav>
  );
};

// Inline styles for quick styling
const styles = {
  navbar: {
    backgroundColor: "#007bff",
    padding: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    padding: 0,
    margin: 0,
  },
  navItem: {
    margin: "0 15px",
  },
  navLink: {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "8px 12px",
    borderRadius: "5px",
    transition: "background 0.3s",
  },
};

export default Navbar;
