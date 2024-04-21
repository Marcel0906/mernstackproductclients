import express from 'express';
const router = express.Router(); 
import {createBanner, displayBanner} from "../controllers/bannerController.js";


router.post('/banner/create', createBanner );
router.get('/fetch/banner', displayBanner );



export default router;