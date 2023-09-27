const HighlightsBoard = require('../models');

const highlightsData = [
    {
        user_id: 1,
        message: "Test test test",
        video_url: "https://youtu.be/Vs05Wu25kDY",
        // entry_time: new Date ('2023-09-24'),
    },
    {
        user_id: 2,
        message: "Test test test",
        video_url: "https://youtu.be/8Q-ev--GUSk",
        // entry_time: new Date ('2023-09-25'),
    },
    {
        user_id: 3,
        message: "Test test test",
        video_url: "https://youtu.be/mUkgNcS20L0",
        // entry_time: new Date ('2023-09-26'),
    },
    {
        user_id: 4,
        message: "Test test test",
        video_url: "https://kuvirtfsfpt06-pvj1845.slack.com/files/U05AUBK9E4U/F05U4KAF1FS/img_0348.mov",
        // entry_time: new Date ('2023-09-27'),
    },

];

const seedHighlights = () => HighlightsBoard.bulkCreate(highlightsData);

module.exports = seedHighlights;