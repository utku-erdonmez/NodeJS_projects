import video from '../models/Video.js'
export const addVideo= async (req,res,next)=>{
    new video({userId:req.decoded.id},...req.body)
    await newVideo.save();
    res.status(200).json(newVideo)
} 
export const updateVideo= async (req,res,next)=>{
    const updatedVideo=await video.findByIdAndUpdate(req.decoded.id)
}