import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Reg from './pages/Reg'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Reg/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/home' element={<Home/>} />
        </Routes>


        </BrowserRouter>
    </div>
  )
}

export default App