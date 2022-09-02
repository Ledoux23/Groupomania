import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profil from './pages/Profil';
// import Header from './components/Header';
import Error from './components/Error';
import Footer from './components/Footer';
import GlobalStyle from './utils/style/GlobalStyle';
import SignInForm from './components/Log/SignInForm.jsx';
import SignUpForm from './components/Log/SignUpForm.jsx';
import Card from './components/Card'

ReactDOM.render(
  <BrowserRouter> 
      <GlobalStyle />
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/profil" element={<Profil />} />
        <Route path="/login" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/post" element={<Card />} />
        <Route path="*" element={<Error />} /> 
      </Routes>
      <Footer/>
  </BrowserRouter>,
  document.getElementById('root')
);

