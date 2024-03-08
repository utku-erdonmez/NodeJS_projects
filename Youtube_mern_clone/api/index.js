import express from 'express'
import mongoose, { mongo } from 'mongoose'
import dotenv from 'dotenv'

const App=express()
dotenv.config()


const connect =()=>{
    mongoose.connect(process.env.MONGO).then((e)=>console.log("connected to db")).catch((err)=>{console.log( err)})
};
App.get("/",(req,res)=>{res.send("test")})

App.listen(8001,()=>{
    connect()
    console.log("listening started")
});