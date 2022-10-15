require("dotenv").config();

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
// const session = require("express-session");
const cors = require("cors");

const routes = require("./routes/index.js");
const app = express();
const connectDB = require("./config/db.js");
const errorHandler = require("./middleware/errorHandler.js");

const PORT = process.env.PORT || 8520;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// app.use(
//   session({
//     secret: "sshhhhhhhhphirrrrrkoiiiiiihainnnnnnnnnn..........!",
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: true },
//   })
// );

app.use("/api", routes);

app.use(errorHandler);

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/ping", (req, res) => {
  res.json({ message: `Hello from Server!` });
});

app.get("/", (req, res) => {
  res.json({ message: `Hello from Server!` });
  // res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

connectDB();

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
