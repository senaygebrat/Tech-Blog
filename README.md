# Tech-Blog

## Description

A tech blog that allows a user to create a log in, view all posts & comments, and add/update their posts & comments.

## Code Snippet

Below is a code snippet of the associations of the models utilized in the app.

```
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
```

## Technologies Used

NodeJS, Express, MySQL2, Express, Sequelize, JavaScript

## Questions

If you have any questions about the repository, open an issue or contact me directly at senaygebrat@gmail.com. You can find more of my work at [my Github](https://github.com/senaygebrat?tab=repositories), and my contact information at [LinkedIn](https://linkedin.com/in/senayg).
