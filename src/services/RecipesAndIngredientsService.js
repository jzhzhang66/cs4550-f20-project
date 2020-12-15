const recipeUrl = 'http://localhost:8080/api/recipes'
const mealUrl = 'http://localhost:8080/api/meals'
const ingredientUrl = 'http://localhost:8080/api/ingredients'

export const findRecipesForMeal = (mealId) => {
    return fetch(`${mealUrl}/${mealId}/recipes`, {
        method: "GET"
    })
        .then(response => response.json())
}

export const deleteRecipe = (recipeId) => {
    debugger
    return fetch(`${recipeUrl}/${recipeId}`, {
        method: "DELETE"
    })
        .then(response => console.log(response))
}


export const findIngredientsForMeal = (mealId) =>
    fetch(`${mealUrl}/${mealId}/ingredients`, {
        method: "GET"
    })
        .then(response => response.json())

export const deleteIngredient = (ingredientId) =>
    fetch(`${ingredientUrl}/${ingredientId}`, {
        method: "DELETE"
    })
        .then(response => console.log(response))

export const addIngredientForMeal = (mealId, ingredient) => {
    debugger
    fetch(`${mealUrl}/${mealId}/ingredients`, {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())
}


export const addRecipeForMeal = (mealId, recipe) => {
    debugger
    return fetch(`${mealUrl}/${mealId}/recipes`,  {
        method: "POST",
        body: JSON.stringify(recipe),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())
}

export default {
    findRecipesForMeal, 
    deleteRecipe, 
    findIngredientsForMeal, 
    deleteIngredient, 
    addIngredientForMeal, 
    addRecipeForMeal
}