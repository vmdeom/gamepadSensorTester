const bParser = require("body-parser");
const express = require("express");

const app = express();

var gx, gy, gz, ax, ay, az;

//app setup
app.set("view engine", "ejs");
app.use(bParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("index", {
    gyroX: "0.0",
    gyroY: "0.0",
    gyroZ: "0.0",
    accX: "0.0",
    accY: "0.0",
    accZ: "0.0"
  });
});

//app listener
app.listen(3000, function() {
  console.log("Server started on port 3000")
});
