//update user
//delete 
// get
// subscribe
// unsubscribe
// like 
// dislike 

import express from "express";  
import { deleteUser, getUser, subscribeUser, unSubscribeUser, updateUser } from "../controllers/UserController.js";
import { verifyToken } from '../verifyToken.js';
const router =express.Router();

router.put('/update/:id',verifyToken, updateUser)
router.delete('/delete/:id',verifyToken,deleteUser)
router.get("/find/:id", getUser);
router.put('/sub/:id',verifyToken,subscribeUser)
router.put("/unsub/:id",verifyToken, unSubscribeUser);
export default router;  