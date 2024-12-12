


const express = require("express");
const { connect } = require("./connect");
const { Routes } = require("./routes");

const app = express();

// Connect to MongoDB
connect();

// Use routes
app.use("/", Routes);

// Start the server
app.listen(4000, () => {
  console.log("Server started on port 4000");
});
