import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CSS/TeacherProfile.css";

function TeacherProfile() {
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    axios.get("https://assignment-tracker-51ry.onrender.com/teachers") // Replace with backend URL if hosted
      .then(response => {
        if (response.data.length > 0) {
          setTeacher(response.data[0]); // Assuming only one teacher profile for now
        }
      })
      .catch(error => console.error("Error fetching teacher data:", error));
  }, []);

  if (!teacher) {
    return <p>Loading teacher profile...</p>;
  }

  return (
    <div className="teacher-profile">
      <div className="profile-header">
        <h2 className="teacher-name">{teacher.sName}</h2>
      </div>
      <div className="profile-details">
        <p><strong>Department:</strong> {teacher.sDepartment}</p>
        <p><strong>Phone:</strong> {teacher.phoneNumber}</p>
        <p><strong>Address:</strong> {teacher.address}</p>
      </div>
    </div>
  );
}

export default TeacherProfile;
