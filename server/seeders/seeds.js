const faker = require('faker');

const db = require('../config/connection');
const { Event, User } = require('../models');

db.once('open', async () => {
  await Event.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();
    const image = faker.image.avatar();

    userData.push({ username, email, password, image });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create friends
  for (let i = 0; i < 100; i += 1) {
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { _id: userId } = createdUsers.ops[randomUserIndex];

    let friendId = userId;

    while (friendId === userId) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      friendId = createdUsers.ops[randomUserIndex];
    }

    await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
  }

  // create events
  let createdEvents = [];
  for (let i = 0; i < 100; i += 1) {
    const name = faker.lorem.slug();
    

    // generates random timestamp and then formates into a readable time
    const timeStamp = faker.time.recent();
    // turns argument into milliseconds instead of seconds and then converts date
    const newDate = new Date(timeStamp * 1000);
    const date = new Intl.DateTimeFormat('en-US').format(newDate);

    // turns argument into milliseconds instead of seconds and then converts time
    const newTime = new Date(timeStamp * 1000);
    const time = newTime.toLocaleTimeString('en-us');

    const address = faker.address.streetAddress();
    const city = faker.address.cityName();
    const state = faker.address.state();
    const zip = faker.address.zipCode();

    const description = faker.lorem.sentence();
    const image = faker.image.nature();

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdEvent = await Event.create(
      { name,
        date, 
        time, 
        address,
        city,
        state,
        zip,
        description,
        username, 
        image
      });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { events: createdEvent._id } }
    );

    createdEvents.push(createdEvent);
  }

  // create comment
  for (let i = 0; i < 100; i += 1) {
    const commentText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username } = createdUsers.ops[randomUserIndex];

    const randomEventIndex = Math.floor(Math.random() * createdEvents.length);
    const { _id: eventId } = createdEvents[randomEventIndex];

    await Event.updateOne(
      { _id: eventId },
      { $push: { comments: { commentText, username } } },
      { runValidators: true }
    );
  }

  console.log('all done!');
  process.exit(0);
});
