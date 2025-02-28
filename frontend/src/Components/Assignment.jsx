import { useEffect, useState } from "react";
import axios from "axios";
import "./CSS/Assignment.css";

const Assignment = () => {
  const [assignments, setAssignments] = useState([]);
  const [selectedTab, setSelectedTab] = useState("upcoming"); // Tabs: upcoming, due, submitted

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("https://your-backend-url.com/tasks");
        setAssignments(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  // Filter assignments based on status
  const filteredAssignments = assignments.filter((assignment) => {
    if (selectedTab === "upcoming") return assignment.status === "upcoming";
    if (selectedTab === "due") return assignment.status === "due";
    if (selectedTab === "submitted") return assignment.status === "submitted";
    return true;
  });

  return (
    <div className="assignment-container">
      <div className="assignment-header">
        <h2>Assignments</h2>
      </div>

      {/* Tabs Navigation */}
      <div className="assignment-tabs">
        <button
          className={selectedTab === "upcoming" ? "active" : ""}
          onClick={() => setSelectedTab("upcoming")}
        >
          Upcoming
        </button>
        <button
          className={selectedTab === "due" ? "active" : ""}
          onClick={() => setSelectedTab("due")}
        >
          Due
        </button>
        <button
          className={selectedTab === "submitted" ? "active" : ""}
          onClick={() => setSelectedTab("submitted")}
        >
          Submitted
        </button>
      </div>

      {/* Assignment List */}
      <ul className="assignment-list">
        {filteredAssignments.map((assignment, index) => (
          <li key={index} className="assignment-card">
            <h3>{assignment.title}</h3>
            <p>{assignment.description}</p>
            <p className="due-date">
              <strong>Due Date:</strong> {assignment.dueDate}
            </p>
            {selectedTab !== "submitted" && (
              <button className="turn-in-button">Turn In</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Assignment;
