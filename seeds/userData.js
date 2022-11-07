const { User } = require('../models');

const userData = [
  {
    username: 'johndoe',
    email: 'johndoe@gmail.com',
    password: passwordjohn,
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
