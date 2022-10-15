const express = require("express");

const {
  loginUser,
  getLoggedInUser,
  verifyUser,
} = require("../controllers/AuthController.js");

const router = express.Router();

router.post("/login", loginUser);
router.get("/loggedInUser", verifyUser, getLoggedInUser);

module.exports = router;
