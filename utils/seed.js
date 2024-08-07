const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomEmail, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('Connected to MongoDB');

  try {
    // Delete the users and thoughts collections if they exist
    await connection.dropCollection('users');
    await connection.dropCollection('thoughts');

    // Generate 6 random users
    const users = [];
    const usedUsernames = new Set();
    const usedEmails = new Set();

    for (let i = 0; i < 6; i++) {
      let username = getRandomUsername();
      let email = getRandomEmail();

      // Check if username or email is already used, generate new ones if necessary
      while (usedUsernames.has(username) || usedEmails.has(email)) {
        username = getRandomUsername();
        email = getRandomEmail();
      }

      // Add the username and email to the used sets
      usedUsernames.add(username);
      usedEmails.add(email);

      // Generate a random thought for each user
      const thoughtText = getRandomThought();

      // Create a new thought using the Thought model
      const newThought = await Thought.create({
        thoughtText,
        username,
        reactions: []  // Optionally initialize with empty reactions array
      });

      // Add the new thought to the user's thoughts array
      users.push({ username, email, thoughts: [newThought._id] });
    }

    // Insert the generated users into the database
    const createdUsers = await User.create(users);

    // Output the generated users
    console.log('Generated Users:');
    console.table(createdUsers);

    console.log('Seeding complete! 🌱');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
});