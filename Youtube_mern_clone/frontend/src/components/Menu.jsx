import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import LogoImage from '../img/ytlogo2.png'
//icons
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const MenuContainer=styled.div`
  flex:1;
  background-color:${({theme})=>theme.menuBg};
  color:${({theme})=>theme.text};
`;
const Logo=styled.div`
  gap:5px;
  display:flex;
  align-items:center;
  font-size: 2rem;
  padding: 1rem 1rem;
`;
const Img =styled.img`
  width:35px;
  height:25px;
`;
const Option=styled.div`
  display: flex;
  align-items: center;
  gap:1rem;
  margin: 1rem;
  cursor: pointer;
  padding: 0.6rem;
  border-radius: 2rem;
  &:hover {
    background-color: ${({ theme }) => theme.hr};  
  }
`;
const Wrapper =styled.div`
  padding: 1rem;
  position: sticky;
  top:0;
`;
const Hr=styled.hr`
  margin: 1rem 0;
  border:none;
  border-top: solid ${({theme})=>theme.hr} 0.1rem ;
`;
const Login=styled.button`
  display:flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  gap:1rem;
  background: none;
  border: none;
  padding:0;  
  color:${({theme})=>theme.text};
`;
const LoginButton=styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 0.1rem solid #3C9CED;
  color:#3C9CED;
  border-radius: 0.5rem;
  padding:0.4rem;
  cursor: pointer;
  font-size:1.5rem;
`;

export const Menu = ({theme,setTheme}) => {
  return (
    <MenuContainer>
      <Wrapper>
        <Link to='/' style={{textDecoration:"none",color:"inherit"}}>
          <Logo>
              <Img src={LogoImage}></Img>
                  Yuuutup
          </Logo>
        </Link>
        <Option><HomeIcon/> home</Option>
        <Option><ExploreIcon/>Explore</Option>
        <Option><SubscriptionsIcon/>Subscriptions</Option>
        <Hr/>
        <Option>test</Option>
        <Option>asd</Option>
        <Option>asd</Option>
        <Option>sdas</Option>
        <Option>test</Option>
        <Option>asd</Option>
        <Hr/>
        <Link to='/signIn' style={{textDecoration:"none"}}>
        <Login >sign in to like videos comment and subscribe. <LoginButton><AccountCircleIcon/>Login</LoginButton></Login>
        </Link>
        <Hr/>
        <Option onClick={()=>setTheme(!theme)}><SettingsBrightnessIcon/>Light Mode</Option>
      </Wrapper>
    </MenuContainer>
  )
}

