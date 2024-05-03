import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";

function Navbar() {
  return (
    <nav className='Navbar'>
        <div className="left-nav">
            <ul>
                <li><NavLink to='/' className="linked">Home</NavLink></li>
                <li><NavLink to='/create' className="linked">Create a blog</NavLink></li>
                <NavLink to='/' className="linked"><li>Niche</li></NavLink>
                
            </ul>
        </div>
        <div className="right-nav">
            
            <input type="text" id ='search' placeholder='Search for a Blog' />
            <span className='search-icon'><IoIosSearch></IoIosSearch></span>
            
            <button><NavLink to='/Signin' className='linked'>Sign in</NavLink></button>
        </div>
    </nav>
  )
}

export default Navbar