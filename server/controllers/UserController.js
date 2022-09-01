const asyncHandler = require("../middleware/asyncHandler");
const UserModel = require("../models/UserModel");

const fetchAllUser = asyncHandler(async (req, res, next) => {
  const users = await UserModel.find();

  res.status(200).json({
    status: true,
    data: users,
  });
});

const fetchUser = asyncHandler(async (req, res, next) => {
  const {
    params: { userId },
  } = req;

  const singleUser = UserModel.find(userId);

  res.status(200).json({
    status: true,
    data: singleUser,
  });
});

const createUser = asyncHandler(async (req, res, next) => {
  const post = req.body;

  const newUser = new UserModel(post);
  const newUserData = await newUser.save(post);

  res.status(200).json({
    status: true,
    data: newUserData,
  });
});

const updateUser = (req, res) => {
  res.json({ message: "updateUser" });
};

const deleteUser = (req, res) => {
  res.json({ message: "deleteUser" });
};

module.exports = {
  fetchAllUser,
  fetchUser,
  createUser,
  deleteUser,
  updateUser,
};
