import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Counting from './Counting'
import Home from './Home'
import Typing from './Typing'
import ApiFetcher from './ApiFetcher'
import Test from './Test'
import MapboxComponent from './MapboxComponent'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counting />} />
        <Route path="/typing" element={<Typing />} />
        <Route path="/fetchapi" element={<ApiFetcher />} />
        <Route path="/test" element={<Test />} />
        <Route path="/map" element={<MapboxComponent />} />
      </Routes>
    </Router>
  )
}

export default App
