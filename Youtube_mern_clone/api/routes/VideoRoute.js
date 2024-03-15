import express  from "express";
import { verifyToken } from "../verifyToken.js";
import { addVideo, updateVideo,random, getVideo } from "../controllers/VideoController.js";

const router=express.Router();

router.post('/add/',verifyToken,addVideo)
router.put('/update/:id',verifyToken,updateVideo)
router.delete('/delete/:id',verifyToken,)
router.get("/random", random)
router.get("/getvideo/:id", getVideo)
export default router;