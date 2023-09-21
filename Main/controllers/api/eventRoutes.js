const router = require('express').Router();
const { Event } = require('../../models/Event');

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
      res.status(200).json(categoryData);
    } 
    catch (err) {
        res.status(500).json(err);
    }
});

// POST ROUTE - Create a new event
router.post('/', async (req, res) => {
    try {
        const eventData = await Event.create(req.body);
      res.status(200).json(eventData);
    } 
    catch (err) {
      res.status(400).json(err);
    }
});

// PUT ROUTE - Update an event by its 'id'
router.put('/:id', (req, res) => {
    try {
        Event.update(
            {
                description: req.body.description,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        ).then((updatedEvent) => {
            res.json(updatedEvent);
        })
        if (!eventData) {
            res.status(404).json({ message: "No event found with this id!" });
            return;}
    } 
    catch (err) {
        res.status(500).json(err);
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