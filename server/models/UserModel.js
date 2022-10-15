const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      required: true,
      match: /.+\@.+\..+/,
      unique: true,
    },
    contactno: String,
    password: String,
    hash: String,
    salt: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", userSchema);
