import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import GlobalStyle from "./globalStyles"
import { darkTheme, LightTheme } from './utils/Theme';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Videos from './pages/Videos';
import Home from './pages/Home';
import Signin from './pages/Signin';

const Container=styled.div`
display:flex;
 `
const Main=styled.div`
flex:7;
background-color: ${({theme})=>theme.bg};
`
const Wrapper=styled.div`
padding: 22px 96px;
`

function App() {
  const [darkMode,setDarkMode]=useState(true)
  return (
    <ThemeProvider theme={darkMode? darkTheme:LightTheme}>
    <Container >
      <BrowserRouter>
      <GlobalStyle />
      <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
    <Main>
      <Navbar/>
      <Wrapper>
      <Routes>
        <Route path="/">
        <Route index element={<Home/>}/>
        <Route path='signin' element={<Signin/>}/>
        <Route path='video'>
        <Route path=":id" element={<Videos/>}/>
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
