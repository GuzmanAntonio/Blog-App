import React from 'react'
import PropTypes from 'prop-types'

const PostForm = ({onNameChange, handleSubmit, onChange, onCommentChange, onImageChange, onLocationChange}) => {
  return (
    <div>
      <form>
        <div>
          <label> User Name </label>
          <input type='text' id='userName' placeholder='Enter UserName' onChange={onNameChange} />
        </div>
        <div>
          <label> Image </label>
          <input type='text' id='img' placeholder='Enter Image' onChange={onImageChange} />
        </div>
        <div>
          <label> Comment </label>
          <input type='text' id='comment' placeholder='Enter Comment' onChange={onCommentChange} />
        </div>
        <div>
          <label> Location </label>
          <input type='text' id='location' placeholder='Enter Location' onChange={onLocationChange} />
        </div>
        <button onClick={this.handleSubmit}> SUBMIT </button>
      </form>
    </div>
  )
}

PostForm.propTypes = {
  onNameChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onCommentChange: PropTypes.string.isRequired,
  onImageChange: PropTypes.string.isRequired,
  onLocationChange: PropTypes.string.isRequired
}

export default PostForm
