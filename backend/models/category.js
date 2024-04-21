import mongoose from "mongoose";



const categorySchema = new mongoose.Schema({

   name: {
       type: String,
       trim: true,
       required : [true, 'Please add a category Name'],
      
   },



}, {timestamps: true});






const category = mongoose.model("Category", categorySchema);
export default category;