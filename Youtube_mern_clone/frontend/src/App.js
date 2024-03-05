import styled, { ThemeProvider } from 'styled-components'
import { Menu } from './components/Menu';
import { Navbar } from './components/Navbar';
import { darkTheme,lightTheme } from './utils/theme';
import { useState } from 'react';

const Container=styled.div`
  display:flex;
  background-color:${({theme})=>theme.mainBg};
  min-height: 100vh;
  margin:0;
  padding:0;

`;
const Main =styled.div`
 
  display:flex;
  flex:7;

`;
const Wrapper =styled.div`
display: block;
`;

function App() {
  const [theme,setTheme]= useState(true)//dark default
  return (
    <ThemeProvider theme={theme ? darkTheme:lightTheme}>
      <Container>
        <Menu theme={theme} setTheme={setTheme}/>
        <Main> 
          <Navbar/>
          <Wrapper>
            
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
