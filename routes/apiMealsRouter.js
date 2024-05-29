const express = require('express');
const getMeals = require('../controllers/apiMealsControllers');
const getRecipe  = require('../controllers/apiRecipeControllers');

const router = express.Router();

// Endpoint to fetch meals based on the ingredient
router.get('/get-meals', getMeals);

// Endpoint to fetch meal recipe based on meal ID
router.get('/get-recipe', getRecipe);

module.exports = router;
