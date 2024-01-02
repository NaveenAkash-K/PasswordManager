const express = require("express");
const bodyParser = require("body-parser");
var mongoose = require("mongoose");
const app = express();
const AuthRoute = require("./routes/auth_route");
const { checkAuth } = require("./routes/auth_route");
const cors = require("cors");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);
app.use(cors());
app.use(bodyParser.json());

app.use("/auth", AuthRoute);

mongoose.connection.once("open", () => {
  app.listen(8080, () => {
    console.log("Server started at: https:localhost:8080");
  });
});
