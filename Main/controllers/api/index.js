const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');
const highlightsRoutes = require('./highlightsRoutes');
const calendarRoutes = require('./calendarRoutes');

router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/highlights', highlightsRoutes);
router.use('/calendar', calendarRoutes);

module.exports = router;