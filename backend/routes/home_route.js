const express = require("express");
const router = express.Router();

router.get("/passwords", (req, res, next) => {
  console.log(req.body.userId);
  res.send();
});

module.exports = router;