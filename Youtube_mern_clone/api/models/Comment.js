import mongoose from "mongoose";

const VideoSchema= new mongoose.Schema({
    userId:{
        type:String,
        required:true,
        unique:true
    },
    videoId:{
        type:String,
        required:true,
        unique:true
    },
    commentText:{
        type:String,
        required:true,
    }
},{timestamps:true});

export default mongoose.model("Video",VideoSchema);