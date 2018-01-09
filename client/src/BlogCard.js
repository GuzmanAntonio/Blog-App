import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
}

const BlogCard = ({post, deletePost}) => {
  return (
    <div style={styles.container} >
      <p>{post.userName}</p>
      <p>{post.img}</p>
      <p>{post.comment}</p>
      <p>{post.location}</p>

      <button onClick={() => deletePost(post)}> DELETE POST</button>
    </div>
  )
}

BlogCard.propTypes ={
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
}

export default BlogCard
