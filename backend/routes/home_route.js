const express = require("express");
const router = express.Router();
const PasswordCollection = require("../model/password_model");
var mongoose = require("mongoose");
const User = require("../model/user_model");
const { ObjectId } = require("mongodb");

router.get("/passwords", async (req, res, next) => {
  const result = await User.findOne(
    {
      _id: req.body.userId,
    },
    { passwordList: 1 }
  );
  console.log(result.passwordList);
  res.json(result.passwordList);
});

router.post("/passwords", async (req, res, next) => {
  console.log(req.body);
  const result = await User.updateOne(
    {
      _id: req.body.userId,
    },
    {
      $push: {
        passwordList: {
          email: req.body.email,
          password: req.body.password,
          name: req.body.name,
          username: req.body.username,
          url: req.body.url,
          note: req.body.note,
          type: req.body.type,
        },
      },
    }
  );
  console.log(result);
  res.send();
});

router.post("/passwords/edit", async (req, res, next) => {
  const result = await User.updateOne(
    {
      _id: req.body.userId,
      "passwordList._id": req.body._id,
    },
    {
      $set: {
        "passwordList.$.email": req.body.email,
        "passwordList.$.password": req.body.password,
        "passwordList.$.username": req.body.username,
        "passwordList.$.name": req.body.name,
        "passwordList.$.note": req.body.note,
        "passwordList.$.url": req.body.url,
        "passwordList.$.type": req.body.type,
      },
    }
  );

  console.log(result);
  res.send();
});

router.delete("/passwords/delete/:_id", async (req, res, next) => {
  const result = await User.updateOne(
    { _id: req.body.userId },
    {
      $pull: {
        passwordList: { _id: req.params._id },
      },
    }
  );
  console.log(result);
  res.send();
});

module.exports = router;
