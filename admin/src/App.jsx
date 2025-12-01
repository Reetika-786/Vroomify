import React from 'react'
import Navbar from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import AddCar from './components/addCar.jsx'

const App = () => {
  return (
      <>
      <Navbar />
      <Routes>
        <Route path='/' element ={<AddCar />} />
      </Routes>
      </>
  )
}

export default App
