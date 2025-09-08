const mongoose = require("mongoose");

function connectDB() {
  const mongoURI = "mongodb://localhost/mydatabase";

  // Define the schema & model *outside* the connection for clarity
  const userSchema = new mongoose.Schema({
    name: String,
    email: String,
  });
  const User = mongoose.model("User", userSchema);

  // Connect and then run DB operations
  mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("Connected to MongoDB");

      // 1. Create and save a document (correct way)
      const user = new User({ name: "Alice", email: "alice@example.com" });
      return user.save();
    })
    .then(() => {
      console.log("User saved to database");

      // 2. Fetch all users after saving
      return User.find();
    })
    .then((users) => {
      console.log("All users:", users);
      mongoose.connection.close();
    })
    .catch((error) => {
      console.error("Error:", error);
      mongoose.connection.close();
    });
}

module.exports = connectDB;
