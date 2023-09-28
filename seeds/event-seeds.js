const Event = require("../models/event");

const eventData = [
    {
        user_id: 1,
        day_id: 2,
        description: "GTA V with the boys!",
        event_time: 2023-09-28,
    },
    {
        user_id: 2,
        day_id: 4,
        description: "MW3 Gaming Session",
        event_time: 2023-09-28,
    },
    {
        user_id: 3,
        day_id: 3,
        description: "Fallout 4/Skyrim endeavors",
        event_time: 2023-09-29,
    },
    {
        user_id: 4,
        day_id: 4,
        description: "Destiny 2 PUB STOMPING",
        event_time: 2023-09-29,
    },
];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;