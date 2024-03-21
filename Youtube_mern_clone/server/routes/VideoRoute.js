import express  from "express";
import { verifyToken } from "../verifyToken.js";
import { addVideo, updateVideo,random, getVideo, trend, deleteVideo, sub,getVideoBySearch} from "../controllers/VideoController.js";

const router=express.Router();

router.post('/add/',verifyToken,addVideo)
router.put('/update/:id',verifyToken,updateVideo)
router.delete('/delete/:id',verifyToken,deleteVideo)
router.get("/random", random)
router.get("/getvideo/:id", getVideo)
router.get("/trend", trend)
router.get("/sub",verifyToken, sub)
//router.get("/tags", getVideoByTags)       remove
router.get("/search", getVideoBySearch)
export default router;