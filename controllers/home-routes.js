const router = require('express').Router();
const { Recipe, User } = require('../models');

router.get('/', (req, res) => {
  res.render('homepage', {
    loggedIn: req.session.loggedIn
  })
});

router.get('/recipe/:id', (req, res) => {
  Recipe.findAll({
    where: {
      difficulty_level: req.params.id
    },
    attributes: ['id', 'recipe_name', 'difficulty_level', 'recipe_url',],
    
  })
  
  .then(dbRecipeData => {
    console.log(dbRecipeData)
     
     const recipe = dbRecipeData.map(recipe => recipe.get({ plain: true }));

      res.render('recipes', { recipe });
    })
    
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});


module.exports = router;