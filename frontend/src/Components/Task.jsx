import { useState, useEffect } from "react";
import axios from "axios";
import "./CSS/Task.css";

const Task = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  const [tasks, setTasks] = useState([]);

  // Fetch tasks from backend on page load
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get("https://your-backend-url.com/tasks");
        setTasks(res.data); // Assuming backend returns an array of tasks
      } catch (error) {
        console.error("Error fetching tasks", error);
      }
    };
    fetchTasks();
  }, []);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://your-backend-url.com/tasks", task);
      setTasks([...tasks, res.data]); // Update UI with new task
      alert("Task Added Successfully!");
      setTask({ title: "", description: "", dueDate: "" });
    } catch (error) {
      alert("Error Adding Task");
    }
  };

  // Separate tasks into Current and Previous based on the due date
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
  const currentTasks = tasks.filter((t) => t.dueDate >= today);
  const previousTasks = tasks.filter((t) => t.dueDate < today);

  return (
    <div className="task-container">
      <h2>Create Assignment</h2>
      <form className="task-form" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={task.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={task.description} onChange={handleChange} required></textarea>
        <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required />
        <button type="submit">Add Task</button>
      </form>

      {/* Current Tasks */}
      <div className="task-list">
        <h3>📌 Current Tasks</h3>
        {currentTasks.length === 0 ? <p>No current tasks</p> : (
          currentTasks.map((t, index) => (
            <div key={index} className="task-item current">
              <h4>Task {index + 1}: {t.title}</h4>
              <p>{t.description}</p>
              <small>Due: {t.dueDate}</small>
            </div>
          ))
        )}
      </div>

      {/* Previous Tasks */}
      <div className="task-list">
        <h3>✅ Previous Tasks</h3>
        {previousTasks.length === 0 ? <p>No previous tasks</p> : (
          previousTasks.map((t, index) => (
            <div key={index} className="task-item previous">
              <h4>Task {index + 1}: {t.title}</h4>
              <p>{t.description}</p>
              <small>Due: {t.dueDate}</small>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Task;
