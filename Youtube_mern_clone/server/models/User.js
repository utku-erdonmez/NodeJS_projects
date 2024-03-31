import mongoose from "mongoose";

const isArraySet=(arr)=>{ 
    try{
        return new set(arr).size===arr.length;}
    catch(err){
        return console.log(err)
    }

}
    
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
        type:[String],
        validate: [isArraySet]
    },
    subscribedChannels:{
        type:[String],
        validate: [isArraySet]
    }
},{timestamps:true});

export default mongoose.model("User",UserSchema);