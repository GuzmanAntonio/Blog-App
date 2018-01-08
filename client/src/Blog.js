import React from 'react'

const styles = {
  container: {
    display: 'flex'
  }
}

const Blog = ({posts}) =>
  <div>
    <h3>Blog</h3>
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
