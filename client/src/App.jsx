import { useState } from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'


import Sidebar from './components/Sidebar'
import Homepage from './pages/Homepage'


function App() {


  return (


    <BrowserRouter>
    <Sidebar />

 
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>

    </BrowserRouter>


  )
}

export default App
