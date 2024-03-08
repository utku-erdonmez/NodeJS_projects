import express from "express";  
import test from "../controllers/UserController.js";

const router =express.Router();

router.get('/userroute',test);
router.get('/userroute/createuser',test)
export default router;