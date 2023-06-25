import './Navbar.css';
import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className='navbar'>
    <h1 className='logo'>Safario</h1>
    <div className='menu-list'>
        <i className='fas fa-bars'></i>
    </div>
    <ul className='nav-menu'>
        <li>
            <Link to='/'> <i className="fa-solid fa-house-user"></i> Home</Link>
        </li>
        <li>
            <Link to='/about'><i className="fa-solid fa-eject"></i> About</Link>
        </li>
        <li>
            <Link to='/services'><i className="fa-solid fa-bag-shopping"></i> Services</Link>
        </li>
        <li>
            <Link to='/contact'><i className="fa-solid fa-address-book"></i> Contact</Link>
        </li>
        <li>
            <Link to='/sign up'>Sign Up</Link>
        </li>
    </ul>
   </nav>
  )
}
export default Navbar;