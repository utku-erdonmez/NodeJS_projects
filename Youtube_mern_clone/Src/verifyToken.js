import jwt from 'jsonwebtoken'
import { createError } from './createError.js'
import dotenv from 'dotenv'

dotenv.config();

export const verifyToken=(req,res,next)=>{
    const token=req.cookies.access_token
    if (!token) return next(createError(401,'you are not authenticated'))
    try{
    jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{

        req.decoded=decoded;
        return next();
    
    });
    }catch(err){
        next(err)}
    }  