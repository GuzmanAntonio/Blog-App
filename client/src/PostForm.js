import React from 'react'
import PropTypes from 'prop-types'

const PostForm = ({onChangeHandler, handleSubmit}) =>
  <form>
    <div>
      <label> User Name </label>
      <input type='text' id='userName' placeholder='Enter UserName' onChange={onChangeHandler} />
    </div>
    <div>
      <label> Image </label>
      <input type='text' id='img' placeholder='Enter Image' onChange={this.onImageChange} />
    </div>
    <div>
      <label> Comment </label>
      <input type='text' id='comment' placeholder='Enter Comment' onChange={this.onCommentChange} />
    </div>
    <div>
      <label> Location </label>
      <input type='text' id='location' placeholder='Enter Location' onChange={this.onLocationChange} />
    </div>
    <button onClick={this.handleSubmit}> SUBMIT </button>
  </form>

PostForm.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default PostForm
