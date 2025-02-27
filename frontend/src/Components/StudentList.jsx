import { useEffect, useState } from "react";
import axios from "axios";
import "./CSS/StudentList.css";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("https://assignment-tracker-51ry.onrender.com/students")
      .then((res) => setStudents(res.data))
      .catch((err) => console.error("Error fetching students:", err));
  }, []);

  return (
    <div className="student-list-container">
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            <strong>{student.sName}</strong> - Batch {student.sBatch}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
