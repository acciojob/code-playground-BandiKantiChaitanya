import React from 'react'
import { Link } from 'react-router-dom'

function PlayGround({user,SetUser}) {
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
       {
        user ?(
          <p>Hi Welcome to Code Playground</p>
      ):(
        <>
        <p>Login</p>
        <button onClick={()=>{SetUser(true)}} >Log In</button>
        </>
    )
      }
    </div>
  )
}

export default PlayGround