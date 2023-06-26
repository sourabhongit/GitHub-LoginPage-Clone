const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config(); // for .env file

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen("process.env.PORT || 5000", (err) => {
  if (!err) {
    console.log("Server is running");
  } else {
    console.log(err);
  }
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const username = req.body.email;
  const password = req.body.pass;
  console.log(username);
  console.log(password);
});
