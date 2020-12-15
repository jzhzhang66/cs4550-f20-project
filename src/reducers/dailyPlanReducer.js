import {
    DELETE_DAILY_PLAN,
    CREATE_DAILY_PLAN,
    UPDATE_DAILY_PLAN,
    FIND_DAILY_PLAN,
    FIND_DAILY_PLAN_FOR_MEAL_PLAN

  } from "../actions/dailyPlanActions"

const initialState = {
    dailyPlans: [],
    dailyPlanId:{}
}


const dailyPlanReducer = (state=initialState, action) => {
    switch (action.type) {
        case CREATE_DAILY_PLAN:
            return {
                ...state,
                dailyPlans: [...state.dailyPlans, action.dailyPlan]
            }
        case FIND_DAILY_PLAN_FOR_MEAL_PLAN:
            return {
                ...state,
                dailyPlans: action.dailyPlans
            }
        case FIND_DAILY_PLAN:
            return {
                ...state,
                dailyPlanId: action.dailyPlan
            }
        case UPDATE_DAILY_PLAN:
            return {
                ...state,
                dailyPlans: state.dailyPlans.map(dailyPlan =>
                dailyPlan._id === action.dailyPlan._id ? action.dailyPlan : dailyPlan)
            }
        case DELETE_DAILY_PLAN:
            return {
                ...state,
                dailyPlans: state.dailyPlans.filter(dailyPlan => dailyPlan.id !== action.dailyPlan.id)
            }
        default:
            return state
    }
}

export default dailyPlanReducer
