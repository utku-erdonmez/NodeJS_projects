import React from 'react'
import profileImg from '../img/card.png'
import styled from 'styled-components'
import { Comment } from './Comment'

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
  padding: 0.5rem;
  margin: 0 1rem 0 0;
  width: 100%;
  text-indent: 0.5rem;
`;

export const Comments = () => {
  return (
    <Container>
        <NewComment>
          <Avatar src={profileImg}></Avatar>
          <InputField placeholder='Add a Comment...'></InputField>
        </NewComment>
        
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/> 
    </Container>
  )
}
