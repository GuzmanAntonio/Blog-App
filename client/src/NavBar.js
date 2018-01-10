import React from 'react'
import {
  Link
} from 'react-router-dom'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#F1A9A0',
    color: '#ecf0f1',
    paddingLeft: '5%',
    paddingRight: '5%',
    alignItems: 'center',
    height: '10vh',
    borderRadius: '3px',
    borderShadow: '2px 6px 10px #bdc3c7'
  }
}

const linkStyle = {
  container: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Candal, sans-serif'
  }
}

const linkTextStyle = {
  container: {
    color: '#ecf0f1',
    textOutline: 'black'
  }
}

const NavBar = () =>
  <div>
    <nav style={styles.container}>
      <div style={linkStyle.container}>
        <Link to='/'> <p style={linkTextStyle.container}>Home</p></Link>
      </div>
      <div style={linkStyle.container}>
        <Link to='/blog'> <p style={linkTextStyle.container}>Blog</p></Link>
      </div>
      <div style={linkStyle.container}>
        <Link to='/createPost'> <p style={linkTextStyle.container}>Create Post</p></Link>
      </div>
      <div style={linkStyle.container}>
        <Link to='/editPost'> <p style={linkTextStyle.container}>Edit Post</p></Link>
      </div>
    </nav>
  </div>

export default NavBar
