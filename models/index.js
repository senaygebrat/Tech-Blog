const User = require('./User');
const Comment = require('./Comments');
const Post = require('./Post');

//associations between user, post, and comments
User.hasMany(Post, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
})

Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
})

module.exports = { User, Post, Comment };