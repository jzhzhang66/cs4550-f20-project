export const DELETE_RECIPE = "DELETE_RECIPE"
export const DELETE_INGREDIENT = "DELETE_INGREDIENT"
export const ADD_RECIPE_FOR_MEAL = "ADD_RECIPE_FOR_MEAL"
export const ADD_INGREDIENT_FOR_MEAL = "ADD_INGREDIENT_FOR_MEAL"
export const FIND_RECIPEs_FOR_MEAL = "FIND_RECIPEs_FOR_MEAL"
export const FIND_INGREDIENTS_FOR_MEAL = "FIND_INGREDIENTS_FOR_MEAL"

export const deleteRecipe = (dispatch, recipeId) => {
    return dispatch({
        type: DELETE_RECIPE,
        recipeId
    })
}

export const deleteIngredient = (dispatch, ingredientId) => {
    return dispatch({
        type: DELETE_INGREDIENT,
        ingredientId
    })
}

export const addRecipeForMeal = (dispatch, mealId, recipe) => {
    return dispatch({
        type: ADD_RECIPE_FOR_MEAL,
        mealId,
        recipe
    })
}

export const addIngredientForMeal = (dispatch, mealId, ingredient) => {
    return dispatch({
        type: ADD_INGREDIENT_FOR_MEAL,
        mealId,
        ingredient
    })
}

export const findRecipesForMeal = (dispatch, mealId) => {
    return dispatch({
        type: FIND_RECIPEs_FOR_MEAL,
        mealId
    })
}