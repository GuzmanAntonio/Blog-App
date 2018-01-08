import React, { Component } from 'react'
import Home from './Home'
import Blog from './Blog'
import NavBar from './NavBar'
import $ from 'jquery'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  state = {
    posts: undefined
  }

  componentDidMount () {
    this.loadCommentsFromServer()
  }

loadCommentsFromServer = () => {
  $.ajax({
    url: '/api/posts',
    method: 'GET'
  }).done((response) => {
    this.setState({posts: response.posts})
  })
}

render () {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route path='/blog' render={() => <Blog posts={this.state.posts} />} />
      </div>
    </Router>
  )
}
}

export default App
