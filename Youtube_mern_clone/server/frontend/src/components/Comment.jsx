import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { format } from 'timeago.js';

const Container=styled.div`
  display: flex;
  margin:1rem 0;`
const UserDiv=styled.div`
  width:100%;
`;
const UserName=styled.h1`
font-size: 2rem;
  display: flex;
  color:${({theme})=>theme.text};
  align-items: center;
  margin-bottom: 0;
  
`;
const CommentDate=styled.span`
margin-top: 0;
  color:${({theme})=>theme.hr};
  font-size: 0.8rem;
`;
const Avatar=styled.img`
 margin-right: 0.8rem;
  width: 3rem;
  height:3rem;
  border-radius: 50%;
  background-color: gray;
`;
const CommentText=styled.div`
  color:${({theme})=>theme.text};
`;

export const Comment = ({comment}) => {
  const {currUser}=useSelector((state)=>state.user)
  
  const [user,setUser]=useState("")
  useEffect(()=>{
    const findUsername=async()=>{
      const res=await axios(`http://localhost:8002/api/user/find/${comment.userId}`)
     
      setUser(res.data)
      
    }
    findUsername();
   
  },[])

  return (
    <Container>
        <Avatar src={user.img}></Avatar>
        <UserDiv>
          <UserName>{user.userName}</UserName>
          <CommentDate>{format(comment.createdAt)}</CommentDate>
          <CommentText>{comment.commentText}</CommentText>
        </UserDiv>
    </Container>
  )
}
