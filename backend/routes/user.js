import express from 'express';
const router = express.Router(); 
import {signup, signin, logout, singleUser } from "../controllers/auth";


router.post('/signup', signup );
router.post('/signin', signin );
router.get('/logout', logout );
router.get('/user/:id', singleUser );



export default router;