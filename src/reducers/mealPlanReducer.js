import {
    FIND_MEAL_PLAN_BY_ID,
    FIND_MEAL_PLANS_BY_CREATOR,
    FIND_ALL_MEAL_PLANS,
    FIND_MEAL_PLANS_BY_NAME,
    DELETE_MEAL_PLAN,
    CREATE_MEAL_PLAN,
    UPDATE_MEAL_PLAN,
    CHANGE_DISPLAY,
    ENTER_TITLE,
    UPDATE_TITLE,
    UPDATE_KEYWORD,
    GET_FAVORITE_MEAL_PLANS_BY_FOLLOWER
} from "../actions/mealPlanActions"

const initialState = {
    mealPlans: [],
    mealPlan: {},
    title: "",
    isTable: true
}

const mealPlanReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FAVORITE_MEAL_PLANS_BY_FOLLOWER:
            debugger
            return {
                ...state,
                mealPlans: action.mealPlans
            }
        case FIND_ALL_MEAL_PLANS:
            return {
                ...state,
                mealPlans: action.mealPlans
            }
        case CREATE_MEAL_PLAN:
            return {
                mealPlans: [
                    ...state.mealPlans,
                    action.newMealPlan],
                title: ""
            }
        case FIND_MEAL_PLANS_BY_CREATOR:
            debugger
            return {
                ...state,
                mealPlans: action.mealPlans
            }
        case FIND_MEAL_PLANS_BY_NAME:
            return {
                ...state,
                mealPlans: action.mealPlans
            }
        case UPDATE_KEYWORD:
            return {
                ...state,
                keyword: action.keyword
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
                    mealPlan.id === action.mealPlan.id ? action.mealPlan : mealPlan)
            }
        case DELETE_MEAL_PLAN:
            return {
                ...state,
                mealPlans: state.mealPlans.filter(mealPlan => mealPlan.id !== action.mealPlan.id)
            }
        case CHANGE_DISPLAY:
            debugger
            return {
                ...state,
                isTable: !state.isTable
            }
        case ENTER_TITLE:
            return {
                ...state,
                title: action.newTitle
            }
        case UPDATE_TITLE:
            const newMealPlans = {
                ...state.mealPlans
            }
            newMealPlans[action.number] = action.mealPlan
            return {
                ...state,
                mealPlans: newMealPlans

            }
        default:
            return state
    }
}


export default mealPlanReducer
