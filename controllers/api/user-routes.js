const router = require("express").Router();
const { User } = require("../../models");

router.get("/", (req, res) => {
  User.findAll({
<<<<<<< HEAD
    attributes: { exclude: ["password"] },
  }).then((dbUserData) => {
=======
    attributes: { exclude: ['password'] }
  })
  .then(dbUserData => {
>>>>>>> 89680b04e6a4e5d8b5addbf30e926eee60a5a321
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
<<<<<<< HEAD

      res.json(dbUserData);
    });
  });
=======
  
      res.json(dbUserData);
    });
  })
>>>>>>> 89680b04e6a4e5d8b5addbf30e926eee60a5a321
});

router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// User login
router.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(400).json({ message: "No user with that email address!" });
      return;
    }

    // Verify user
    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }
<<<<<<< HEAD

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json(dbUserData);

      res.json({ user: dbUserData, message: "You are now logged in!" });
    });
  });
});

// User logut
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
=======

      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
    
        res.json(dbUserData);
      

      res.json({ user: dbUserData, message: 'You are now logged in!' });
    })
  });  
});

// User logut
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

module.exports = router;
>>>>>>> 89680b04e6a4e5d8b5addbf30e926eee60a5a321
