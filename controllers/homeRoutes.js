const router = require('express').Router();
const {User, HighlightsBoard, Event, Calendar} = require("../models");

router.get('/', async (req, res) => {
    try {
        const eventsData = await Event.findAll({
        });

        const events = eventsData.map((event) => event.get({ plain: true}));
        res.render('homepage', {
            events,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/highlights', async (req, res) => {
    try {
        const highlightsData = await HighlightsBoard.findAll({
            include: [{model:User}],
        });
        const highlights = highlightsData.map((highlight) => highlight.get({ plain: true }));
        res.render('highlights', {
            highlights,
            logged_in: req.session.logged_in,
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