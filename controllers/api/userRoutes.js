const router = require('express').Router();
const { User }  = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username,
       },
     });

    // Validation for if username exists in database
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username, please try again' });
      return;
    }

    // Validation for if request password = username's password
    if (userData.password !== req.body.password) {
      res
        .status(400)
        .json({ message: 'Incorrect password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      console.log(req.session);

      res.json({ user: userData, message: `You are now logged in!` });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// GET ROUTE - Find all of the users
router.get('/', async (req, res) => {
  try {
      const userData = await User.findAll();
      res.status(200).json(userData);
  }
  catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;

