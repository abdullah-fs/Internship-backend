
const express = require("express");
const morgan = require("morgan");

const app = express();

// Topic 1: Middleware Pipeline
// Middleware request aur response ke darmiyan execute hota hai.
// app.use() middleware ko register karta hai.
// Middleware ka order important hota hai.

// Topic 2: Morgan - Request Logging
// Morgan terminal mein HTTP requests ki details show karta hai.
// "dev" format method, route, status code aur response time dikhata hai.
app.use(morgan("dev"));

// Topic 3: express.json() - JSON Body Parsing
// Client se aane wali JSON request body ko parse karta hai.
// Iske baad hum req.body se data access kar sakte hain.
app.use(express.json());

// Test Route
app.post("/users", (req, res) => {
  // Client se receive hone wala data
  console.log("Request Data:", req.body);

  // Client ko response bhejna
  res.status(201).json({
    message: "User created successfully",
    user: req.body
  });
});

// Start Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
