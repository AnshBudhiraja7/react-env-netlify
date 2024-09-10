import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <div id='row'>
            <div className="block"><Link to="/">Home</Link></div>
            <div className="block"><Link to="/About">About</Link></div>
            <div className="block"><Link to="/Contact">Contact</Link></div>
            <div className="block"><Link to="/Gallery">Gallery</Link></div>
            <div className="block"><Link to="/Login">Login</Link></div>
        </div>
    </div>
  )
}

export default Header
