import React from 'react'
import styled from 'styled-components'
//icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useLocation } from 'react-router-dom';

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

export const Navbar = () => {
  const location = useLocation();

  // Check if the current route is the sign-in page
  const isSignInPage = location.pathname === '/signIn';

  // If it is the sign-in page, don't render the Navbar
  if (isSignInPage) {
    return null;
  }
  return (
    <Container>
      <Wrappers>
        <SearchDiv>
          <SearchInput placeholder='search'></SearchInput>
          <SearchIcon/>
        </SearchDiv>
        <Link to='/signIn' style={{textDecoration:"none"}}>
        <LoginButton><AccountCircleIcon/>Sing in</LoginButton>
        </Link>
      </Wrappers>
    </Container>
  )
}
