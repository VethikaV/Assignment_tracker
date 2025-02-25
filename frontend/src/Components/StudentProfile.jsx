import React from "react";

const StudentProfile = () => {
 

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
      <h2>Student Profile</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Date of Birth:</strong> {student.dob}</p>
      <p><strong>Department:</strong> {student.department}</p>
      <p><strong>Batch:</strong> {student.batch}</p>
      <p><strong>Father's Name:</strong> {student.fatherName}</p>
      <p><strong>Mother's Name:</strong> {student.motherName}</p>
      <p><strong>Address:</strong> {student.address}</p>
    </div>
  );
};

export default StudentProfile;
