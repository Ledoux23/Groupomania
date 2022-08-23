import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Log from './pages/Log';
import Header from './components/Header';
import Error from './components/Error';

ReactDOM.render(
  <BrowserRouter> 
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/log" element={<Log />} />
      <Route path="*" element={<Error />} /> 
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

