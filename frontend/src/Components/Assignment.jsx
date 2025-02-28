import { useEffect, useState } from "react";
import axios from "axios";

const Assignment = () => {
  const [assignments, setAssignments] = useState([]);

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

  return (
    <div>
      <h2>Assignments</h2>
      <ul>
        {assignments.map((assignment, index) => (
          <li key={index}>
            <h3>{assignment.title}</h3>
            <p>{assignment.description}</p>
            <p><strong>Due Date:</strong> {assignment.dueDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Assignment;
