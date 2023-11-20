import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <ul>
      <Link to={'/'}>Songs</Link>
      
      Artists
      
      Albums
      Play list
      </ul>
    </div>
  )
}

export default Navbar
