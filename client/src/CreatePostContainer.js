import React, {Component} from 'react'
import $ from 'jquery'
import {
  withRouter
} from 'react-router-dom'

class CreatePostContainer extends Component {
  state ={
    userName: undefined,
    img: undefined,
    comment: undefined,
    location: undefined
  }

  onNameChange = (e) => this.setState({ userName: e.target.value })

  onImageChange = (e) => this.setState({ img: e.target.value })

  onCommentChange = (e) => this.setState({ comment: e.target.value })

  onLocationChange = (e) => this.setState({ location: e.target.value })

  handleSubmit = (e) => {
    e.preventDefault()
    const {userName, img, comment, location} = this.state
    const post = {userName, img, comment, location}
    $.ajax({
      url: '/api/posts',
      method: 'POST',
      data: post
    }).done((response) => {
      this.props.loadCommentsFromServer()
      this.props.history.push('/blog')
    })
  }

  render () {
    return (
      <div>
        <h3> Create Post </h3>
        <form>
          <div>
            <label> User Name </label>
            <input type='text' onChange={this.onNameChange} />
          </div>
          <div>
            <label> Image </label>
            <input type='text' onChange={this.onImageChange} />
          </div>
          <div>
            <label> Comment </label>
            <input type='text' onChange={this.onCommentChange} />
          </div>
          <div>
            <label> Location </label>
            <input type='text' onChange={this.onLocationChange} />
          </div>
          <button onClick={this.handleSubmit}> SUBMIT </button>
        </form>
      </div>
    )
  }
}

export default withRouter(CreatePostContainer)