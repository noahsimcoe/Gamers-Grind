const HighlightsBoard = require('../models/highlightsBoard');

const highlightsData = [
    {
        user_id: 1,
        message: "Great video clip I found",
        video_url: "https://youtu.be/Vs05Wu25kDY",
    },
    {
        user_id: 2,
        message: "Funniest video on the internet",
        video_url: "https://youtu.be/8Q-ev--GUSk",
    },
    {
        user_id: 3,
        message: "Highlights from last week",
        video_url: "https://youtu.be/mUkgNcS20L0",
    },
    {
        user_id: 4,
        message: "WOW! AWESOME!",
        video_url: "https://kuvirtfsfpt06-pvj1845.slack.com/files/U05AUBK9E4U/F05U4KAF1FS/img_0348.mov",
    },
];

const seedHighlights = () => HighlightsBoard.bulkCreate(highlightsData);

module.exports = seedHighlights;