import {
    FIND_INGREDIENTS,
    UPDATE_KEYWORD,
    FIND_INGREDIENT_INFO_BY_ID
} from "../actions/ingredientActions"



const initialState = {
    ingredients: [],
    ingredient: {
        possibleUnits: []
    },
    keyword: "",
}

const ingredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_INGREDIENTS: 
            return {
                ...state,
                ingredients: action.ingredients.results
            }
        case UPDATE_KEYWORD:
            return {
                ...state,
                keyword: action.keyword
            }
        case FIND_INGREDIENT_INFO_BY_ID:
            debugger
            return {
                ...state,
                ingredient: action.ingredient
            }
            console.log(state.ingredient)
        default:
            return state
    }
}

export default ingredientReducer