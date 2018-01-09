import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import $ from 'jquery'
import BlogInfo from './BlogInfo'

class PostContainer extends Component {
  state = {
    post: undefined
  }

  componentDidMount () {
    const postId = this.props.match.params.postId
    this.loadPost(postId)
  }

loadPost = (iD) => {
  $.ajax({
    url: `/api/posts/:${iD}`,
    method: 'GET'
  }).done((response) => {
    console.log(response)
    this.setState({posts: response.post})
  })
}

render () {
  return (
    <div>
      Post Container
      {
        this.state.post
          ? <BlogInfo 
            post={this.state.post} 
          />
          : 'No Blog Post is Available. Sowwy!'
      }
    </div>
  )
}
}

export default withRouter(PostContainer)
