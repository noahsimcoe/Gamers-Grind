const seedUsers = require('./user-seeds');
const seedEvents = require('./event-seeds');
const seedHighlights = require('./highlights-seeds');


const sequelize = require('../config/connections');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedEvents();
    console.log('\n------ EVENTS SEEDED -----\n');

    await seedHighlights();
    console.log('\n----- HIGHLIGHTS SEEDED -----\n');

    process.exit(0);
  };

  seedAll();