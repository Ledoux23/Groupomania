import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profil from './pages/Profil';
import Header from './components/Header';
import Error from './components/Error';
import { ThemeProvider } from './utils/context';
import Footer from './components/Footer'
import GlobalStyle from './utils/style/GlobalStyle'

ReactDOM.render(
  <BrowserRouter> 
    <ThemeProvider>
      <GlobalStyle />
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/profil" element={<Profil />} />
        <Route path="*" element={<Error />} /> 
      </Routes>
      <Footer/>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

