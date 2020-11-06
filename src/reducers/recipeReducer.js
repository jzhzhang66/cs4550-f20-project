import {
    FIND_RECIPES,
    UPDATE_KEYWORD,
    FIND_RECIPE_INFO_BY_ID
} from "../actions/recipeActions"



const initialState = {
    recipes: [],
    recipe: {},
    keyword: ""
}

const recipeReducer = (state = initialState, action) => {
    switch(action.type) {
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
        default:
            return state
    }
}

export default recipeReducer