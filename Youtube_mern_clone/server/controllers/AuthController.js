import User from "../models/User.js";
import bcrypt from 'bcrypt'
import { createError } from "../createError.js";
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";

dotenv.config();
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
        const isCorrect =  bcrypt.compareSync((req.body.userPassword), user.userPassword);
        if (!isCorrect) {
            return next(createError(400, "Wrong password"));
        }
        const token=jwt.sign({id:user._id},process.env.SECRET_KEY)
        //console.log('Memory usage:', process.memoryUsage());
        res
            .cookie("access_token",token,{
                httpOnly:true//prevents document.cookie
            })
            .status(200)
            .json({...user._doc, userPassword: "hidden"});
    
    } catch (err) {
        next(err); 
    } 
};

export const googleAuth=async(req,res,next)=>{
    try{
        const user = await User.findOne({ userName: req.body.userName });
        if(user){
            const token=jwt.sign({id:user._id},process.env.SECRET_KEY)
            res
            .cookie("access_token",token,{
                httpOnly:true//prevents document.cookie
            })
            .status(200)
            .json({...user._doc, userPassword: "hidden"});
        }else{
                const saltRounds=13;
                const salt =  bcrypt.genSaltSync(saltRounds);
                const hash =  bcrypt.hashSync(req.body.userPassword,salt)
        
                const newUser= await new User({...req.body,userPassword:hash});
                await newUser.save()
                const token=jwt.sign({id:newUser._id},process.env.SECRET_KEY)
                res
                    .cookie("access_token",token,{
                        httpOnly:true//prevents document.cookie
                    })
                    .status(200)
                    .json({...user._doc, userPassword: "hidden"});
        }
    }catch(err){
        console.log(err)
        next(err)
    }

}