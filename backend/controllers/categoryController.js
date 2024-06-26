import Category from '../models/category.js';
import ErrorResponse from '../utils/errorResponse.js';


const createCategory = async (req, res, next)=>{


    try {
        const category = await Category.create(req.body);
        res.status(201).json({
            success: true,
            category
        })
        
    } catch (error) {
        console.log(error);
        next(error);
        
    }
   
}

//get all caregories
const getCategories = async (req, res, next)=>{

    try {
        const categories = await Category.find();
        res.status(201).json({
            success: true,
            categories
        })
        
    } catch (error) {
        console.log(error);
        next(error);
        
    }
   
}

export {createCategory, getCategories};