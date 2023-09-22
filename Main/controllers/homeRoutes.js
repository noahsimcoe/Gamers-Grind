const router = require('express').Router();
const HighlightsBoard = require("../models/HighlightsBoard");
const Event = require("../models/event");
const User = require("../models/user");

router.get('/', async (req, res) => {
    try {
        const eventsData = await Event.findAll({
        });

        const events = eventsData.map((event) => event.get({ plain: true}));
        res.render('homepage', {
            events,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/highlights', async (req, res) => {
    try {
        const highlightsData = await HighlightsBoard.findAll({
        });
        const highlights = highlightsData.map((highlight) => highlight.get({ plain: true }));
        res.render('highlights', {
            highlights,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    try {
        res.render('login', {
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;