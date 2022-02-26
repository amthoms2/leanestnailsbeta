import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Booking from './pages/booking';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/book' element={<Booking />} />
      </Routes>
    </Router>
  )
}

export default App;
