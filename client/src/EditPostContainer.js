import React, {Component} from 'react'
import $ from 'jquery'
import EditPostForm from './EditPostForm'
import PropTypes from 'prop-types'
import {
  withRouter
} from 'react-router-dom'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap'
  }
}

class EditPostContainer extends Component {
  state = {
    userName: undefined,
    img: undefined,
    comment: undefined,
    location: undefined
  }

  static propTypes = {
    loadCommentsFromServer: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
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
      this.props.history.push('/posts')
    })
  }

  render () {
    return (
      <div>
        <h3 style={styles.container}> Create Blog </h3>
        <EditPostForm 
          onNameChange={this.onNameChange}
          onImageChange={this.onImageChange}
          onCommentChange={this.onCommentChange}
          onLocationChange={this.onLocationChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default withRouter(EditPostContainer)