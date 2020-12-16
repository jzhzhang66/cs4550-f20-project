import MealPlanService from "../services/MealPlanService"
export const FIND_ALL_MEAL_PLANS = "FIND_ALL_MEAL_PLANS";
export const FIND_MEAL_PLAN_BY_ID = "FIND_MEAL_PLAN_BY_ID";
export const FIND_MEAL_PLANS_BY_CREATOR = "FIND_MEAL_PLANS_BY_CREATOR";
export const FIND_MEAL_PLANS_BY_NAME = "FIND_MEAL_PLANS_BY_NAME";
export const DELETE_MEAL_PLAN = "DELETE_MEAL_PLAN";
export const CREATE_MEAL_PLAN = "CREATE_MEAL_PLAN";
export const UPDATE_MEAL_PLAN = "UPDATE_MEAL_PLAN";
export const CHANGE_DISPLAY = "CHANGE_DISPLAY";
export const ENTER_TITLE = "ENTER_TITLE";
export const UPDATE_TITLE = "UPDATE_TITLE";
export const UPDATE_KEYWORD = "UPDATE_KEYWORD";
export const GET_FAVORITE_MEAL_PLANS_BY_FOLLOWER = "GET_FAVORITE_MEAL_PLANS_BY_FOLLOWER"

export const findAllMealPlans = (dispatch) =>
    MealPlanService.findAllMealPlans()
        .then(mealPlans => dispatch({
            type: FIND_ALL_MEAL_PLANS,
            mealPlans
        }))

export const findMealPlanById = (dispatch, mealPlanId) =>
    MealPlanService.findMealPlanById(mealPlanId)
        .then(mealPlan => dispatch({
            type: FIND_MEAL_PLAN_BY_ID,
            mealPlan
        }))

export const findMealPlansByName = (dispatch, mealPlanName) => {
    debugger
    return MealPlanService.findMealPlansByName(mealPlanName)
        .then(mealPlans => dispatch({
            type: FIND_MEAL_PLANS_BY_NAME,
            mealPlans
        }))
}



export const updateKeyword = (dispatch, keyword) => {
    return dispatch({
        type: UPDATE_KEYWORD,
        keyword
    })
}


export const findMealPlansByCreator = (dispatch, creatorId) => {
    return MealPlanService.findMealPlansByCreator(creatorId)
        .then(mealPlans => dispatch({
            type: FIND_MEAL_PLANS_BY_CREATOR,
            mealPlans
        }))
}

export const getFavoriteMealPlansByFollowerId = (dispatch, uid) => {
    debugger
    return MealPlanService.getFavoriteMealPlansByFollowerId(uid)
        .then(mealPlans => dispatch({
            type: FIND_MEAL_PLANS_BY_CREATOR,
            uid
        }))
}

export const deleteMealPlan = (dispatch, mealPlan) =>
    MealPlanService.deleteMealPlan(mealPlan.id)
        .then(status => dispatch({
            type: DELETE_MEAL_PLAN,
            mealPlan
        }))

export const updateMealPlan = (dispatch, mealPlan) =>
    MealPlanService.updateMealPlan(mealPlan.id, mealPlan)
        .then(status =>
            dispatch({
                type: UPDATE_MEAL_PLAN,
                mealPlan
            }))


export const createMealPlan = (dispatch, creatorId, newMealPlan) =>
    MealPlanService.createMealPlan(creatorId, newMealPlan)
        .then(newMealPlan => dispatch({
            type: CREATE_MEAL_PLAN,
            creatorId,
            newMealPlan
        }))

export const changeDisplay = (dispatch) => {
    return dispatch({
        type: CHANGE_DISPLAY
    })
}

export const enterTitle = (dispatch, newTitle) => {
    return dispatch({
        type: ENTER_TITLE,
        newTitle
    })
}

export const updateTitle = (dispatch, mealPlan, number) => {
    return dispatch({
        type: UPDATE_TITLE,
        mealPlan,
        number
    })
}
