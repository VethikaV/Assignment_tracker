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

  return (
    <div className="task-container">
      <h2>Create Assignment</h2>
      <form className="task-form" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={task.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={task.description} onChange={handleChange} required></textarea>
        <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required />
        <button type="submit">Add Task</button>
      </form>

      {/* Task List */}
      <div className="task-list">
        <h3>Assigned Tasks</h3>
        {tasks.length === 0 ? <p>No tasks available</p> : (
          tasks.map((t, index) => (
            <div key={index} className="task-item">
              <h4>{t.title}</h4>
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
