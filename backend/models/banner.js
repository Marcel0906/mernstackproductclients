import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({


   images: [
    {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }
   ],


}, {timestamps: true});

const Banner = mongoose.model("Banner", bannerSchema);
export default Banner;