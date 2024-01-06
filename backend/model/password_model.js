const mongoose = require("mongoose");

// const password = new mongoose.Schema();

// const userIdCollection = new mongoose.Schema({
//   // userIdCollection fields
//   userId: { type: String, unique: true, required: true },
//   documents: [password], // Embed the document schema as an array

//   // Add more fields as needed
// });

const passwordsCollection = new mongoose.Schema({
  userIdCollection: [
    {
      userId: { type: String, unique: true, required: true },
      documents: [
        {
          email: { type: String },
          password: { type: String },
          // name: String,
          // username: String,
          // url: String,
          // type: String,
          // note: String,
        },
      ],
    },
  ],
});

const PasswordCollection = mongoose.model("Passwords", passwordsCollection);

module.exports = PasswordCollection;
