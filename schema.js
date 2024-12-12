

// const mongoose = require("mongoose");

// // Image Schema
// const ImageSchema = new mongoose.Schema({
//   filename: {
//     type: String,
//     required: true,
//   },
//   filepath: {
//     type: String,
//     required: true,
//   },
// });

// module.exports = mongoose.model("Image", ImageSchema);


// 2
const mongoose = require("mongoose");

// Image Schema
const ImageSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  data: {
    type: Buffer, // Stores the binary data of the image
    required: true,
  },
  contentType: {
    type: String, // Stores the MIME type (e.g., image/png, image/jpeg)
    required: true,
  },
});

module.exports = mongoose.model("Image", ImageSchema);

