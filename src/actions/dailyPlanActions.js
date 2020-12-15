import DailyPlanService from "../services/DailyPlanService"

export const DELETE_DAILY_PLAN = "DELETE_DAILY_PLAN"
export const CREATE_DAILY_PLAN = "CREATE_DAILY_PLAN"
export const UPDATE_DAILY_PLAN = "UPDATE_DAILY_PLAN"
export const FIND_DAILY_PLAN_FOR_MEAL_PLAN = "FIND_DAILY_PLAN_FOR_MEAL_PLAN"
export const FIND_DAILY_PLAN = "FIND_DAILY_PLAN"


export const findDailyPlan = (dispatch, dailyPlanId) =>
    DailyPlanService.findDailyPlan(dailyPlanId)
        .then(dailyPlan =>
            dispatch({
                type: FIND_DAILY_PLAN,
                dailyPlanId
            }))

export const deleteDailyPlan = (dispatch, dailyPlan) =>
    DailyPlanService.deleteDailyPlan(dailyPlan.id)
        .then(status =>
            dispatch({
                type: DELETE_DAILY_PLAN,
                dailyPlan
            }))

export const createDailyPlan = (dispatch, mealPlan, dailyPlan) => 
    DailyPlanService.createDailyPlan(mealPlan.id, dailyPlan)
        .then(actualDailyPlan =>
            dispatch({
                type: CREATE_DAILY_PLAN,
                dailyPlan: actualDailyPlan
            }))

export const updateDailyPlan = (dispatch, dailyPlan) =>
    DailyPlanService.updateDailyPlan(dailyPlan.id, dailyPlan)
        .then(status =>
            dispatch({
                type: UPDATE_DAILY_PLAN,
                dailyPlan
            }))

export const findDailyPlansForMealPlan = (dispatch, mealPlanId) =>
    DailyPlanService.findDailyPlansForMealPlan(mealPlanId)
        .then(dailyPlans => dispatch({
            type: FIND_DAILY_PLAN_FOR_MEAL_PLAN,
            dailyPlans
        }))

