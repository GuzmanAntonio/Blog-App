import React from 'react'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
}

const Blog = ({posts}) =>
  <div style={styles.container} >
    <h3>User Post</h3>
    {
      posts.map(post => {
        return (
          <div style={styles.container}>
            <p>{post.userName}</p>
            <p>{post.img}</p>
            <p>{post.comment}</p>
            <p>{post.location}</p>
          </div>
        )
      })
    }
  </div>

export default Blog
