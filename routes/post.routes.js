const express = require('express');
const router = express.Router();
// const auth = require('../middleware/auth.middleware');
const postController = require('../controllers/post.controller');

// endpoints of post routes
router.get('/', postController.getAllPosts);
router.post('/', postController.createPost);
router.get('/:id', postController.getOnePost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);


// endpoints of comment routes


module.exports = router;