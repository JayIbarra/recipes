const router = require('express').Router();

const recipeRoutes = require('./recipe-routes.js');
const userRoutes = require('./user-routes.js');

router.use('/recipes', recipeRoutes);
router.use('/users', userRoutes);

module.exports = router;