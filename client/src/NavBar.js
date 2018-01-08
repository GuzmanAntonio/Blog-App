import React from 'react'
import {
  Link
} from 'react-router-dom'

const NavBar = () =>
  <nav>
    <Link to='/'> Home </Link>
    <Link to='/blog'> Blog </Link>
    <Link to='/createPost'> Create Post </Link>
  </nav>

export default NavBar