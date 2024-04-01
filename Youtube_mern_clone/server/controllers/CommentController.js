import { get } from 'mongoose';
import comment from '../models/Comment.js'
import { createError } from '../createError.js';

export const addComment=async(req,res,next)=>{
    try{
        const newComment= await new comment({...req.body,userId:req.decoded.id})
        await newComment.save();
        console.log("comment aded")
        res.status(200).json(newComment);
    }
    catch(err){
        next(err)
    }   

}
export const deleteComment = async(req,res,next)=>{
    const getComment= comment.findById(req.params.id)

    try{
        if (getComment.userId===req.decoded.id){
            await comment.findByIdAndDelete(req.params.id)
            res.status(200).json("comment deleted succsefuly")
        }
        else{
            return next(createError(403,"you have no auth for th,s"))
        }
    }
    catch(err){
        next(err)
    }   

}
export const getComments=async (req,res,next)=>{//takes video id as input
    try{
        const comments = await comment.find({videoId:req.params.id});
        res.status(200).json(comments)
    }catch(err){
        next(err)
    }
}