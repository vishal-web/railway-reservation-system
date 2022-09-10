require("dotenv").config({});

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/index.js");
const app = express();
const connectDB = require("./config/db.js");

const PORT = process.env.PORT || 8520;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/api", routes);

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/api", (req, res) => {
  res.json({ message: `Hello from Server!` });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

connectDB();

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
