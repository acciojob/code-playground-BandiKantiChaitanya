import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PlayGround from './PlayGround'

function Login({user,SetUser}) {
  

  return (
    <div>
      {
        user ?(
        <p>Logged in,Now you can enter Playground</p>
      ):(
        <p>You are not authenticated,Please Login first</p>
    )
      }
      <ul>
        <li><Link to="/playground">Playground</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      <p>Login</p>
      {
        user ?(
          <button onClick={()=>{SetUser(false)}} >Log Out</button>
      ):(
        <button onClick={()=>{SetUser(true)}} >Log In</button>
    )
      }
      
      
    </div>
  )
}

export default Login