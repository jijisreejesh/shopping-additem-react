import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar1.css';
function Navbar() {
  return (
    <div id="nav">
        <ul>
            <li><Link to='/' className='links'>Home</Link></li>
        </ul>
    </div>
  )
}

export default Navbar