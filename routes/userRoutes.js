const express = require("express");
const router = express.Router();

const { registerUser } = require('../controllers/registerUser');

router.get("/", function (req, res) {
  res.send("hey it's working");
});

router.post("/register", registerUser);


module.exports = router;