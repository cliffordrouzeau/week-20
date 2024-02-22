import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul className="flex space-x-4">
        <li className="hover:underline"><Link to="/">AboutMe</Link></li>
        <li className="hover:underline"><Link to="/shop">Portfolio</Link></li>
        <li className="hover:underline"><Link to="/about">Contact</Link></li>
        <li className="hover:underline"><Link to="/cart">Resume</Link></li>
      </ul>
    </div>
  )
}

export default Navbar