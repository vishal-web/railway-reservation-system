const fetchAllUser = (req, res) => {
  res.json({ message: "fetchAllUser" });
};

const fetchUser = (req, res) => {
  res.json({ message: "fetchUser" });
};

const createUser = (req, res) => {
  res.json({ message: "createUser" });
};

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
