import { useState } from "react";
import axios from "axios";
import './CSS/StudentForm.css'

const StudentForm = () => {
  const [student, setStudent] = useState({
    sName: "",
    sBatch: "",
    fatherName: "",
    motherName: "",
    address: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://assignment-tracker-51ry.onrender.com/students", student);
      alert("Student Added Successfully!");
    } catch (error) {
      alert("Error Adding Student");
    }
  };

  return (
    <div className="student-form-container">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit} className="student-form">
        <input type="text" name="sName" placeholder="Student Name" onChange={handleChange} required />
        <input type="number" name="sBatch" placeholder="Batch Year" onChange={handleChange} required />
        <input type="text" name="fatherName" placeholder="Father's Name" onChange={handleChange} required />
        <input type="text" name="motherName" placeholder="Mother's Name" onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
        <input type="number" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default StudentForm;
