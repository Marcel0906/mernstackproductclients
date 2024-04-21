import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import ErrorResponse from '../utils/errorResponse.js';


// check if user is authenticated
const isAuthenticated = async (req, res, next) =>{

    const {token} = req.cookies;

    // make sure token exists
    if (!token){
        return next (new ErrorResponse('You must log in to access this ressource', 401));
    }

    try {
        //verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();

    } catch (error) {
        return next (new ErrorResponse('You must log in to access this ressource', 401));
    }
}

// admin middleware
const isAdmin = (req, res, next) =>{
    if (req.user.role === 0){
        return next (new ErrorResponse('Access denied, you must be an admin', 401));
    }
    next();

}

export {isAuthenticated, isAdmin};