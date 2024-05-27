const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    idMeal: { type: String, required: true },
    strMeal: { type: String, required: true },
    strMealThumb: { type: String, required: true },
});

const Meal = mongoose.model('chartMeals', mealSchema);

module.exports = Meal;
