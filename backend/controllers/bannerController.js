import Banner from '../models/banner.js';
import ErrorResponse from '../utils/errorResponse.js';
import cloudinary from '../utils/cloudinary.js';



const createBanner = async (req, res, next)=>{

    try {

        let images = [...req.body.images];
        let imagesBuffer = [];

        for (let i =0; i < images.length;  i++){
              const result = await cloudinary.uploader.upload(images[i], {
              folder: "banners",
              width: 1920,
              crop: "scale"
        });

          imagesBuffer.push({
            public_id: result.public_id,
            url: result.secure_url
          })

        }

        req.body.images = imagesBuffer
         const banner = await Banner.create(req.body)
         
        res.status(201).json({
            success: true,
            banner
        })
        
    } catch (error) {
        console.log(error);
        next(error);
        
    }
   
}


//display banner
const displayBanner = async (req, res, next)=>{

    try {
        const banners = await Banner.find()

        res.status(201).json({
            success: true,
            banners,
        })
        
    } catch (error) {
        console.log(error);
        next(error); 
    }
   
}

export {createBanner, displayBanner};