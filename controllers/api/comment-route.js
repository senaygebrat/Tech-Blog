const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

const withAuth = require('../../utils/auth');

//get all comments
router.get('/', async (req, res) => {
})

//create new comment
router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

//update comment (edit)
router.put('/id', withAuth, (req, res) => {
})

//delete comment
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});
