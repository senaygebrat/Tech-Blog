const router = require('express').Router();
const { User, Post, Comment } = require('../models');

const withAuth = require('../utils/auth');

//get all comments
router.get('/', async (req, res) => {
})

//create new comment
router.post('/', async (req, res) => {
})

//update post
router.put('/id', withAuth, (req, res) => {
})

//delete post
router.delete('/:id', (req, res) =>{
})
