
let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" }
];

// GET: All users
const getUsers = (req, res) => {
  res.status(200).json(users);
};

// GET: One user
const getUserById = (req, res) => {
  const user = users.find(
    u => u.id === Number(req.params.id)
  );

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  res.status(200).json(user);
};

// POST: Create user
const createUser = (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };

  users.push(newUser);

  res.status(201).json(newUser);
};

module.exports = {
  getUsers,
  getUserById,
  createUser
};
