import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import errorHandler from './middleware/error.js';

dotenv.config();

const app = express();

//IMPORT ROUTES
import authRoutes from './routes/auth.js';
import productRoutes from './routes/product.js';
import categoryRoutes from './routes/category.js';
import bannerRoutes from './routes/banner.js';




// CONNECT DATABASE
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(()=> console.log('DB connected'))
.catch((err)=> console.log(err));

// MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
     
    extended: true
    }));
app.use(cookieParser());
app.use(cors());


// ROUTES MIDDLEWARE
app.use("/api", authRoutes)
app.use("/api", productRoutes)
app.use("/api", categoryRoutes)
app.use("/api", bannerRoutes)



//ERROR MIDDLEWARE
 app.use(errorHandler);

const port = process.env.PORT || 8000;


app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
})