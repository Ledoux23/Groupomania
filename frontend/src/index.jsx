import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header';
// import Admin from './components/Admin';
// import User from './components/User'

ReactDOM.render(
  <BrowserRouter> 
    <Header/>
    <Routes>
      {/* <Route path="/admin" element={<Admin />} /> 
      <Route path="/user" element={<User />} />  */}
      <Route path="/" element={<Home />} /> 
      <Route path="/login" element={<Login />} /> 
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


// ReactDOM.render(
//   <React.StrictMode>
//     <Home />
//   </React.StrictMode>,
//   document.getElementById('root')
// )