const User = require('../models/User');

const userData = [
    {
        username: "Noah",
        password: "Simcoe",
        // registration_time: 2023-09-27,
    },
    {
        username: "Brian",
        password: "Monda",
        // registration_time: 2023-09-25,
    },
    {
        username: "Britain",
        password: "Gilgour",
        // registration_time: 2023-09-28,
    },
    {
        username: "Jaxson",
        password: "Fellhauer",
        // registration_time: 2023-09-22,
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;