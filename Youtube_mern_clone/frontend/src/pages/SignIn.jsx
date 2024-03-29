import React, { useState } from 'react'
//import { useEffect } from 'react';

import styled from "styled-components"
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/UserSlice.js";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase.js';

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
  padding: 1rem;
  height: 40rem;
  width: 20rem;
  border-radius: 0.4rem;
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
  margin:1rem 0;
  font-size:2rem;
  border-radius:1rem;
  background-color : #9e9b9be8 ;
 `
const SinginButton=styled.button`
height: 2.5rem;
width: 15rem;
margin:1rem 0;
font-size:2rem;
border-radius:1rem;
background-color : #9e9b9be8 ;
`
const GoogleButton=styled.button`

width: 15rem;
display: flex;
justify-content: center;
align-items: center;
gap:0.5rem;
background-color: #fff;
padding: 0.6rem;
border-radius: 1.5rem;
background-color: #5F4DF8;
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
      const res=await axios("http://localhost:8002/api/auth/signin",{method:"post",
      data:{userName:name,userPassword:password},
      withCredentials:true
  
    })

      dispatch(loginSuccess(res.data));
      navigate("/")
    }
    catch(err){
      console.log(err)
      dispatch(loginFailure())

    }

  }

  const loginWithGoogle=async ()=>{
    try{
    signInWithPopup(auth,provider)
    .then(async (googleRes)=>{
      dispatch(loginStart());
      const res=await axios("http://localhost:8002/api/auth/google",{
        method:"post",
        data:{
          userName:googleRes.user.displayName,
          userEmail:googleRes.user.displayName.email,
          userPassword:googleRes.user.reloadUserInfo.localId,
          img:googleRes.user.photoURL
        },
        withCredentials:true
        
    }
    
    )
    return res
    }).then((res)=>{
      dispatch(loginSuccess(res.data))
      navigate("/")
    })
    .catch((err)=>{
      console.log(err)
      dispatch(loginFailure())
    })
  }catch(err){
    console.log(err)
  }}
  return (
    <Container>
      <LoginDiv>
        <Title>Login</Title>

        <UsernameFiled placeholder='username'onChange={handleNameChange}></UsernameFiled>
        <PasswordFiled placeholder='password' onChange={handlePasswordChange}></PasswordFiled>
        
        <SinginButton onClick={handleLogin}>Login</SinginButton>
        <GoogleButton onClick={loginWithGoogle}><GoogleIcon></GoogleIcon>Login with google</GoogleButton>
        <Title>Sign Up</Title>
        <MailField placeholder='E-mail' onChange={handleMailChange}></MailField>
        <UsernameFiled placeholder='username'onChange={handleNameChange}></UsernameFiled>
        <PasswordFiled placeholder='password'onChange={handlePasswordChange}></PasswordFiled>
        
          <SingupButton>Sing Up</SingupButton>
          <div>privacy</div>
      </LoginDiv>

    </Container>
  )
}
