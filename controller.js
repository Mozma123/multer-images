

// const expressHandler = require("express-async-handler");
// const Image = require("./schema");

// const postImage = expressHandler(async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: "No file found" });
//     }

//     const imageFile = new Image({
//       filename: req.file.filename,
//       filepath: req.file.path,
//     });

//     const savedImage = await imageFile.save();

//     res.status(200).json(savedImage);
//   } catch (error) {
//     console.error("Error saving image:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// module.exports = { postImage };



// 2
const expressHandler = require("express-async-handler");
const Image = require("./schema");

const postImage = expressHandler(async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file found" });
    }

    const imageFile = new Image({
      filename: req.file.filename,
      filepath: req.file.path,
    });

    const savedImage = await imageFile.save();
    res.status(200).json(savedImage);
  } catch (error) {
    console.error("Error saving image:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Optional: Example of a GET route
const getImage = expressHandler(async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json(images);
  } catch (error) {
    console.error("Error retrieving images:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = { postImage, getImage };
