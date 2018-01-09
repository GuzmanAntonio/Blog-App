import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center'
  }
}

const BlogInfo = ({post}) => {
  return (
    <div style={styles.container} >
      <p>{post.userName}</p>
      <img src={post.img} alt='' />
      <p>{post.comment}</p>
      <p>{post.location}</p>
    </div>
  )
}

BlogInfo.propTypes = {
  post: PropTypes.string.isRequired,
}

export default BlogInfo