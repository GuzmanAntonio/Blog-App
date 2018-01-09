import React from 'react'
//import PropTypes from 'prop-types'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
}

const BlogCard = ({/* userName, img, comment, id, location, */ post, deletePost, showUniquePost}) => {
  return (
    <div style={styles.container} >
      <h3>{post.userName}</h3>
      <img src={post.img} alt='' />
      <button onClick={() => showUniquePost(post)}>SHOW INFO</button>
      <button onClick={() => deletePost(post)}>DELETE POST</button>
    </div>
  )
}

// BlogCard.propTypes = {
//   userName: PropTypes.string.isRequired,
//   img: PropTypes.string.isRequired,
//   comment: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   post: PropTypes.object.isRequired,
//   deletePost: PropTypes.func.isRequired
// }

export default BlogCard
