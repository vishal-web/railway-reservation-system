const jwt = require("jsonwebtoken");

const asyncHandler = require("../middleware/asyncHandler");
const UserModel = require("../models/UserModel");

const verifyUser = asyncHandler(async (req, res, next) => {
  if (req?.headers) {
    const bearerHeader = req.headers["authorization"];

    if (bearerHeader && typeof bearerHeader !== undefined) {
      const bearer = bearerHeader.split(" ");

      const bearerToken = bearer[1];

      req.token = bearerToken;
      req.user = jwt.verify(bearerToken, "secretkey");

      next();
    } else {
      res.status(500).json({
        status: false,
        message: "A token is required for authentication",
      });
    }
  }
});

const getLoggedInUser = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    status: true,
    data: req?.user,
  });
});

const loginUser = asyncHandler(async (req, res, next) => {
  const {
    body: { email, password },
  } = req;
  const data = { status: false };

  if (email && password) {
    const user = await UserModel.findOne({
      email,
      password,
    }).lean();

    if (user) {
      const token = jwt.sign(
        {
          user: {
            id: user?._id,
            firstName: user?.firstName || "",
            lastName: user?.lastName || "",
            email: user?.email,
          },
        },
        "secretkey"
      );

      data.token = token;
      data.status = true;
    } else {
      data.message = "Incorrect email or password.";
    }
  }

  if (!data.status && !data?.message) {
    data.message = "Something went wrong";
  }

  res.status(200).json({
    ...data,
  });
});

module.exports = {
  loginUser,
  getLoggedInUser,
  verifyUser,
};
