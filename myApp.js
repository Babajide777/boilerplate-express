var express = require("express");
var app = express();
const path = require("path");
let public = path.join(__dirname, "/public");
require("dotenv").config();

const MESSAGE_STYLE = process.env.MESSAGE_STYLE;

app.use(express.static(public));

console.log("Hello World");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/json", (req, res) => {
  MESSAGE_STYLE === "uppercase"
    ? res.json({ message: "Hello json".toUpperCase() })
    : res.json({ message: "Hello json" });
});

module.exports = app;
