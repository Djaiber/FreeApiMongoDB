document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');
    const mealList = document.getElementById('meal');
    const mealDetailsContent = document.querySelector('.meal-details-content');
    const recipeCloseBtn = document.getElementById('recipe-close-btn');
    
    // Event listeners
    searchBtn.addEventListener('click', getMealList);
    mealList.addEventListener('click', getMealRecipe);
    recipeCloseBtn.addEventListener('click', () => {
        mealDetailsContent.parentElement.classList.remove('showRecipe');
    });

    async function getMealList() {
        let searchInputTxt = document.getElementById('search-input').value.trim();
        try {
            const response = await fetch(`/get-meals?ingredient=${searchInputTxt}`);
            const data = await response.json();
            let html = "";
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += `
                        <div class="meal-item" data-id="${meal.idMeal}">
                            <div class="meal-img">
                                <img src="${meal.strMealThumb}" alt="food">
                            </div>
                            <div class="meal-name">
                                <h3>${meal.strMeal}</h3>
                                <a href="#" class="recipe-btn">Obtener Receta</a>
                            </div>
                        </div>
                    `;
                });
                mealList.classList.remove('notFound');
            } else {
                html = "Sorry, we didn't find any meal!";
                mealList.classList.add('notFound');
            }
            console.log(`Number of meals found: ${data.numberOfMeals}`);
            mealList.innerHTML = html;
        } catch (error) {
            console.error("Error fetching meal list:", error);
        }
    }

    function getMealRecipe(e){
        e.preventDefault();
        if(e.target.classList.contains('recipe-btn')){
            let mealItem = e.target.parentElement.parentElement;
            fetch(`/get-recipe?id=${mealItem.dataset.id}`)
            .then(response => response.json())
            .then(data => {
                console.log("Received Meal Data:", data); // Log data
                mealRecipeModal(data);
            });
        }
    }

    async function mealRecipeModal(meal) {
        try {
            console.log("Meal in Modal:", meal); // Log meal data
            let html = `
                <h2 class="recipe-title">${meal[0].strMeal}</h2>
                <p class="recipe-category">${meal[0].strCategory}</p>
                <div class="recipe-instruct">
                    <h3>Instructions:</h3>
                    <p>${meal[0].strInstructions}</p>
                </div>
                <div class="recipe-meal-img">
                    <img src="${meal[0].strMealThumb}" alt="">
                </div>
                <div class="recipe-link">
                    <a href="${meal[0].strYoutube}" target="_blank">Watch Video</a>
                </div>
            `;
            mealDetailsContent.innerHTML = html;
            mealDetailsContent.parentElement.classList.add('showRecipe');
        } catch (error) {
            console.error("Error in mealRecipeModal:", error);
        }
    }
});
