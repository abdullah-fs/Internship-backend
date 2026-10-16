
const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUserById,
  createUser
} = require("../controllers/users.controller");

// GET /api/users
router.get("/", getUsers);

// GET /api/users/1
router.get("/:id", getUserById);

// POST /api/users
router.post("/", createUser);

module.exports = router;
