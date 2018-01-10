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
    width: 'calc(33% - 20px',
    height: '250px',
    marginTop: '4%',
    marginLeft: '10%',
    marginRight: '10%',
    marginBottom: '5%' 
  }
}

const styleImage = {
  container: {
    maxWidth: '80%',
    height: 'auto'
  }
}

const BlogCard = ({/* userName, img, comment, id, location, */ post, deletePost, showUniquePost}) => {
  return (
    <div style={styles.container} >
      <h3>{post.userName}</h3>
      <img style={styleImage.container} src={post.img} alt='' />
      <button onClick={() => showUniquePost(post)}>SHOW INFO</button>
      <button onClick={() => deletePost(post)}>DELETE POST</button>
      <Link to={`/posts/${post._id}`}>View Comment</Link>
      <Link to={`/editPosts/${post._id}`}>Edit Post</Link>
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
