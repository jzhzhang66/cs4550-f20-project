
import {
    DELETE_INGREDIENT,
    DELETE_RECIPE,
    ADD_INGREDIENT_FOR_MEAL,
    ADD_RECIPE_FOR_MEAL,
    FIND_INGREDIENTS_FOR_MEAL,
    FIND_RECIPES_FOR_MEAL
} from "../actions/recipeAndIngredientActions"

const initialState = {
    recipes: [],
    ingredients: []
}


const recipesAndIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_INGREDIENT:
            debugger
            return {
                ...state,
                ingredients: state.ingredients.filter(ingredient => ingredient.id !== action.ingredientId)
            }
        case DELETE_RECIPE:
            return {
                ...state,
                recipes: state.recipes.filter(recipe => recipe.id !== action.recipeId)
            }
        case ADD_RECIPE_FOR_MEAL:
            debugger
            return {
                ...state,
                recipes: [...state.recipes, action.recipe]
            }
        case ADD_INGREDIENT_FOR_MEAL:
            return {
                ...state,
                ingredients: [...state.ingredients, action.ingredient]
            }
        case FIND_RECIPES_FOR_MEAL:
            return {
                ...state,
                recipes: action.recipes
            }
        case FIND_INGREDIENTS_FOR_MEAL:
            return {
                ...state,
                ingredients: action.ingredients
            }
        default:
            return state
    }
}

export default recipesAndIngredientsReducer
