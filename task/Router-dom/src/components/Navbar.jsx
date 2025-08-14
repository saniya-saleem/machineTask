import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate =useNavigate()
  return (
    <div>
        <ul>
            <NavLink to='/home'><li>HOME</li></NavLink>
             <NavLink to= '/login'><li>LOGIN</li></NavLink>
              <NavLink to='/'><li>REGISTER</li></NavLink>
        </ul>

        <button onClick={()=>navigate('/register')}>to register</button>
    </div>
  )
}

export default Navbar