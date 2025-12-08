import React from 'react'
import Navbar from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import AddCar from './components/addCar.jsx'
import ManageCar from './components/manageCar.jsx'
import Booking from './components/Booking.jsx'

const App = () => {
  return (
      <>
      <Navbar />
      <Routes>
        <Route path='/' element ={<AddCar />} />
        <Route path='/manage-cars' element={<ManageCar />} />
        <Route path='/bookings' element={<Booking />} />
      </Routes>
      </>
  )
}

export default App
