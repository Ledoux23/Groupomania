const Post = require('../models/post.model');
const fs = require('fs');

// create post
exports.createPost = (req, res, next) => {     
    const postObject = req.body;    // form-data sur postman
    // const postObject = JSON.parse(req.body.post);   // si json depuis le frontend
    delete postObject._id;
    delete postObject._userId;
    const post = new Post({
        ...postObject,  
        userId: req.auth.userId,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
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
    const postObject = req.file ? {
        ...req.body,   // form-data sur postman
        // ...JSON.parse(req.body.post), // si json depuis le frontend
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
  
    delete postObject._userId;
    Post.findOne({_id: req.params.id})
        .then((post) => {
            if (post.userId != req.auth.userId) {
                res.status(401).json({ message : 'Not authorized'});
            } else {
                Post.updateOne({ _id: req.params.id}, { ...postObject, _id: req.params.id})
                .then(() => res.status(200).json({message : 'Post modifié !'}))
                .catch(error => res.status(401).json({ error }));
            }
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
};

// delete post
exports.deletePost = (req, res, next) => {
    Post.deleteOne({_id: req.params.id})
        .then(() => {res.status(200).json({message: 'Deleted!'});})
        .catch((error) => {res.status(400).json({error: error});});
};