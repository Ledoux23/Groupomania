const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth.middleware');
const multer = require('../middleware/multer-config.middleware');

const postController = require('../controllers/post.controller');
const likeController = require('../controllers/like.controller');

// endpoints of post routes
router.get('/', auth, postController.getAllPosts);
router.post('/', auth, multer, postController.createPost);
router.get('/:id', auth, postController.getOnePost);
router.put('/:id', auth, multer, postController.updatePost);
router.delete('/:id', auth, postController.deletePost);

router.post('/:id/like', auth, likeController.likePost);

module.exports = router;