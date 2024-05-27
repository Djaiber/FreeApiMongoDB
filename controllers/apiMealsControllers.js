const Meal = require('../models/mealModel');

const getMeals = async (req, res) => {
    let searchInputTxt = req.query.ingredient.trim();
    
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`);
        const data = await response.json();
        let numberOfMeals = 0;
        
        if (data.meals) {
            numberOfMeals = data.meals.length;

            // Save meals to MongoDB
            const mealPromises = data.meals.map(async meal => {
                const mealData = new Meal({
                    idMeal: meal.idMeal,
                    strMeal: meal.strMeal,
                    strMealThumb: meal.strMealThumb,
                });
                await mealData.save();
            });

            await Promise.all(mealPromises);

            res.json({ meals: data.meals, numberOfMeals });
        } else {
            res.json({ message: "Sorry, we didn't find any meal!", numberOfMeals });
        }
    } catch (error) {
        console.error("Error fetching meal list:", error);
        res.status(500).send("Internal Server Error");
    }
};

const getRecipe = async (req, res) => {
    let mealId = req.query.id;

    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        const data = await response.json();
        res.json(data.meals[0]);
    } catch (error) {
        console.error("Error fetching meal recipe:", error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = {
    getMeals,
    getRecipe
};
