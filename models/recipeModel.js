const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    idMeal: { type: String, required: true },
    strMeal: { type: String, required: true },
    strCategory: { type: String, required: true },
    strInstructions: { type: String, required: true },
    strMealThumb: { type: String, required: true },
    strYoutube: { type: String, required: true }
});

const Recipe = mongoose.model('recipes', RecipeSchema);

module.exports = Recipe;
