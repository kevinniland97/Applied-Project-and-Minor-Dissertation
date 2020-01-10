const express = require("express");
const app = express();

// app.use("/public", express.static(__dirname + "/public"))
console.log("\nInitializing server...");

app.get("/algorithms_visualizer", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

app.listen(2551, () => {
  console.log("Server running");
});