import {v2 as cloudinary} from "cloudinary";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import express from "express";

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_KEY, 
    api_secret: process.env.CLOUD_KEY_SECRET 
  });

  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "D07Test",
      public: (req, file) => `profile_picture_${new Date().toISOString()}`,
    },
  });
  
  // Set up Multer middleware for handling file uploads
const upload = multer({ storage: storage });

// Define routes
const app = express();
app.post("/users", upload.single("profilePicture"), async (req, res) => {
  try {
    const { name, email } = req.body;

    // user erstellen mit pfp
    const user = new user({ name, email, profilePicture: req.file.path });
    //save user
    await user.save();
    res.status(201).json(user);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server error" });
  }
});

 export default cloudinary;