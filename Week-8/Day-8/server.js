
const express = require("express");
const morgan = require("morgan");

const app = express();

// Middleware 1: HTTP requests ko terminal mein log karta hai
app.use(morgan("dev"));

// Middleware 2: JSON request body ko parse karta hai
app.use(express.json());

// In-memory data: server restart hone par data reset ho jayega
let tasks = [
  { id: 1, title: "Learn Express" },
  { id: 2, title: "Practice REST API" }
];

// 1. GET: Saare tasks return karo
app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

// 2. POST: Naya task create karo
app.post("/tasks", (req, res) => {
  const { title } = req.body;

  if (!title || !title.trim()) {
    return res.status(400).json({
      message: "Task title is required"
    });
  }

  const newTask = {
    id: tasks.length
      ? Math.max(...tasks.map(task => task.id)) + 1
      : 1,
    title: title.trim()
  };

  tasks.push(newTask);

  res.status(201).json({
    message: "Task created successfully",
    task: newTask
  });
});

// 3. DELETE: ID ke mutabiq task delete karo
app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  const taskExists = tasks.some(task => task.id === id);

  if (!taskExists) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  tasks = tasks.filter(task => task.id !== id);

  res.status(200).json({
    message: "Task deleted successfully"
  });
});

// Server start karo
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
