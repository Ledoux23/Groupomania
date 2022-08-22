const Post = require('../models/post.model');

// add or remove like (like=1 or like=0)
exports.likePost = (req, res, next) => {
    Post.findOne({_id: req.params.id})
        .then((post) => {                                   
            switch(req.body.like) {
                case 1:
                    if(!post.likers.includes(req.body.userId)) {
                        Post.updateOne(
                            {_id: req.params.id},
                            {
                                $inc: {likes: 1},
                                $push: {likers: req.body.userId}
                            }
                        )                        
                        .then(() => res.status(201).json({message: "like +1"}))
                        .catch((error) => res.status(400).json({error}));
                    };
                    break;

                case 0:
                    if(post.likers.includes(req.body.userId)) {                        
                        Post.updateOne(  
                            {_id: req.params.id},
                            {
                                $inc: {likes: -1},
                                $pull: {likers: req.body.userId}
                            }
                        )
                        .then(() => res.status(201).json({message: "like annulé"}))
                        .catch((error) => res.status(400).json({error}));
                    }; 
                    break;                 
            }
        })
        .catch((error) => res.status(404).json({error}));    
};