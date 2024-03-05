import styled, { ThemeProvider } from 'styled-components'
import { Menu } from './components/Menu';
import { Navbar } from './components/Navbar';
import { darkTheme,lightTheme } from './utils/theme';
import { useState } from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import {Home} from './pages/Home.jsx'
const Container=styled.div`
  display:flex;
  background-color:${({theme})=>theme.mainBg};
  min-height: 100vh;
  margin:0;
  padding:0;
`;
const Main =styled.div`
  display:flex;
  flex-direction: column;
  flex:7;
`;
const Wrapper =styled.div`


`;

function App() {
  const [theme,setTheme]= useState(true)//dark default
  return (
    <ThemeProvider theme={theme ? darkTheme:lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu theme={theme} setTheme={setTheme}/>
          <Main> 
            <Navbar/>
            <Wrapper>
              <Routes>
                <Route path='/'>
                  <Route index element={<Home/>}></Route>
                  <Route path='video'>
                    <Route path=':id'></Route>
                  </Route>

                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>

  );
}

export default App;
