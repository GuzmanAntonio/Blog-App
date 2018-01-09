import React from 'react'
import {
  Link
} from 'react-router-dom'
import PropTypes from 'prop-types'
// import BlogInfo from './BlogInfo'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#DADFE1',
    border: '2px outset #95A5A6',
    justifyContent: 'center',
    width: '100vw'
  }
}

const BlogCard = ({/* userName, img, comment, id, location, */ post, deletePost, showUniquePost}) => {
  return (
    <div style={styles.container} >
      <h3>{post.userName}</h3>
      <img src={post.img} alt='' />
      <button onClick={() => showUniquePost(post)}>SHOW INFO</button>
      <button onClick={() => deletePost(post)}>DELETE POST</button>
      <Link to={`/post/${post._id}`}>View Comment</Link>
    </div>
  )
}

BlogCard.propTypes = {
  // userName: PropTypes.string.isRequired,
  // img: PropTypes.string.isRequired,
  // comment: PropTypes.string.isRequired,
  // location: PropTypes.string.isRequired,
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  showUniquePost: PropTypes.func.isRequired
}

export default BlogCard
