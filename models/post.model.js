const mongoose = require('mongoose');

// post model
const postSchema = mongoose.Schema(
    {
        posterId: {
            type: String,
            required: true
        },
        message: {
            type: String,
            trimp: true,
            maxlength: 500
        },
        picture: {
            type: String,
        },
        vidéo: {
            type: String,
        },
        likers: {
            type: [String], 
            required: true
        },
        comments: {
            type: [
                {
                    commenterId: String,
                    commenterPseudo: String,
                    text: String,
                    timestamp: Number
                }
            ],
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Post', postSchema);