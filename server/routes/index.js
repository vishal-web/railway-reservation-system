const express = require("express");
const router = express.Router();

const Users = require("./Users.js");
const Auth = require("./Auth.js");

router.use("/users", Users);
router.use("/", Auth);

module.exports = router;
