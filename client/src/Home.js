import React from 'react'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap'
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
      <h2>Home</h2>
    </div>
  </div>

export default Home
