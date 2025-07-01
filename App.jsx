import React from 'react'
import Navbar from './components/Navbar'
import {Route , Routes, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favorite from './pages/favorite'
import { Toaster } from 'react-hot-toast'
const App = () => {
  const App = () => {
    const isAdminRoute = useLocation().pathname.startsWith('/admin')
  }
  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar/>}
      <Routes>
        <Route  path ='/' element = {<Home/>}/>
        <Route  path ='/Movies' element = {<Movies/>}/>
        <Route  path ='/Movies/:id' element = {<MovieDetails/>}/>
        <Route  path ='/Movies/:id/:date' element = {<SeatLayout/>}/>
        <Route  path ='/MyBookings' element = {<MyBookings/>}/>
        <Route  path ='/favorite' element = {<Favorite/>}/>
      </Routes>
      {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App
