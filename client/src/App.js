import React, { Component } from 'react'
import Home from './Home'
import Blog from './Blog'
import NavBar from './NavBar'
import Header from './Header'
import $ from 'jquery'
import CreatePostContainer from './CreatePostContainer'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

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
    this.setState({posts: response.posts})
  })
}

render () {
  return (
    <Router>
      <div style={styles.container}>
        <Header />
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route path='/createPost' render={() => <CreatePostContainer
          loadCommentsFromServer={this.loadCommentsFromServer} />} 
        />
        {
          this.state.posts
            ? <Route path='/blog' render={() => <Blog posts={this.state.posts} />} />
            : 'No Blog Posts'
        }
      </div>
    </Router>
  )
}
}

export default App
