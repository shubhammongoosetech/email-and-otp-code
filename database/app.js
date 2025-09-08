const express = require("express");
const connectDB = require("./db");

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Your application routes and logic here
app.get("/", (req, res) => {
  res.send("Hello from Node.js and MongoDB!");
});

console.log();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
