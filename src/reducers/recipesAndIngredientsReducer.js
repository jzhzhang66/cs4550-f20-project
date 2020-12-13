
import {
    DELETE_INGREDIENT,
    DELETE_RECIPE,
    ADD_INGREDIENT_FOR_MEAL,
    ADD_RECIPE_FOR_MEAL
} from "../actions/recipeAndIngredientActions"

const initialState = {

    recipes: [
        {id: "123", title: "mac and cheese"},
        {id: "234", title: "chicken salad"},
        {id: "345", title: "sweet potato soup"},
    ],
    ingredients: [
        {id: "456", title: "strawberries"},
        {id: "567", title: "chocolate"},
        {id: "678", title: "yogurt"},
    ]
}


const recipesAndIngredientsReducer = (state=initialState, action) => {
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
    
        default:
            return state
    }
}

export default recipesAndIngredientsReducer
