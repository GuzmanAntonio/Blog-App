import React, { Component } from 'react'
import Home from './Home'
import Blog from './Blog'
import NavBar from './NavBar'
import Header from './Header'
import PostContainer from './PostContainer'
import $ from 'jquery'
import CreatePostContainer from './CreatePostContainer'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import EditPostContainer from './EditPostContainer'

const styles = {
  container: {
    backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)'
  }
}

class App extends Component {
  state = {
    posts: undefined,
    userNmae: undefined,
    img: undefined,
    comment: undefined,
    location: undefined
  }

  componentDidMount () {
    this.loadCommentsFromServer()
  }

loadCommentsFromServer = () => {
  $.ajax({
    url: '/api/posts',
    method: 'GET'
  }).done((response) => {
    console.log(response)
    this.setState({posts: response.posts})
  })
}

deletePost = (post) => {
  $.ajax({
    url: `/api/posts/${post._Id}`,
    method: 'DELETE'
  }).done((response) => {
    console.log(response)
    this.loadCommentsFromServer()
  })
}

showUniquePost = (post) => {
  $.ajax({
    url: `/api/posts/${post._id}`,
    method: 'GET'
  }).done((response) => {
    console.log(response)
    const post = response.post
    alert(`UserName: ${post.userName}, Comment: ${post.comment}, Location: ${post.location}`)
  })
}

render () {
  return (
    <Router>
      <div style={styles.container}>
        <Header />
        <NavBar />
        <Route exact path='/' render={() => <Home />} />
        <Route path='/createPost' render={() => <CreatePostContainer
          loadCommentsFromServer={this.loadCommentsFromServer} />}
        />
        {
          this.state.posts
            ? <Route path='/blog' render={() => <Blog showUniquePost={this.showUniquePost} deletePost={this.deletePost} posts={this.state.posts} />} />
            : 'No Blog Posts'
        }
        <Route path='/posts/:postId' render={() => <PostContainer />} />
        <Route path='/editPost/:postId' render={() => <EditPostContainer
          loadCommentsFromServer={this.loadCommentsFromServer} />} />
      </div>
    </Router>
  )
}
}

export default App
