import express from 'express';
const router = express.Router(); 
import {signup, signin, logout, singleUser, userProfile } from "../controllers/auth.js";
import {isAuthenticated} from "../middleware/auth.js";


router.post('/signup', signup );
router.post('/signin', signin );
router.get('/logout', logout );
router.get('/getme', isAuthenticated,  userProfile );
router.get('/user/:id', singleUser );



export default router;