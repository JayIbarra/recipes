const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipe, User } = require('../models');

router.get('/', (req, res) => {
  Recipe.findAll({
    attributes: ['id', 'recipe_name', 'difficulty_level', 'instructions'],
  })
  .then(dbRecipeData => {
    // pass a single post object into the homepage template
   
    const recipe = dbRecipeData.map(recipe => recipe.get({ plain: true }));
    res.render('homepage', { recipe });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;