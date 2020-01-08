const express = require("express");
const app = express();

// app.use("/public", express.static(__dirname + "/public"))
console.log("\nInitializing server...");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

app.listen(1337, () => {
  console.log("Server running");
});