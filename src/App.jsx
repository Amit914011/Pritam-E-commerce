import { useState } from 'react'

import './App.css'


import { Outlet } from 'react-router-dom'
import Navbar from './Component/Client/Navbar'
import Hero from './Component/Client/Hero'
import Card from './Component/Client/Card'


function App() {


  return (
    <>
    <div className=' w-full'>
      <Navbar/>
      <Hero/>
      
      <Outlet/>
      </div>
    </>
    
  )
}

export default App;
