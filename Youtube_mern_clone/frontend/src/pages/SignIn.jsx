import React from 'react'
//import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components"


export const SignIn = ({setHideMenuNavbar}) => {


  const Container=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  
  `
  const LoginDiv=styled.div`
    background-color: aliceblue;
      display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 40rem;
    width: 20rem;
  `
 const Title=styled.h1`
font-size: 3rem;
margin: 0.5rem 0;

 `
  const MailField=styled.input`
  height: 3rem;
  width: 15rem;

  `
  const PasswordFiled=styled.input`
    height: 3rem;
  width: 15rem;

  `
    const UsernameFiled=styled.input`
    height: 3rem;
  width: 15rem;

  `
   const SingupButton=styled.button`
   height: 2.5rem;

   width: 15rem;
   margin:3rem 0;
   font-size:2rem;
   border-radius:1rem;
   background-color : orange ;
   `
  
  return (
    <Container>
      <LoginDiv>
        <Title>Login</Title>

        <MailField placeholder='E-mail'></MailField>
        <PasswordFiled placeholder='password'></PasswordFiled>
        
          <SingupButton>Login Button</SingupButton>
        
        <Title>Sign Up</Title>
        <MailField placeholder='E-mail'></MailField>
        <UsernameFiled placeholder='username'></UsernameFiled>
        <PasswordFiled placeholder='password'></PasswordFiled>
        
          <SingupButton>Sing Up Button</SingupButton>
        
      </LoginDiv>
    </Container>
  )
}
