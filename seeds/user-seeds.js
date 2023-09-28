const User = require('../models/user');

const userData = [
    {
        username: "Noah",
        password: "Simcoe",
    },
    {
        username: "Brian",
        password: "Monda",
    },
    {
        username: "Britain",
        password: "Gilgour",
    },
    {
        username: "Jaxson",
        password: "Fellhauer",
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;