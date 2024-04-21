import express from 'express';
const router = express.Router();
import { createProduct, displayProduct, deleteProduct, productCategory, updateProduct } from "../controllers/productController.js";
import { isAuthenticated, isAdmin } from "../middleware/auth.js";


router.post('/product/create', isAuthenticated, isAdmin, createProduct);
router.get('/products/all', displayProduct);
router.delete('/product/delete/:id', isAuthenticated, isAdmin, deleteProduct);
router.put('/product/update/:id', isAuthenticated, isAdmin, updateProduct);
router.get('/product/categories', productCategory);


export default router;