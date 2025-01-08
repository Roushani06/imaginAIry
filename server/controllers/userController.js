import userModel from "../model/userModel.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import 'dotenv/config';


const registerUser = async (req, res) => {
    try{
        const {name, email, password} = req.body;

       if(!name || !email || !password){
           return res.json({success: false, message: "Missing details"});
       }

       const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(password, salt);

         const userData = await userModel.create({
            name,
            email,
            password: hashedPassword
        });

        const newUser = new userModel(userData);
        const user = await newUser.save();
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);

        res.json({success: true, token, user: {name: user.name}});
    }catch(error){
        console.log(error);
        res.json({success: false, message: `An error occurred: ${error.message}`});
    }
}


const loginUser = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await userModel.findOne({email});

        if(!user){
            return res.json({success: false, message: "User not found"});
        }

        const isMatch = await bcrypt.compare(password, user.password);


if(isMatch){
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
            return res.json({success: true, token, user: {name: user.name}});
        }
        else{
            return res.json({success: false, message: "Invalid credentials"});
        }

        
    }
    catch(error){
        console.log(error);
        res.json({success: false, message: `An error occurred: ${error.message}`});
    }
}

const userCredit = async (req, res) => {
    try{
        const {userId} = req.body;

        const user = await userModel.findById(userId);
        res.json({success: true, creditBalance: user.creditBalance, user: {name: user.name}});
    }
    catch(error){
        console.log(error);
        res.json({success: false, message: `An error occurred: ${error.message}`});
    }
}

export {registerUser, loginUser, userCredit};