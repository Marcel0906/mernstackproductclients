import express from 'express';
const router = express.Router(); 
import {createCategory, getCategories} from "../controllers/categoryController.js";


router.post('/category/create', createCategory );
router.get('/category/all', getCategories );



export default router;