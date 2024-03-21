import { createError } from '../createError.js'
import user from '../models/User.js'
import bcrypt from 'bcrypt'

export const updateUser = async (req,res,next) => {
    if(req.params.id===req.decoded.id){
        try{
            //we should bcrypt before update bcause all passwords in db encoded
            const saltRounds=13;
            const salt =  bcrypt.genSaltSync(saltRounds);
            const hash =  bcrypt.hashSync(req.body.userPassword,salt)

            const updatedUser= await user.findByIdAndUpdate(req.params.id,
                {
                $set:{...req.body,userPassword:hash}
                }
            ,{new:true});
            res.status(200).json(updatedUser)

        }catch(err){
            return next(err)   
        }
    }
    else{
        return next(createError(403,'You can update only your account!'))
    }

}
export const deleteUser=async (req,res,next)=>{
    if(req.params.id===req.decoded.id){
        try{
         
            const updatedUser= await user.findByIdAndDelete(req.params.id);
            res.status(200).json('user deleted')

        }catch(err){
            next(err)   
        }
    }
    else{
        next(createError(403, 'You can delete only your account!'))
    }


     
}
export const getUser=async(req,res,next)=>{
    try{
    const getUser = await user.findById(req.params.id);
    res.status(200).json(getUser)
     }catch(err){
        return next(err)
     }
 }
export const subscribeUser= async(req,res,next)=>{
    try{
        await user.findByIdAndUpdate(req.decoded.id,{$push:{subscribedChannels:req.params.id}})
        await user.findByIdAndUpdate(req.params.id,{
            $inc:{subscriberCount:1},
            $push:{subscriberChannels:req.decoded.id}
        });

        res.status(200).json('User subscribed successfully');
    
    }catch(err){
        return next(err)
    }
    
}
export const unSubscribeUser=async(req,res,next)=>{
    try{
        await user.findByIdAndUpdate(req.decoded.id,{$pull:{subscribedChannels:req.params.id}})
        await user.findByIdAndUpdate(req.params.id,{
            $inc:{subscriberCount:-1},
            $pull:{subscriberChannels:req.decoded.id}
        });

        res.status(200).json('User unsubscribed successfully');
    
    }catch(err){
        return next(err)
    }
    

}
