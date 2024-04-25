import {v2 as cloudinary} from "cloudinary";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import express from "express";
import User from "../models/user.js";
import dotenv from "dotenv";

dotenv.config();




cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_KEY, 
    api_secret: process.env.CLOUD_KEY_SECRET 
  });

  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "ProfilePic",
      public_id: (req, file) => `profile_picture_${getCurrentDateTime()}`,
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
    const user = new User({ name, email, profilePicture: req.file.path });
    //save user
    await user.save();
    res.status(201).json(user);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server error" });
  }
});

 export default cloudinary;