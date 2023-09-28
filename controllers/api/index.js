const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');
const highlightsRoutes = require('./highlightsRoutes');

router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/highlights', highlightsRoutes);

module.exports = router;