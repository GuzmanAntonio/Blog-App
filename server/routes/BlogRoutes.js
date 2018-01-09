const express = require('express')
const Router = express.Router()
const Comments = require('../models/Comments')

Router.route('/api/posts')
  .get((req, res) => {
    Comments.find((err, posts) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: 'SUCCESS', posts})
      }
    })
  })

Router.route('/api/posts')
  .post((req, res) => {
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

Router.route('/api/posts/:postId')
  .post((req, res) => {
    const postId = req.params.postId
    Comments.findById({_id: postId}, (err, post) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: 'POST FOUND', post})
      }
    })
  })

Router.route('/api/posts/:postId')
.delete((req, res) => {
    const deletePost = req.params.deletePost
    Comments.remove({_id: deletePost}, (err, post) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: 'DELETED', post})
      }
    })
  })

module.exports = Router
