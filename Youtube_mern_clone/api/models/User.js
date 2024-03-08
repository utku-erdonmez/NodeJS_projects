import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    userEmail:{
        type:String,
        required:true,
        unique:true
    },
    userPassword:{
        type:String,
        required:true,
        unique:true//bunu kaldır denemek için koydum
    },
    img:{
        type:String
    },
    subscribers:{
        type:Number,
        default:0
    },
    subscribedChannels:{
        type:[String]
    }
},{timestamps:true});

export default mongoose.model("User",UserSchema);