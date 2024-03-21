import React from 'react'
import styled from 'styled-components'
import channelImage from '../img/card.png'
import { Card } from '../components/Card';
//icons
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import { Comments } from '../components/Comments';

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
  return (
    <Container>
        <Content>
          <VideoDiv>
          <iframe    height= '620' width='100%'src="https://www.youtube.com/embed/ppG81e4utp3Mo?si=EcdrY0o4EA9VnrCj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowfullscreen" allowfullscreen="true"></iframe>
          </VideoDiv>
          <VideoTitle>Video title here</VideoTitle>
          <VideoDetails>
            {/* <VideoInfo>21k Views • 1 Day Ago</VideoInfo> */}
            <ChannelDiv>
              <ChannelImg src={channelImage}></ChannelImg>
              <ChannelDetails>
                <ChannelName>Somechannel </ChannelName>
                <ChannelSubscribers>11K Subscribers</ChannelSubscribers>
              </ChannelDetails>
              <SubscribeButton>Subscribe</SubscribeButton>
            </ChannelDiv>      
            <VideoButtons>
            <Button>
              <ThumbUpOutlinedIcon /> 123
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon /> 0
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
            </VideoButtons>
          </VideoDetails>       
          <VideoDescription>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis sed neque eum doloremque vi Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem dolore quaerat cum ipsa soluta dolorem, minus nobis ipsum maxime. Vitae impedit fuga modi cum tempore totam, magnam ad quis, neque, quas voluptas blanditiis vel voluptates in? Minima omnis eos recusandae velit veniam delectus, vel, provident labore nesciunt quam molestias ea. tae, facere natus quisquam excepturi recusandae eos.</VideoDescription>
          <Hr></Hr>
          <Comments/> 
        </Content>    
      <Recommend>
        <Card  type="sm"/>
        <Card  type="sm"/>
        <Card  type="sm"/>
        <Card  type="sm"/>
        <Card  type="sm"/>
        <Card  type="sm"/>
        <Card  type="sm"/>
        <Card  type="sm"/>
        <Card  type="sm"/>  
      </Recommend>
    </Container>
  )
}
