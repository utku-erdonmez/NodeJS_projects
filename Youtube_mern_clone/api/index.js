import express from 'express'
import mongoose, { mongo } from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/userRoute.js'
import videoRouter from './routes/VideoRoute.js'
// import commentRouter from './routes/commentRoute.js'
import authRouter from './routes/AuthRoute.js'
import cookieParser from 'cookie-parser'

const App=express();
dotenv.config()

const connect =()=>{
    mongoose.connect(process.env.MONGO_URI).then((e)=>console.log("connected to db")).catch((err)=>{console.log( err)})
};
App.use(cookieParser()); 
App.use(express.json())//conv erts json to a js object

App.use('/api/user/',userRouter)
App.use('/api/video/',videoRouter)
// App.use('/api/comment/',commentRouter)
App.use('/api/auth/',authRouter)
App.get("/",(req,res)=>{res.send("test")})
App.use((err,req,res,next)=>{
    const status = err.status ||501;
    const message = err.message||"unknown error occured"
    return res.status(status).json({
        success:false,
        status:status,
        message:message
     });
});

App.listen(8002,()=>{ 
    connect()
    console.log("listening started")
});

//1.15 saat 14.30

//1 saat 10 dakika 15.45