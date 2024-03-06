import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
  display: flex;
  margin:1rem 0;`
const UserDiv=styled.div`
  width:100%;
`;
const UserName=styled.h1`
  display: flex;
  color:${({theme})=>theme.text};
  align-items: center;
  gap:1rem;
`;
const CommentDate=styled.span`
  color:${({theme})=>theme.hr};
  font-size: 0.8rem;
`;
const Avatar=styled.img`
  width: 3rem;
  height:3rem;
  border-radius: 50%;
  background-color: gray;
`;
const CommentText=styled.div`
  color:${({theme})=>theme.text};
`;

export const Comment = () => {
  return (
    <Container>
        <Avatar></Avatar>
        <UserDiv>
          <UserName>Username</UserName>
          <CommentDate>1 second ago</CommentDate>
          <CommentText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident excepturi id similique blanditiis exercitationem, asperiores corporis hic perferendis optio repellat officia architecto, doloremque consequatur esse vitae explicabo magni tempora. Quia natus quis repudiandae delectus ut quaerat, commodi ducimus nisi modi veritatis labore pariatur possimus tenetur in fugiat molestiae necessitatibus libero!</CommentText>
        </UserDiv>
    </Container>
  )
}
