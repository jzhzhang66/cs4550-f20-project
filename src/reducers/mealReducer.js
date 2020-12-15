import {
    DELETE_MEAL,
    CREATE_MEAL,
    UPDATE_MEAL,
    FIND_MEAL,
    FIND_MEALS_FOR_DAILY_PLAN

  } from "../actions/mealActions"

const initialState = {
    meals: [],
    mealId: {}
}


const mealReducer = (state=initialState, action) => {
    switch (action.type) {
        case CREATE_MEAL:
            return {
                ...state,
                meals: [...state.meals, action.meal]
            }
        case FIND_MEALS_FOR_DAILY_PLAN:
            return {
                ...state,
                meals: action.meals,
                dailyPlanId: action.dailyPlanId
            }
        case FIND_MEAL:
            return {
                ...state,
                mealId: action.mealId
            }
        case UPDATE_MEAL:
            return {
                ...state,
                meals: state.meals.map(meal => meal.id === action.meal.id ? action.meal : meal)
            }
        case DELETE_MEAL:
            return {
                ...state,
                meals: state.meals.filter(meal => meal.id !== action.meal.id)
            }
        default:
            return state
    }
}

export default mealReducer
