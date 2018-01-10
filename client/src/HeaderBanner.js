import React from 'react'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#22313F',
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/crisp-paper-ruffles.png")',
    width: '100vw',
    height: 'auto',
    padding: '20px'
  }
}

const imgStyle = {
  container: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '80%',
    height: 'auto'
  }
}

const HeaderBanner = () => 
  <div style={styles.container}>
    <img style={imgStyle.container}src={'http://dabor.com/wp-content/uploads/2017/10/Blog-intro.jpg'} alt='' />
  </div>

export default HeaderBanner