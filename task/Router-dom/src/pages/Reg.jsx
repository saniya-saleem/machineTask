import React from 'react'

const Reg = () => {
  return (
    <div>
        <h1>REGISTRATIION PAGE</h1>
        <form>
            <input type='text' placeholder='Name'/>
            <br/>
            <input type='email'placeholder='Email'/>
            <br/>
            <textarea placeholder='message'></textarea>
            <br/>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Reg