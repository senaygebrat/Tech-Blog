const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

//WHEN I click on the dashboard option in the navigation
// THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
