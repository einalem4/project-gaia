const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat = require('../utils/dateFormat');

const eventSchema = new Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    zip: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String
    },
    attendees: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    comments: [commentSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

eventSchema.virtual('commentCount').get(function () {
  return this.comments.length;
});

<<<<<<< HEAD
eventSchema.virtual('attendanceCount').get(function () {
  return this.attendees.length;
});

=======
>>>>>>> 05072a5dc10fe95ab102df74c6c9605379ae81b3
const Event = model('Event', eventSchema);

module.exports = Event;
