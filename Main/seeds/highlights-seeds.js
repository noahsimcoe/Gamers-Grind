const HighlightsBoard = require('../models/HighlightsBoard');

const highlightsData = [
    {
        user_id: 1,
        message: "Test test test",
        entry_time: 2023-09-24,
    },
    {
        user_id: 2,
        message: "Test test test",
        entry_time: 2023-09-25,
    },
    {
        user_id: 3,
        message: "Test test test",
        entry_time: 2023-09-26,
    },
    {
        user_id: 4,
        message: "Test test test",
        entry_time: 2023-09-27,
    },

];

const seedHighlights = () => HighlightsBoard.bulkCreate(highlightsData);

module.exports = seedHighlights;