import styled, { ThemeProvider } from 'styled-components'
import { Menu } from './components/Menu';
import { Navbar } from './components/Navbar';
import { darkTheme,lightTheme } from './utils/theme';
import { useState } from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom'

import {Home} from './pages/Home.jsx'
import {Video} from './pages/Video.jsx'
import {SignIn} from './pages/SignIn.jsx';
import './App.css';

const Container=styled.div`
  display:flex;
  background-color:${({theme})=>theme.mainBg};
  min-height: 100vh;
  margin:0;
  padding:0;
  font-family: 'Roboto', sans-serif;
`;
const Main =styled.div`
  display:flex;
  flex-direction: column;
  flex:7;
`;
const Wrapper =styled.div`
width:100%;
`;
function App() {
  const [theme,setTheme]= useState(true)//dark default
  const [hideMenuNavbar, setHideMenuNavbar] = useState(false);
  return (
    <ThemeProvider theme={theme ? darkTheme:lightTheme}>
      <BrowserRouter>
      <Container>
           {!hideMenuNavbar && <Menu theme={theme} setTheme={setTheme} />}
   
          <Main> 
            {!hideMenuNavbar &&<Navbar />}
            <Wrapper>
            <Routes>
              <Route path='/signin' element={<SignIn setHideMenuNavbar={setHideMenuNavbar} />} />
              <Route path='/' element={<Home type="random"/>} />
              <Route path='/trends' element={<Home type="trend"/>} />
              <Route path='/subscriptions' element={<Home type="subscription"/>} />
            
              <Route path='/video/:id' element={<Video/>} />
            </Routes>
            </Wrapper>
          </Main>
      </Container>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
