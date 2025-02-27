import React from "react";
import "./CSS/TeacherProfile.css"; 
import profileImage from './CSS/Teacherprofile_image.jpeg';


function TeacherProfile() {
  return (
    <div className="teacher-profile">
      <div className="profile-header">
      <img src={profileImage} alt="Student" className="profile-image" />
        <h2 className="teacher-name">John Doe</h2>
      </div>
      <div className="profile-details">
        <p><strong>Department:</strong> Computer Science</p>
        <p><strong>Age:</strong> 40</p>
        <p><strong>Designation:</strong> Associate Professor</p>
        <p><strong>Address:</strong> 123, Main Street, City, Country</p>
      </div>
    </div>
  );
}

export default TeacherProfile;
