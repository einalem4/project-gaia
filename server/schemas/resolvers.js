const { User, Event, Comment } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('events')
                    .populate('comments')
                    .populate('friends')
                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },

        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('events')
                .populate('comments')
                .populate('friends')
        },

        user: async (parent, { username }) => {
            return User.findOne({ username }) 
                .select('-__v -password')
                .populate('events')
                .populate('comments')
                .populate('friends')
        },

        events: async () => {
            return Event.find()
                .populate('comments')
        },

        userEvents: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Event.find(params).sort({ createdAt: -1 });
        },

        singleEvent: async (parent, { _id }) => {
            return Event.findOne({ _id });
        },

        searchEvents: async(parent, { city }) => {
            const params = city ? { city } : {};
            return Event.find(params);
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
<<<<<<< HEAD
        addComment: async (parent, args, context) => {
            if (context.user) {
              const comment = await Comment.create({ ...args, username: context.user.username });
      
              await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { comments: comment._id } },
                { new: true }
              );
      
              return comment;
            }
        },
=======

<<<<<<< HEAD
>>>>>>> 9345edf94df391689f12d167b3779756254dfc63
        addEvent: async (parent, args, context) => {
=======
        addComment: async (parent, { eventId, commentText }, context) => {
            if (context.user) {
                const updatedEvent = await Event.findOneAndUpdate(
                    { _id: eventId},
                    { $push: { comments: {commentText, username: context.user.username} } },
                    { new: true }
                );
      
                return updatedEvent;
            }
        },
        
        addEvent: async (parent, { input: {name, date, time, address, city, state, zip, description, image} }, context) => {
>>>>>>> 66540aabe1e978132c596e3c4363205c42ab34db
            if (context.user) {
                const newEvent = {
                    name,
                    date,
                    time,
                    address,
                    city, 
                    state, 
                    zip,
                    description,
                    image
                }
                
                const createdEvent = await Event.create({ ...newEvent, username: context.user.username });
                    
                User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { events: createdEvent._id } },
                    { new: true }
                );

                return createdEvent;
            } 
            
            throw new AuthenticationError('You need to be logged in!');
        },

        addFriend: async (parent, { friendId }, context) => {
            if (context.user) {
              const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { friends: friendId } },
                { new: true }
              ).populate('friends');
          
              return updatedUser;
            }
          
            throw new AuthenticationError('You need to be logged in!');
        }
    }
};

module.exports = resolvers;