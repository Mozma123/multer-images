



// const multer = require("multer");
// const path = require("path");

// // Multer storage configuration
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Save files in the "uploads" directory
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Generate a unique filename
//   },
// });

// // Multer instance
// const upload = multer({ storage: storage });

// module.exports = { upload };




//2
const multer = require("multer");

// Multer storage configuration to store files in memory
const storage = multer.memoryStorage();

// Multer instance
const upload = multer({ storage: storage });

module.exports = { upload };
