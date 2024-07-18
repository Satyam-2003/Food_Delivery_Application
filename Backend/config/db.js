import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://satyam200singh:Saisha2030@cluster0.iwslaru.mongodb.net/food-delivery').then(()=>console.log("DB connected"))
}