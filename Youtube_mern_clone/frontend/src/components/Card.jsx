import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
//import cardImage from '../img/card.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {format} from 'timeago.js'

const Container =styled.div`
  width:${(props) => props.type === "sm" ? "100%":"15rem"};
  display: ${(props) => props.type === "sm" && "flex"};
  cursor: pointer;
  margin-bottom: ${(props) => props.type === "sm" && "0.51rem"};
`;
const Img=styled.img`
  width:${(props) => props.type === "sm" ? "15rem":"15rem"};
  height: 10rem;
`;
const Details=styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2rem;
  height: ${(props) => props.type === "sm" ? "10rem":"100%"};
`;
const VideoName=styled.h1`
  color:${({theme})=>theme.text};
  font-size:1.2rem;
  margin: 0.3rem 0;
`;
const ChannelName=styled.h2`
  color:${({theme})=>theme.hr};
  font-size: 0.8rem;
`;
const Views=styled.div`
  color:${({theme})=>theme.hr};
  margin: ${(props) => props.type === "sm" ? "":"0.3rem 0"};
  font-size: ${(props) => props.type !== "sm" ? "0.7":"0.65rem"};
`;

export const Card = ({ type,video }) => {
  
  const [channel,setChannel]=useState("");
  useEffect(()=>{
    try{
      const fetchChannel=async()=>{
        const res=await axios.get(`http://localhost:8002/api/user/find/${video.userId}`)
        setChannel(res.data)}
      fetchChannel();
    }    catch(err){
      console.log(err);
    }
    
  },[video.userId])
  
  return (
    
    <Link to={`/video/${video._id}`}style={{textDecoration:"none",color:"inherit"}}>
      <Container type={type}>
        {video.videoImg&&<Img src={video.videoImg}  type={type} ></Img>}
        <Details type={type}>
              <VideoName>{video.videoTitle}</VideoName>
              <ChannelName>{channel.userName}</ChannelName>
              <Views type={type}>{video.videoViews} Views • {format(video.createdAt)}</Views>
        </Details>
      </Container>
    </Link>
  )
};
