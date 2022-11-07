const router = require('express').Router();
const { User, Post, Comment } = require('../models');

const withAuth = require('../utils/auth');

//get all comments
router.get('/', async (req, res) => {
})

//create new comment
router.post('/', async (req, res) => {
})

//update comment
router.put('/id', withAuth, (req, res) => {
})

//delete comment
router.delete('/:id', (req, res) =>{
})
