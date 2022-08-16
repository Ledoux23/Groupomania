const Post = require('../models/post.model');

// create post
exports.createPost = (req, res, next) => {     
    const post = new Post({
        ...req.body
    });
   
    post.save()
        .then(() => res.status(201).json({ message: 'Post enregistré !'}))
        .catch(error => res.status(400).json({ error }));
};

// all posts
exports.getAllPosts = (req, res, next) => {
    Post.find()
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(400).json({ error }));
};

// one post
exports.getOnePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id })
        .then(post => res.status(200).json(post))
        .catch(error => res.status(404).json({ error }));
};

// update post
exports.updatePost = (req, res, next) => {
    const post = new Post({
        _id: req.params.id,
        ...req.body
    });
    Post.updateOne({_id: req.params.id}, post)
        .then(() => {res.status(201).json({message: 'Post updated successfully!'});})
        .catch((error) => {res.status(400).json({error: error});});
};

// delete post
exports.deletePost = (req, res, next) => {
    Post.deleteOne({_id: req.params.id})
        .then(() => {res.status(200).json({message: 'Deleted!'});})
        .catch((error) => {res.status(400).json({error: error});});
};