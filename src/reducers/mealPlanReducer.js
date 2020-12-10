import {
    FIND_MEAL_PLAN_BY_ID
  } from "../actions/mealPlanActions"

const initialState = {
    mealPlans: [],
    mealPlan: {}
}

const courseReducer = (state = initialState, action) => {
    switch(action.type) {
        case FIND_MEAL_PLAN_BY_ID:
            return {
                ...state,
                mealPlan: action.mealPlan
            }
        default:
            return state
    }
}

export default courseReducer