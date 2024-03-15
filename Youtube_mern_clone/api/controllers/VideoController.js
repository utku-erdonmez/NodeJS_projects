import { createError } from '../createError.js';
import video from '../models/Video.js'
export const addVideo= async (req,res,next)=>{
    try{
        const newVideo= await new video({...req.body,userId:req.decoded.id})
        await newVideo.save();
        res.status(200).json(newVideo)
    }
    catch(err){
        next(err)
    }
} 
//xss açığı? bulunmakta bir kullanıcı başka bir kullanıcın hesabına kendi videosunu yükleyebiliyor.
//sorunlu parametre userId, request içinde tahmin vasıtası ile eklenirse oluyor
//bu durumu ekleme için bir if daha ekleyip decoded.id ile userId bir değilse izin vermem
//ancak başka sıkıntılı parametreler olabilir daha garanti bir çözüme ihtiyacım var
export const updateVideo= async (req,res,next)=>{
    try{
        const getVideo=await video.findById(req.params.id)
        if (!getVideo) return next(createError(404, "Video not found!"));

        if(req.decoded.id===getVideo.userId){ //sadece gerekli kısımları ekledim test edilmesi lazım sorunu çözebilir
            const updatedVideo=await video.findByIdAndUpdate(req.params.id,{	   
                videoTitle:req.body.videoTitle,
                videoDescription:req.body.videoDescription,
                videoImg:req.body.videoImg,
                videoVideo:req.body.videoVideo
            },{new:true})
            res.status(200).json(updatedVideo);
        }
        else return next(createError(403,'You can update only your account!'))
    }catch(err){
        next(err)
    }
}
export const deleteVideo= async (req,res,next)=>{
    try{
        const getVideo=await video.findById(req.params.id)
        if (!getVideo) return next(createError(404, "Video not found!"));
        if(req.decoded.id===getVideo.userId){
            await video.findByIdAndDelete(req.params.id)
            res.status(200).json("The video has been deleted.");
        }
        else{
            return next(createError(403, "You can delete only your video!"));
        }

    }
    catch(err){
        next(err)
    }
} 

export const random=async (req,res,next)=>{
    try{
        const videos = await video.aggregate([{$sample:{size:40}}])
        res.status(200).json(videos)    
    }
    catch(err){
        next(err)
    }
}

export const getVideo=async(req,res,next)=>{
    try{
        const getVideo=await video.findById(req.params.id)
        res.status(200).json(getVideo);


    }catch(err){next(err)}

}
