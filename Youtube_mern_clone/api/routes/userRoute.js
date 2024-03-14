//update user
//delete 
// get
// subscribe
// unsubscribe
// like 
// dislike 

import express from "express";  
import { updateUser } from "../controllers/UserController.js";

const router =express.Router();

router.put('/:id',updateUser)

export default router; 