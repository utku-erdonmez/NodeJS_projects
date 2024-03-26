import React, { useState } from 'react'
//import { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import styled from "styled-components"
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/UserSlice.js";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

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
const SinginButton=styled.button`
height: 2.5rem;
width: 15rem;
margin:3rem 0;
font-size:2rem;
border-radius:1rem;
background-color : orange ;
`


export const SignIn = () => {

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch=useDispatch();
  const navigate = useNavigate();

  const handleMailChange = (e) => {
    setMail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleLogin=async(e)=>{
    e.preventDefault();
    dispatch(loginStart())
    try{
      
      const res=await axios.post("http://localhost:8002/api/auth/signin",{userName:name,userPassword:password})
      
      dispatch(loginSuccess(res.data));
      navigate("/")
    }
    catch(err){
      console.log(err)

    }

  }

  return (
    <Container>
      <LoginDiv>
        <Title>Login</Title>

        <UsernameFiled placeholder='username'onChange={handleNameChange}></UsernameFiled>
        <PasswordFiled placeholder='password' onChange={handlePasswordChange}></PasswordFiled>
        
          <SinginButton onClick={handleLogin}>Login Button</SinginButton>
        
        <Title>Sign Up</Title>
        <MailField placeholder='E-mail' onChange={handleMailChange}></MailField>
        <UsernameFiled placeholder='username'onChange={handleNameChange}></UsernameFiled>
        <PasswordFiled placeholder='password'onChange={handlePasswordChange}></PasswordFiled>
        
          <SingupButton>Sing Up</SingupButton>
        
      </LoginDiv>
    </Container>
  )
}
