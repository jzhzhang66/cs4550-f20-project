import RecipesAndIngredientsService from '../services/RecipesAndIngredientsService'
export const DELETE_RECIPE = "DELETE_RECIPE"
export const DELETE_INGREDIENT = "DELETE_INGREDIENT"
export const ADD_RECIPE_FOR_MEAL = "ADD_RECIPE_FOR_MEAL"
export const ADD_INGREDIENT_FOR_MEAL = "ADD_INGREDIENT_FOR_MEAL"
export const FIND_RECIPES_FOR_MEAL = "FIND_RECIPES_FOR_MEAL"
export const FIND_INGREDIENTS_FOR_MEAL = "FIND_INGREDIENTS_FOR_MEAL"

export const deleteRecipe = (dispatch, recipeId) =>
    RecipesAndIngredientsService.deleteRecipe(recipeId)
        .then(status =>
            dispatch({
                type: DELETE_RECIPE,
                recipeId
            })
        )


export const deleteIngredient = (dispatch, ingredientId) =>
    RecipesAndIngredientsService.deleteIngredient(ingredientId)
        .then(status =>
            dispatch({
                type: DELETE_INGREDIENT,
                ingredientId
            })
        )

export const addRecipeForMeal = (dispatch, mealId, recipe) => {
    const newRecipe = {spoonRecipeId: recipe.id, servingUnit: recipe.title}
   return RecipesAndIngredientsService.addRecipeForMeal(mealId, newRecipe)
        .then(recipe =>
            dispatch({
                type: ADD_RECIPE_FOR_MEAL,
                newRecipe
            })
        )
}

export const addIngredientForMeal = (dispatch, mealId, ingredient) => {
    debugger
    const newIngredient = {spoonIngredientId: ingredient.id, servingUnit: ingredient.name}
    return RecipesAndIngredientsService.addIngredientForMeal(mealId, ingredient)
        .then(ingredient =>
            dispatch({
                type: ADD_RECIPE_FOR_MEAL,
                ingredient
            })
        )
}


export const findRecipesForMeal = (dispatch, mealId) =>
    RecipesAndIngredientsService.findRecipesForMeal(mealId)
        .then(recipes =>
            dispatch({
                type: FIND_RECIPES_FOR_MEAL,
                recipes
            })
        )


export const findIngredientsForMeal = (dispatch, mealId) =>
    RecipesAndIngredientsService.findIngredientsForMeal(mealId)
        .then(ingredients =>
            dispatch({
                type: FIND_INGREDIENTS_FOR_MEAL,
                ingredients
            })
        )