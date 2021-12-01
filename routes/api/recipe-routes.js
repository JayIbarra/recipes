const router = require('express').Router();
const { Recipe } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
  Recipe.findAll({
    attributes: ['id', 'recipe_name', 'difficulty_level', 'instructions'],
  })
  .then(dbRecipeData => res.json(dbRecipeData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/users/1
router.get('/:id', (req, res) => {});

// POST /api/users
router.post('/', (req, res) => {
  Recipe.create({
    recipe_name: req.body.recipe_name,
    difficulty_level: req.body.difficulty_level,
    instructions: req.body.instructions
  })
  .then(dbRecipeData => res.json(dbRecipeData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/users/1
router.put('/:id', (req, res) => {});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {});

module.exports = router;