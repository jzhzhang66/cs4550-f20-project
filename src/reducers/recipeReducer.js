import {
    FIND_RECIPES,
    UPDATE_KEYWORD,
    FIND_RECIPE_INFO_BY_ID,
    FIND_RECIPE_INSTRUCTIONS_BY_ID
} from "../actions/recipeActions"



const initialState = {
    recipes: [],
    recipe: {},
    keyword: "",
    instructions: {}
}

const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_RECIPES:
            debugger
            console.log(action.recipes)
            return {
                ...state,
                recipes: action.recipes.results
            }
        case UPDATE_KEYWORD:
            return {
                ...state,
                keyword: action.keyword
            }
        case FIND_RECIPE_INFO_BY_ID:
            debugger
            return {
                ...state,
                recipe: action.recipe
            }
        case FIND_RECIPE_INSTRUCTIONS_BY_ID:
            debugger
            return {
                ...state,
                instructions: action.instructions
            }
        default:
            return state
    }
}

export default recipeReducer