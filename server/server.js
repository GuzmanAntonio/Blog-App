const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const Comments = require('./models/Comments')

const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/Blog-App')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./config/error-handler'))

app.post('/api/posts', (req, res) => {
  const {userName, img, comment, location} = req.body
  const newComment = {userName, img, comment, location}

  Comments(newComment).save((err, savedComment) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: 'SUCCESS', data: savedComment})
    }
  })
})

app.get('/api/posts', (req, res) => {
  Comments.find((err, posts) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: 'SUCCESS', posts})
    }
  })
})

app.get('/api/posts/:postId', (req, res) => {
  const postId = req.params.postId
  Comments.findById({_id: postId}, (err, post) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: 'POST FOUND', post})
    }
  })
})

app.delete('/api/posts/:postId', (req, res) => {
  const deletePost = req.params.deletePost
  Comments.remove({_id: deletePost}, (err, post) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: 'DELETED', post})
    }
  })
})

const server = app.listen(port, () => console.log(`Running on port: ${port} 🥋 🥊 🎱`))

module.exports = server
