

// const express = require("express");
// const { upload } = require("./upload");
// const { postImage } = require("./controller");

// const Routes = express.Router(); // Corrected from express.Routes() to express.Router()

// // POST route for image upload
// Routes.post("/", upload.single("image"), postImage);

// module.exports = { Routes };




// mj
const express = require("express");
const { upload } = require("./upload");
const { postImage } = require("./controller");

const Routes = express.Router(); // Correct usage

// POST route for image upload
Routes.post("/", upload.single("image"), postImage);

module.exports = { Routes };
