const User = require('./User');
const Comment = require('./Comments');
const Post = require('./Post');

Post.hasMany(Comment)



module.exports = { User}