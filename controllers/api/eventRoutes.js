const router = require('express').Router();
const { Event } = require('../../models');

// GET ROUTE - Find all of the events
router.get('/', async (req, res) => {
    try {
        const eventData = await Event.findAll();
        res.status(200).json(eventData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// GET ROUTE - Find an event by its 'id'
router.get('/:id', async (req, res) => {
    try {
        const eventData = await Event.findByPk(req.params.id, {
        });
        if (!eventData) {
            res.status(404).json({ message: "No event found with this id!" });
            return;
        }
      res.status(200).json(eventData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// POST ROUTE - Create a new event
router.post('/', async (req, res) => {
  console.log(req.body)
    try {
        const eventData = await Event.create({event_time: req.body.event_time, description: req.body.description, user_id: req.session.user_id});
      res.status(200).json(eventData);
    }
    catch (err) {
      res.status(400).json(err);
    }
});

// PUT ROUTE - Update an event by its 'id'
router.put('/:id', async (req, res) => {
    try {
        const updatedEvent = await Event.update(
            {
                description: req.body.description,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        if (updatedEvent[0] === 0) {
            return res.status(404).json({ message: "No event found with this id!"});
    }
        res.json(updatedEvent);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

// DELETE ROUTE - Delete an event by its 'id'
router.delete('/:id', async (req, res) => {
    try {
      const eventData = await Event.destroy({
        where: {
          id: req.params.id,
        }
      });
      if (!eventData) {
        res.status(404).json({ message: "No event found with this id!" });
        return;
      }
      res.status(200).json(eventData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;