import React from 'react'
import styled from 'styled-components'
//icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

const Container=styled.div`
width: 100%;
`
const Wrappers=styled.div`
  display: flex;
  justify-content:space-evenly;
  align-items: center;
`
const SearchDiv=styled.div`
  color:${({theme})=>theme.text};
  padding: 0.4rem;
  margin-top: 0.5rem;
  width:40rem;
  height:2rem;
  display: flex;
  align-items:center;
`
const SearchInput=styled.input`
text-indent: 0.5rem;
align-content: center;
width:100%;
height: 2rem;
border-radius:5rem;
`
const LoginButton=styled.button`
  display: flex;
  align-items: center;


  position: absolute;//
  top:0.5rem;
  right:0.5rem;

  gap:1rem;
  background-color: transparent;
  border: 0.1rem solid #3C9CED;
  color:#3C9CED;
  border-radius: 0.5rem;
  padding:0.4rem;
  cursor: pointer;
  font-size:1.5rem;
`
export const Navbar = () => {
  return (
    <Container>

      <Wrappers>
        <SearchDiv>
          <SearchInput placeholder='search'>

          </SearchInput>
          <SearchIcon/>
          
        </SearchDiv>

        <LoginButton><AccountCircleIcon/>Sing in</LoginButton>

      </Wrappers>
    </Container>
  )
}
