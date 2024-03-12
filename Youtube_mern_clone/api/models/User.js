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
    subscribers:{
        type:Number,
        default:0
    },
    subscribedChannels:{
        type:[String]
    }
},{timestamps:true});

export default mongoose.model("User",UserSchema);