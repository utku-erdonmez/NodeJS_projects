import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { useDispatch, useSelector } from 'react-redux';
//icons
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import { Comments } from '../components/Comments';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { dislike, fetchFailure, fetchStart, fetchSuccess, like } from '../redux/VideoSlice';
import { format } from 'timeago.js';
import ThumbDownAlt from '@mui/icons-material/ThumbDownAlt';

const Container=styled.div`
  display: flex;
  padding: 1rem;
`;
const Content=styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  padding: 0 0.5rem;
`;
const VideoDiv=styled.div``;
const VideoTitle=styled.h1`
  color:${({theme})=>theme.text};
  font-size:3rem;
  font-weight:1000;
`;
const VideoDetails=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ChannelDiv=styled.div`
  display:flex; 
  align-items: center;
  gap:0.5rem;
  `;
const ChannelImg=styled.img`
  width: 3rem;
  height:3rem;
  border-radius: 50%;
`;
const ChannelDetails=styled.div``
const ChannelName=styled.h2`
  color:${({theme})=>theme.text};
`;
const ChannelSubscribers=styled.h6`
margin-top: 0.4rem;
  color:${({theme})=>theme.hr};
`;
const SubscribeButton=styled.button`
border-radius: 1.5rem;
  padding: 0.5rem;
  border: none;
  background-color: red;
  color: ${({theme}) => theme.text};
cursor: pointer;
  font-size: 1rem;
  font-weight: 5000;
  margin-left: 2rem;
`;
const Hr=styled.hr`
  margin: 1rem 0;
  border:none;
  border-top: solid ${({theme})=>theme.hr} 0.1rem ;
`;
const VideoButtons=styled.div`
  color:${({theme})=>theme.hr};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
const Button = styled.div`
  color:${({theme})=>theme.text};
  cursor: pointer;
`;
/*const VideoInfo=styled.div`
  color:${({theme})=>theme.hr};
  margin-left: 1rem;

`; */
const VideoDescription=styled.div`
  color:${({theme})=>theme.text};
  margin-top:1rem;
`;
const Recommend=styled.div`
  flex:1.5;
`;

export const Video = () => {
  const dispatch=useDispatch()
  const videoPath=useLocation().pathname.split("/")[2]
  const [channel,setChannel] = useState({})

  const handleLike=async ()=>{
    try{
      await axios.post(
        `http://localhost:8002/api/video/like/${videoPath}`,
        null, 
        {
            withCredentials: true
        }
    );
      dispatch(like(currUser._id))
    }catch(err){
      console.log(err)

    }
  }
  const handleDislike=async ()=>{
    try{
      await axios.post(
        `http://localhost:8002/api/video/dislike/${videoPath}`,
        null, 
        {
            withCredentials: true
        })
      dispatch(dislike(currUser._id))
    }catch(err){
      console.log(err)
    }
  }


  useEffect(()=>{
    const fetchData=async()=>{
      try {
        dispatch(fetchStart());
        const fetchVideo = await axios.get(`http://localhost:8002/api/video/getVideo/${videoPath}`);

        dispatch(fetchSuccess(fetchVideo.data));
  
        const fetchChannel = await axios.get(`http://localhost:8002/api/user/find/${fetchVideo.data.userId}`);
  
        setChannel(fetchChannel.data);
      } catch (err) {
     
        dispatch(fetchFailure(err)); 
      }
      
    }
    fetchData()

  },[videoPath,dispatch]);//dispatch koymadım

  const {currUser}=useSelector((state)=>state.user)
  const {currVideo}=useSelector((state)=>state.video);


  return (
    <Container>
        <Content>
          <VideoDiv>

          </VideoDiv>
          <VideoTitle>{currVideo.videoTitle}</VideoTitle> 
          <VideoDetails>
          
            <ChannelDiv>
              <ChannelImg src={currVideo.videoImg}></ChannelImg>
              
              <ChannelDetails>
              <ChannelName>{channel.userName} </ChannelName>
                
                <ChannelSubscribers>{channel.subscriberCount+"•"+ format(currVideo.createdAt)} Ago</ChannelSubscribers>
              </ChannelDetails>
              <SubscribeButton>Subscribe</SubscribeButton>
            </ChannelDiv>      
            <VideoButtons>
            <Button onClick={handleLike}>
              {currVideo.videoLikes?.includes(currUser._id)?(< ThumbUpIcon/>):(<ThumbUpOutlinedIcon/>)}{" " }{currVideo.videoLikes?.length}
            </Button>
            <Button onClick={handleDislike}>
            {currVideo.videoDislikes?.includes(currUser._id)?(< ThumbDownAlt/>):(<ThumbDownOffAltOutlinedIcon/>)}{" " }{currVideo.videoDislikes?.length}
            </Button>
            <Button >
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
            </VideoButtons>
          </VideoDetails>       
          <VideoDescription>{currVideo.videoDescription}</VideoDescription>
          <Comments/> 
        </Content>    
      <Recommend>
      </Recommend> 
    </Container>
  )
}
