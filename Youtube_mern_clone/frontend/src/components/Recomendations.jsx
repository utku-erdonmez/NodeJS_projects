import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Card} from './Card.jsx'
export const Recomendations = () => {
    const [videos,setVideos]=useState([])
    useEffect(()=>{
      
        const fetchVideos=async()=>{
            const res= await axios("http://localhost:8002/api/video/random",{
                method:"get",
              });
              return setVideos(res.data.slice(0,12))
        
    }
  
      
      fetchVideos()},[])
  return (
    <div>{videos.map((video)=><Card key={video._id} type={"lm"} video={video}></Card>)}</div>
  )
}
