const express = require("express");
const app = express();

const userRouter = require("./app/routes/users.routes");

app.use(express.json());

app.use("/api/users", userRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});