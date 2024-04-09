import express from 'express'
import { verifyToken } from '../verifyToken.js'
import { addComment, deleteComment, getComments } from '../controllers/CommentController.js'

const router=express.Router();
router.post("/add",verifyToken,addComment);
router.delete("/delete",verifyToken,deleteComment);
router.get("/:id",getComments);

export default router;