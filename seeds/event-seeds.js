const Event = require("../models/event");

const eventData = [
    {
        user_id: 1,
        day_id: 2,
        description: "GTA V",
        event_time: 2023-09-27,
    },
    {
        user_id: 2,
        day_id: 4,
        description: "MW3",
        event_time: 2023-09-27,
    },
    {
        user_id: 3,
        day_id: 3,
        description: "Fallout 4",
        event_time: 2023-09-27,
    },
    {
        user_id: 4,
        day_id: 4,
        description: "GTA V",
        event_time: 2023-09-27,
    },
];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;