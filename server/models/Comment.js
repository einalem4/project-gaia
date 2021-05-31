<<<<<<< HEAD
const { Schema, model} = require('mongoose');
=======
const { Schema } = require('mongoose');
>>>>>>> 66540aabe1e978132c596e3c4363205c42ab34db
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema(
    {
        commentText: {
            type: String,
            required: true,
            trim: true
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
<<<<<<< HEAD
          }
        
    }
);

const Comment = model('Comment', commentSchema);

module.exports = Comment; 
=======
        }

    }
);

module.exports = commentSchema;
>>>>>>> 66540aabe1e978132c596e3c4363205c42ab34db
