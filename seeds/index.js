const sequelize = require('../config/connection');
// const seedGallery = require('./galleryData');
const seedUsers = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  // await seedGallery();

  await seedUsers();

  process.exit(0);
};

seedAll();
