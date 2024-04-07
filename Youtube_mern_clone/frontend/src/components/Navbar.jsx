import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
//icons
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Upload } from './Upload.jsx';


const Container=styled.div`
width: 100%;
`;
const Wrappers=styled.div`
  display: flex;
  justify-content:space-between;
  align-items: center;
`;
const SearchDiv=styled.div`
  color:${({theme})=>theme.text};
  padding: 0.4rem;
  margin-top: 0.5rem;
  margin-left: 20rem;
  width:40rem;
  height:2rem;
  display: flex;
  align-items:center;
`;
const UserDiv=styled.div`
margin-top: 0.4rem;
height: 4rem;
  margin-right: 2rem;
  display: flex;
  align-items: center;
  gap:10px;
  color:${({theme})=>theme.text};

`
const SearchInput=styled.input`
text-indent: 0.5rem;
align-content: center;
width:100%;
height:3rem;
border-radius:5rem;
`;
const LoginButton=styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex:1;//
  max-width: 10rem;
  gap:1rem;
  background-color: transparent;
  border: 0.1rem solid #3C9CED;
  color:#3C9CED;
  border-radius: 0.5rem;
  padding:0.4rem;
  margin :0 1rem;
  cursor: pointer;
  font-size:1.5rem;
`;
const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #999;
`;

export const Navbar = ({search,setSearch}) => {
  const {currUser} = useSelector((state)=>state.user);
 

  const location = useLocation();
  //const selector =useSelector()
  
  // Check if the current route is the sign-in page
  const isSignInPage = location.pathname === '/signIn';

  const [open,setOpen]=useState(false)
  
  const handleUpload=()=> {
    console.log("BUTONA BASLDI " )
    setOpen(!open);

  }

  const handleChange= (e)=>{

    setSearch(e.target.value);
    //console.log(search)

  }
  const navigate=useNavigate();
 const searchButton=async()=>{
  navigate(`search?q=${search}`);
  


 }
  return (
    isSignInPage?null:(
      <>
    <Container>
      <Wrappers>
        <SearchDiv>
          <SearchInput onChange={handleChange}  placeholder='search'></SearchInput>
          <SearchIcon onClick={searchButton}style={{fontSize:"4rem",}}/>
        </SearchDiv>

       { currUser ? (
        <UserDiv>
         
            <VideoCallIcon onClick={handleUpload} style={{fontSize:"2.5rem"}}/>
       
        <Avatar onClick={(e)=>alert("dont touch this")} src={currUser.img}></Avatar>{currUser.userName} 
        </UserDiv>
       ) :(<Link to='/signIn' style={{textDecoration:"none"}}>
        <LoginButton><AccountCircleIcon/>Login</LoginButton>
        </Link>)}
      </Wrappers>

    </Container>
      {open && <Upload setOpen={setOpen}/>}
     </>)

  )
} 
