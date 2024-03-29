//create user
//sign in
//google auth

import express from 'express'
import {signUp, signIn,googleAuth} from '../controllers/AuthController.js'
const router=express.Router()


router.post('/signup',signUp)

router.post('/signin',signIn)

router.post('/google',googleAuth)

export default router;