import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Home from './pages/Home';
import Login from './components/Login';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path= '/Login' element = {<Login />} ></Route>
    </Routes>
  );
};

export default App;
