const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    contactno: String,
    password: String,
    hash: String,
    salt: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", userSchema);
