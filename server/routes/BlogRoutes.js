const express = require('express')
const Router = express.Router()
const Comments = require('../models/Comments')

Router.route('/api/posts')
  .get((req, res) => {
    Comments.find((err, post) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: 'SUCCESS', post})
      }
    })
  })

Router.route('/api/posts')
  .post((req, res) => {
    const {userName, img, comment, location} = req.body
    const newComment = {userName, img, comment, location}

    Comments(newComment).save((err, post) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: 'SUCCESS', post})
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

Router.route('/api/posts/:postId')
  .put((req, res) => {
    const editPostId = req.params.postId
    Comments.findById({_id: editPostId}, (err, post) => {
      if (err) {
        console.log('ERROR GETTING HERE', err)
        res.json({error: err})
      } else {
        post.userName = req.body.userName ? req.body.userName : post.userName
        post.img = req.body.img ? req.body.img : post.img
        post.comment = req.body.comment ? req.body.comment : post.comment
        post.location = req.body.location ? req.body.location : post.location

        post.save((err, updatedPost) => {
          if (err) {
            console.log('ERROR SAVING POST', err)
            res.json({error: err})
          } else {
            res.json({msg: 'SAVED', post: updatedPost})
          }
        })
      }
    })
  })

module.exports = Router
