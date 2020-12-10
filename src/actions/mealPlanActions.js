import MealPlanService from "../services/MealPlanService"

export const FIND_MEAL_PLAN_BY_ID = "FIND_MEAL_PLAN_BY_ID"

export const findMealPlanById = (dispatch, mealPlanId) =>
    MealPlanService.findMealPlanById(mealPlanId)
        .then(mealPlan => dispatch({
            type: FIND_MEAL_PLAN_BY_ID,
            mealPlan
        }))

