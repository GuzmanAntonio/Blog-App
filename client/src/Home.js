import React from 'react'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100vw',
    marginTop: '20px',
    background: '#DADFE1',
    padding: '20px'
  }
}

const bigStyle = {
  container: {
    display: 'flex',
    backgroundColor: 'BFBFBF'
  }
}

const Home = () =>
  <div style={styles.container} >
    <div style={bigStyle.container} >
      <h1> Home </h1>
    </div>
  </div>

export default Home
