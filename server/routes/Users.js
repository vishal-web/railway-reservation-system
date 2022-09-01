const express = require("express");

const {
  fetchAllUser,
  createUser,
  updateUser,
  deleteUser,
  fetchUser,
} = require("../controllers/UserController.js");

const router = express.Router();

router.get("/", fetchAllUser);
router.post("/", createUser);
router.get("/:userId", fetchUser);
router.put("/:userId", updateUser);
router.delete("/:userId", deleteUser);

module.exports = router;
