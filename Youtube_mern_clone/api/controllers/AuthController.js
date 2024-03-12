import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from 'bcrypt'
import { createError } from "../createError.js";

export const signUp= async (req,res,next)=>{
    
      try{
            const saltRounds=13;
            const salt =  bcrypt.genSaltSync(saltRounds);
            const hash =  bcrypt.hashSync(req.body.userPassword,salt)
            console.log((req.body.userPassword))//check is there any password
            const newUser= await new User({...req.body,userPassword:hash});
            await newUser.save()
            res.send("user created")
        }catch(err)
        {
            next(err)
        }
};

export const signIn = async (req, res, next) => {
    try {
        const user = await User.findOne({ userName: req.body.userName });
        if (!user) {
            return next(createError(404, "User not found!"));
        }
        if (!user.userPassword) {
            return next(createError(400, "User password is empty or not set!"));
        }
        try{
            const isCorrect =  bcrypt.compareSync((req.body.userPassword), user.userPassword);
            if (!isCorrect) {
                return next(createError(400, "Wrong password"));
            }
            if(isCorrect) res.send("User found");
        }catch(err){
            next(err)
        }
    } catch (err) {
        next(err);
    }
};

