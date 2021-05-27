const { Schema, model} = require('mongoose');

const commentSchema = new Schema(
    {
        commentText: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
          }
        
    }
);

const Comment = model('Comment', commentSchema);

module.exports = Comment; 