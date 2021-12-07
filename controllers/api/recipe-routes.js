const router = require('express').Router();
const { Recipe } = require('../../models');


// GET /api/recipes
router.get('/', (req, res) => {
  Recipe.findAll({
    attributes: ['id', 'recipe_name', 'difficulty_level', 'recipe_url'],
  })
  .then(dbRecipeData => res.json(dbRecipeData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/recipe/1
router.get('/:id', (req, res) => {
  Recipe.findAll({
    where: {
      difficulty_level: req.params.id
    },
    attributes: ['id', 'recipe_name', 'difficulty_level', 'recipe_url',],
    
  })
    .then(dbRecipeData => {
      console.log(dbRecipeData)
      if (!dbRecipeData || dbRecipeData.length === 0) {
        res.status(404).json({ message: 'No recipe found with this id' });
        return;
      }
      const recipe = dbRecipeData.map(recipe => recipe.get({ plain: true }));

      res.render('recipes', { recipe });
    })
 
});


// POST /api/recipes
router.post('/', (req, res) => {
  Recipe.create({
    recipe_name: req.body.recipe_name,
    difficulty_level: req.body.difficulty_level,
    recipe_url: req.body.recipe_url
  })
  .then(dbRecipeData => res.json(dbRecipeData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Recipe.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbRecipeData => {
      if (!dbRecipeData) {
        res.status(404).json({ message: 'No recipe found with this id' });
        return;
      }
      res.json(dbRecipeData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



module.exports = router;