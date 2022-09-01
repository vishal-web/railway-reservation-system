const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/index.js");
const app = express();

const PORT = process.env.PORT || 8520;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/api", routes);

const connectionUrl = `mongodb+srv://rrs_user:cL7LrjKxAgQ7rpyS@node-story-teller.j6sdr.mongodb.net/railway-reservation-system
?retryWrites=true&w=majority`;

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/api", (req, res) => {
  res.json({ message: `Hello from Server!` });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

mongoose
  .connect(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is listening on PORT ${PORT}`);
    })
  )
  .catch((error) => console.log(error.message));
