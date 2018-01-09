import React from 'react'
import BlogCard from './BlogCard'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
}

const Blog = ({posts, deletePost}) =>
  <div style={styles.container} >
    <h3>User Post</h3>
    {
      posts.map(post => {
        return (
          <BlogCard 
            post={post}
            deletePost={deletePost}
          />
        )
      })
    }
  </div>

export default Blog
