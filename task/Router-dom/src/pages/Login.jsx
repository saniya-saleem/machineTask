import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>LOGIN PAGE</h1>
         <form>
            
            <input type='email'placeholder='Email'/>
            <br/>
            <input type='text' placeholder='Name'/>
            <br/>
            <input type='password' placeholder='password'/>
            <br/>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Login