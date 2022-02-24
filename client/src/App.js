import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Booking from './pages/booking'

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/book' element={<Booking />} />
      </Routes>
    </Router>
  )
}

export default App;
