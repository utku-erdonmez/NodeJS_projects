import express from 'express'
import mongoose, { mongo } from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/userRoute.js'
import videoRouter from './routes/videoRoute.js'
import commentRouter from './routes/commentRoute.js'
import authRouter from './routes/AuthRoute.js'
const App=express();
dotenv.config()

const connect =()=>{
    mongoose.connect(process.env.MONGO).then((e)=>console.log("connected to db")).catch((err)=>{console.log( err)})
};
App.use('/api/user/',userRouter)
App.use('/api/video/',videoRouter)
App.use('/api/comment/',commentRouter)
App.use('/api/auth/',authRouter)
App.get("/",(req,res)=>{res.send("test")})


App.listen(8002,()=>{
    connect()
    console.log("listening started")
}); 