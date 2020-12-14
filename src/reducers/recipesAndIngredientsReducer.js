
import {
    DELETE_INGREDIENT,
    DELETE_RECIPE,
    ADD_INGREDIENT_FOR_MEAL,
    ADD_RECIPE_FOR_MEAL,
    FIND_INGREDIENTS_FOR_MEAL,
    FIND_RECIPES_FOR_MEAL
} from "../actions/recipeAndIngredientActions"

const initialState = {

    recipes: [
        {id: "123", mealId: "5fd2a5458508590017dc1dba", title: "mac and cheese"},
        {id: "234", mealId: "5fd2a5458508590017dc1dba", title: "chicken salad"},
        {id: "345", mealId: "5fd2eef98508590017dc1dbf", title: "sweet potato soup"},
    ],
    ingredients: [
        {id: "456", mealId: "5fd2eef98508590017dc1dbf", title: "strawberries"},
        {id: "567", mealId: "5fd2eef98508590017dc1dbf", title: "chocolate"},
        {id: "678", mealId: "5fd2a5458508590017dc1dba", title: "yogurt"},
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
        case ADD_RECIPE_FOR_MEAL: 
            return {
                ...state, 
                recipes: [...state.recipes, action.recipe]
            }
        case ADD_INGREDIENT_FOR_MEAL: 
            return {
                ...state, 
                ingredients: [...state.ingredients, action.ingredient]
            }
        default:
            return state
    }
}

export default recipesAndIngredientsReducer
