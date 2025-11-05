import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Home from './pages/Home';
import Login from './components/Login';
import SignUp from './components/signUp';
import ContactPage from './pages/ContactPage';
import CarPage from './pages/CarPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path= '/Login' element = {<Login />} ></Route>
      <Route path= '/Signup' element = {<SignUp />} ></Route>
      <Route path= '/Contact' element = {<ContactPage />} ></Route>
      <Route path= '/Cars' element = {<CarPage />} ></Route>
    </Routes>
  );
};

export default App;
