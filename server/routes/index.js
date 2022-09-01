const express = require("express");
const router = express.Router();

const Users = require("./Users.js");

router.use("/users", Users);

module.exports = router;
