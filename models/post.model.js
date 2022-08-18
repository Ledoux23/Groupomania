const mongoose = require('mongoose');

// post model
const postSchema = mongoose.Schema({
    userId: { type: String, required: true },
    message: { type: String, required: true },
    imageUrl: { type: String, required: true },     
    
    likes: { type: Number, default: 0 },            
    Likers: { type: [String] },    
});

module.exports = mongoose.model('Post', postSchema);