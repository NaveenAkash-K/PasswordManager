const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  userId: String,
  name: String,
  username: String,
  email: String,
  password: String,
  url: String,
  type: String,
  note: String,
});

const Password_model = mongoose.model("Password", schema);

module.exports = Password_model;