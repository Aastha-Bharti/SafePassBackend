import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.MONGO_URI as string)

const userSchema = new mongoose.Schema ( {
    username : String,
    email : String,
    password : String
})

const PasswordSchema = new mongoose.Schema({
    website: String,
    username: String,
    password: String,
  });

export const userModel = mongoose.model("User", userSchema)
export const PasswordModel = mongoose.model("Password", PasswordSchema)

