const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const commentRoutes = require("./comment-route.js");
const postRoutes = require("./post-route.js");

router.use('/users', userRoutes);
router.use("/comment", commentRoutes);
router.use("/post", postRoutes);

module.exports = router;
