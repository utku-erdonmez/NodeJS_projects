import mongoose from "mongoose";

const VideoSchema= new mongoose.Schema({
    userId:{
        type:String,
        required:true,
        unique:true
    },
    videoTitle:{
        type:String,
        required:true
    },
    videoDescription:{
        type:String,
        required:true
    },
    videoImg:{
        type:String,
        required:true
    },
    videoVideo:{
        type:Number,
        required:true
    },
    videoViews:{
        type:String,
        default:0
    },
    videoTags:{
        type:[String],
        default:[]
    },
    videoLikes:{
        type:String,
        default:[]
    },
    videoDislikes:{
        type:String,
        default:[]
    },
},{timestamps:true});

export default mongoose.model("Video",VideoSchema);