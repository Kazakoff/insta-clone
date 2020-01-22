const express = require('express');
const PostsController = require('../controllers/PostsController');

const router = express.Router();

router.post('/', PostsController.createPost);
router.get('/', PostsController.getAllPosts);

module.exports = router;
