import React from "react";
import "./CSS/Assignment.css";

const Assignment = () => {
  return (
    <div className="assignment-container">
      <div className="assignment-card">
        <h2 className="assignment-title">Assignment Title</h2>
        <p className="assignment-description">
          This is a sample assignment description. Complete it by the due date.
        </p>
        <p className="assignment-dueDate">Due Date: March 5, 2025</p>
      </div>
    </div>
  );
};

export default Assignment;
