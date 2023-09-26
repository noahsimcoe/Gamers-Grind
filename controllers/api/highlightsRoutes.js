const router = require('express').Router();
const { HighlightsBoard } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const highlightsData = await HighlightsBoard.create(req.body);

    req.session.save(() => {
      res.status(200).json(highlightsData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/', async (req, res) => {
    try {
        const userData = await HighlightsBoard.findAll();
        res.status(200).json(userData);
    }
    catch (err) {
        res.status(500).json(err);
    }
  });

module.exports = router;
