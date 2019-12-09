const express = require('express');
const router = express.Router();
const PostsController = require('./controllers/posts_controller');

router.get('/posts', PostsController.index);
router.post('/posts/new', PostsController.newPost);
router.get('/posts', PostsController.create);
router.get('/posts/:id/edit', PostsController.edit);
router.get('/posts/:id', PostsController.update);
router.get('/posts/:id', PostsController.destroy);

module.exports = router;