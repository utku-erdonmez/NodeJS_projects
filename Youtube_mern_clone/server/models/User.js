import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    userEmail:{
        type:String,
        unique:true
    },
    userPassword:{
        type:String,
        required:true,
        
    },
    img:{
        type:String
    },
    subscriberCount:{
        type:Number,
        default:0
    },
    subscriberChannels:{
        type:[String]
    },
    subscribedChannels:{
        type:[String]
    }
},{timestamps:true});

export default mongoose.model("User",UserSchema);