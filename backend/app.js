const express = require("express");
const bodyParser = require("body-parser");
var mongoose = require("mongoose");
const app = express();
const AuthRoute = require("./routes/auth_route");
const HomeRoute = require("./routes/home_route");
const { checkAuth } = require("./routes/auth_route");
const cors = require("cors");
const PasswordCollection = require("./model/password_model");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);
app.use(cors());
app.use(bodyParser.json());

app.use("/auth", AuthRoute);
app.use("/home", checkAuth, HomeRoute);
app.use("/test", async (req, res, next) => {
  const result = PasswordCollection({
    userIdCollection: [
      {
        userId: "sjdvbjdn",
        documents: [new { email: "new", password: "Hello" }.save()],
      },
    ],
  });
  console.log(result);
  res.send();
});

mongoose.connection.once("open", () => {
  app.listen(8080, () => {
    console.log("Server started at: https:localhost:8080");
  });
});
