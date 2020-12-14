import MealPlanService from "../services/MealPlanService"
export const FIND_ALL_MEAL_PLANS = "FIND_ALL_MEAL_PLANS";
export const FIND_MEAL_PLAN_BY_ID = "FIND_MEAL_PLAN_BY_ID";
export const FIND_MEAL_PLANS_BY_CREATOR = "FIND_MEAL_PLANS_BY_CREATOR";
export const DELETE_MEAL_PLAN = "DELETE_MEAL_PLAN";
export const CREATE_MEAL_PLAN = "CREATE_MEAL_PLAN";
export const UPDATE_MEAL_PLAN = "UPDATE_MEAL_PLAN";

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

export const findMealPlansByCreator = (dispatch, creatorId) =>
    MealPlanService.findMealPlansByCreator(creatorId)
        .then(mealPlans => dispatch({
            type: FIND_MEAL_PLANS_BY_CREATOR,
            mealPlans
        }))

export const deleteMealPlan = (dispatch, mealPlan) =>
    MealPlanService.deleteMealPlan(mealPlan.id)
        .then(status => dispatch({
            type: DELETE_MEAL_PLAN,
            mealPlan
        }))

export const updateMealPlan = (dispatch, mealPlanId, mealPlan) =>
    MealPlanService.updateMealPlan(mealPlanId, mealPlan)
        .then(status => dispatch({
            type: DELETE_MEAL_PLAN,
            mealPlan
        }))