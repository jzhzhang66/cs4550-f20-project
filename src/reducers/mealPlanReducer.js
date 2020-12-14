import {
    FIND_MEAL_PLAN_BY_ID, 
    FIND_MEAL_PLANS_BY_CREATOR,
    FIND_ALL_MEAL_PLANS,
    DELETE_MEAL_PLAN,
    CREATE_MEAL_PLAN,
    UPDATE_MEAL_PLAN
  } from "../actions/mealPlanActions"

const initialState = {
    mealPlans: [],
    mealPlan: {}
}

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_ALL_MEAL_PLANS:
            return {
                ...state,
                mealPlans: action.mealPlans
            }
        case CREATE_MEAL_PLAN:
            return {
                ...state,
                mealPlans: [...state.mealPlans, action.mealPlan]
            }
        case FIND_MEAL_PLANS_BY_CREATOR:
            return {
                ...state,
                mealPlans: action.mealPlans
            }
        case FIND_MEAL_PLAN_BY_ID:
            return {
                ...state,
                mealPlan: action.mealPlan
            }
        case UPDATE_MEAL_PLAN:
            return {
                ...state,
                mealPlans: state.mealPlans.map(mealPlan =>
                    mealPlan._id === action.mealPlanId ? action.mealPlan : mealPlan)
            }
        case DELETE_MEAL_PLAN:
            return {
                ...state,
                mealPlans: state.mealPlans.filter(mealPlan => mealPlan._id !== action.mealPlanId)
            }
        default:
            return state
    }
}

export default courseReducer