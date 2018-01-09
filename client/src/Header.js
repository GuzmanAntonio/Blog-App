import React from 'react'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#336E7B',
    color: '#ecf0f1',
    fontFamily: 'Candal, sans-serif'
  }
}

const Header = () => 
  <div style={styles.container}>
    <h1>Blog-App</h1>
  </div>

export default Header
