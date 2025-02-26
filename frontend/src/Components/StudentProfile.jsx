import React from "react";
import "./CSS/StudentProfile.css";

const StudentProfile = () => {
  return (
    <div className="student-profile">
      <h2>Student Profile</h2>
      <div className="profile-details">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Department:</strong> Computer Science</p>
        <p><strong>Year:</strong> 3rd Year</p>
        <p><strong>Address:</strong> 123 Main Street, City</p>
      </div>
    </div>
  );
};

export default StudentProfile;
