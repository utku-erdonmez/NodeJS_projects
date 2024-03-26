import React, { useEffect } from "react"
import {Card} from '../components/Card'
import styled from "styled-components"
import { useState } from "react";
import axios from 'axios'

const Container=styled.div`
    padding-top:1rem;
`;
const CardDiv=styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;  
`;
export const Home=({type})=>{
    

    const[videos,setVideos]=useState([]);

    useEffect(()=>{
      
        const fetchVideos=async ()=>{
            try{
        
                const res = await axios.get(`http://localhost:8002/api/video/${type}`);
                setVideos(res.data.slice(0, 24))
                
            }catch(err){
                console.log(err)
            }
             
         }
         fetchVideos();
    },[type]);
    
    return(  
        <Container>
            <CardDiv>
                {videos.map((video)=>{
                    
                    return <Card  video={video}/>//key neden var
                })}

            </CardDiv>
        </Container>)
} 
//30
//11.33