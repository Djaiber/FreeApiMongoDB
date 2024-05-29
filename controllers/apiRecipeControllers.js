const Recipe = require('../models/recipeModel');

const getRecipe = async (req, res) => {
    let mealId = req.query.id;

    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        const data = await response.json();
        
        const recipePromises = data.meals.map(async meal => {
            const newRecipe = new Recipe({
                idMeal: meal.idMeal,
                strMeal: meal.strMeal,
                strCategory: meal.strCategory,
                strInstructions: meal.strInstructions,
                strMealThumb: meal.strMealThumb,
                strYoutube: meal.strYoutube
            });
            await newRecipe.save();
            return newRecipe;
        });

        const savedRecipes = await Promise.all(recipePromises);

        res.json(savedRecipes);
    } catch (error) {
        console.error("Error fetching meal recipe:", error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = getRecipe;

