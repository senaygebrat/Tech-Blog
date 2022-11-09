const sequelize = require('../config/connection');
const seedUsers = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });


  await seedUsers();
  await seedPost();

  process.exit(0);
};

seedAll();
