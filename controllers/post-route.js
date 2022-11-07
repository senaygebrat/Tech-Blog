const router = require('express').Router();
const { User, Post, Comment } = require('../models');

const withAuth = require('../utils/auth');

// router.get('/', async (req, res) => {
//   try {
//     const dbPostData = await Post.findAll({
//       include: [
//         {
//           model: User,
//         }
//       ]
//     })
//   }
// })
// )

//create new post
router.post('/', async (req, res) => {
  // try{
  //   const newPost = await Post.create({
  //     post_title: req.body.title,
  //   })
  //   res.status(200).json(newCategory)
  // }
  // catch(err){
  //   res.status(400).json(err)
  // }
})

//update post
router.put('/:id', withAuth, (req, res) => {
})

// delete post
router.delete('/:id', (req, res) => {
})
