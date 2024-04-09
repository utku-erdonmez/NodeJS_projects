import React, { useEffect, useState } from 'react'
//import profileImg from '../img/card.png'
import styled from 'styled-components'
import { Comment } from './Comment'
import{useDispatch, useSelector} from 'react-redux'
import axios from 'axios';
import { fetchStart,fetchSuccess } from '../redux/CommentSlice';

const CommentButton=styled.button`
border-radius: 1.5rem;
  padding: 0.5rem;
  border: none;
  background-color: #55555565;
  color: ${({theme}) => theme.text};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 5000;
  max-width: 6rem;

`;

const Container=styled.div``
const NewComment=styled.div`
margin: 2rem 0;
display:flex;
align-items:center;
gap:0.5rem;
`
const Avatar=styled.img`
  width: 3rem;
  height:3rem;
  border-radius: 50%;
 
  `;
const InputField=styled.input`
  border: ${({ theme }) => theme.text} solid 0.1rem;
  border-radius:3rem;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  height: 2rem;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem;
  margin: 0 0rem 0 0;
  width: 100%;
  text-indent: 0.5rem;
`;
const Hr=styled.hr`
  margin: 1rem 0;
  border:none;
  border-top: solid ${({theme})=>theme.hr} 0.1rem ;
`;

export const Comments = () => {

  const {currUser}=useSelector((state)=>state.user)
  const {currVideo}=useSelector((state)=>state.video)
  const {currComments}=useSelector((state)=>state.comment)
  const [comment,setComment]=useState("")
  const dispatch=useDispatch();
 

  useEffect(()=>{
    const getComments= async ()=>{
      try{
        dispatch(fetchStart())
        const res=await axios(`http://localhost:8002/api/comment/${currVideo._id}`,{
          method:"get",
        })
        const sortedComments=res.data.sort((a,b)=>a.createdAt<b.createdAt)
        dispatch(fetchSuccess(sortedComments))
      }catch(err){
  
      }
  
    }
    

    getComments()
  },[comment,currVideo._id]);

  const handleComment= async ()=>{
    //do something nd call usefect
    try{
      
      const res=await axios("http://localhost:8002/api/comment/add",{
        method:"post",
        data:{videoId:currVideo._id,commentText:comment},
        withCredentials:true

      }) 
      setComment("")
      
    }catch(err){
      setComment(err)
    }
    
  }
  const handleCommentText=(e)=>{

   
    setComment(e.target.value)

  }

  return (
    <Container>
      <Hr></Hr>
        <NewComment>

          <Avatar src={currUser.img}></Avatar>
          <InputField onChange={handleCommentText} value={comment} placeholder='Add a Comment...'></InputField>
          <CommentButton onClick={handleComment} >comment</CommentButton>
        </NewComment>
        {currComments?.map((comment)=>{
          return <Comment key={comment._id}comment={comment}></Comment>
        })}
    </Container>
  )
}
