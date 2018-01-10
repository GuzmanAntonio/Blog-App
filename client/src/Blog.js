import React from 'react'
import BlogCard from './BlogCard'
// import PropTypes from 'prop-types'

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

const Blog = ({posts, deletePost, showUniquePost}) =>
  <div style={styles.container} >
    <h3>User Posts</h3>
    {
      posts.map(post => {
        return (
          <BlogCard 
            post={post}
            deletePost={deletePost}
            showUniquePost={showUniquePost}
          />
        )
      })
    }
  </div>

// Blog.propTypes = {
//   posts: PropTypes.array.isRequired,
//   deletePost: PropTypes.func.isRequired,
// }

export default Blog
