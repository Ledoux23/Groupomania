import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profil from './pages/Profil';
import Header from './components/Header';
import Error from './components/Error';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }

  body {
    margin: 0;
  }
`

ReactDOM.render(
  <BrowserRouter> 
    <GlobalStyle />
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/profil" element={<Profil />} />
      <Route path="*" element={<Error />} /> 
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

