const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen("3000", (err) => {
  if (!err) {
    console.log("Server is running on port 3000");
  } else {
    console.log(err);
  }
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
