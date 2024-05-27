const express = require('express');
const { getMeals, getRecipe } = require('../controllers/apiMealsControllers');

const router = express.Router();

// Endpoint to fetch meals based on the ingredient
router.get('/get-meals', getMeals);

// Endpoint to fetch meal recipe based on meal ID
router.get('/get-recipe', getRecipe);

module.exports = router;
