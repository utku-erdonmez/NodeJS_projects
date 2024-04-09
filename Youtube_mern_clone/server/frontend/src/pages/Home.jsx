import React, { useEffect } from "react"
import {Card} from '../components/Card'
import styled from "styled-components"
import { useState } from "react";
import axios from 'axios'

const Container=styled.div`
    padding-top:1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;  
`;

export const Home=({type,search})=>{
    

    const[videos,setVideos]=useState([]);
    useEffect(()=>{
      
        const fetchVideos=async ()=>{
            try{
              
                const res = await axios(
                    type === "search"
                      ? `http://localhost:8002/api/video/search?q=${search}`
                      : `http://localhost:8002/api/video/${type}`,
                    {
                      method: "get",
                      withCredentials: true
                    }
                  );
                console.log(res.data)
                setVideos(res.data.slice(0, 24));
        

                
            }catch(err){
                //console.log(err)
            }
             
         }
         fetchVideos();
    },[type]);
    
    return(  
        <Container>
            
                {videos?.map((video)=><Card key={video._id} type={"lm"} video={video}></Card>)}

        </Container>)
} 
//30
//11.33console.log(res.data)