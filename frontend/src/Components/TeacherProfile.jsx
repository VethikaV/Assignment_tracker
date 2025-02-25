import TeacherProfile from "./TeacherProfile";

function TeacherProfile() {
  
    return (
        <div style={{ padding: "20px", maxWidth: "400px", margin: "auto", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
          <h2>Teacher Profile</h2>
          <p><strong>Name:</strong> {teacher.name}</p>
          <p><strong>Department:</strong> {teacher.department}</p>
          <p><strong>Designation:</strong> {teacher.designation}</p>
          <p><strong>Address:</strong> {teacher.address}</p>
        </div>
      );
    };

export default TeacherProfile;
