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
                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        events: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Event.find(params).sort({ createdAt: -1 });
        },

        event: async (parent, { _id }) => {
            return Event.findOne({ _id });
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

>>>>>>> 9345edf94df391689f12d167b3779756254dfc63
        addEvent: async (parent, args, context) => {
            if (context.user) {
                try {
                    await Event.create({ ...args.eventData, username: context.user.username })
                        .then(event => {
                            User.findByIdAndUpdate(
                                { _id: context.user._id },
                                { $push: { events: event._id } },
                                { new: true }
                            );
                            return event;
                        });
                } catch (err) {
                    console.log(err);
                }
            } else {
                throw new AuthenticationError('You need to be logged in!');
            }
        }
    }
};

module.exports = resolvers;