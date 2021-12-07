<<<<<<< HEAD
const router = require("express").Router();
const { Recipe } = require("../../models");

// GET /api/recipes
router.get("/", (req, res) => {
  Recipe.findAll({
    attributes: ["id", "recipe_name", "difficulty_level", "recipe_url"],
=======
const router = require('express').Router();
const { Recipe } = require('../../models');


// GET /api/recipes
router.get('/', (req, res) => {
  Recipe.findAll({
    attributes: ['id', 'recipe_name', 'difficulty_level', 'recipe_url'],
>>>>>>> 89680b04e6a4e5d8b5addbf30e926eee60a5a321
  })
    .then((dbRecipeData) => res.json(dbRecipeData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/recipe/1
<<<<<<< HEAD
router.get("/:id", (req, res) => {
  Recipe.findAll({
    where: {
      difficulty_level: req.params.id,
    },
    attributes: ["id", "recipe_name", "difficulty_level", "recipe_url"],
  }).then((dbRecipeData) => {
    console.log(dbRecipeData);
    if (!dbRecipeData || dbRecipeData.length === 0) {
      res.status(404).json({ message: "No recipe found with this id" });
      return;
    }
    const recipe = dbRecipeData.map((recipe) => recipe.get({ plain: true }));

    res.render("recipes", { recipe });
  });
});

// POST /api/recipes
router.post("/", (req, res) => {
  Recipe.create({
    recipe_name: req.body.recipe_name,
    difficulty_level: req.body.difficulty_level,
    recipe_url: req.body.recipe_url,
=======
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
>>>>>>> 89680b04e6a4e5d8b5addbf30e926eee60a5a321
  })
    .then((dbRecipeData) => res.json(dbRecipeData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

<<<<<<< HEAD
module.exports = router;
=======


module.exports = router;
>>>>>>> 89680b04e6a4e5d8b5addbf30e926eee60a5a321
