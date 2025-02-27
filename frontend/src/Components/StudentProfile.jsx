import React from "react";
import "./CSS/StudentProfile.css";
import profileImage from "../assets/Student_profile.jpeg"; // Update with actual image path

const StudentProfile = () => {
  return (
    <div className="student-profile">
      <h2>Student Profile</h2>
      <div className="profile-header">
        <img src={profileImage} alt="Student" className="profile-image" />
        <h3>John Doe</h3>
      </div>
      <div className="profile-details">
        <p><strong>Department:</strong> Computer Science</p>
        <p><strong>Year:</strong> 3rd Year</p>
        <p><strong>Address:</strong> 123 Main Street, City</p>
      </div>
    </div>
  );
};

export default StudentProfile;

