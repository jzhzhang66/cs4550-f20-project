import MealService from "../services/MealService"

export const DELETE_MEAL = "DELETE_MEAL"
export const CREATE_MEAL = "CREATE_MEAL"
export const UPDATE_MEAL = "UPDATE_MEAL"
export const FIND_MEALS_FOR_DAILY_PLAN = "FIND_MEALS_FOR_DAILY_PLAN"
export const FIND_MEAL = "FIND_MEAL"



export const deleteMeal = (dispatch, meal) =>
    MealService.deleteMeal(meal._id)
        .then(status =>
            dispatch({
                type: DELETE_MEAL,
                meal
            }))

export const createMeal = (dispatch, dailyPlanId, meal) =>
    {
        debugger
        MealService.createMeal(dailyPlanId, meal)
        .then(actualMeal =>
            dispatch({
                type: CREATE_MEAL,
                meal: actualMeal
            }))
            
        }
export const updateMeal = (dispatch, meal) =>
    MealService.updateMeal(meal._id, meal)
        .then(status =>
            dispatch({
                type: UPDATE_MEAL,
                meal
            }))

export const findMealsForDailyPlan = (dispatch, dailyPlanId) =>
{
    MealService.findMealsForDailyPlan(dailyPlanId)
        .then(meals => dispatch({
            type: FIND_MEALS_FOR_DAILY_PLAN,
            meals,
            dailyPlanId
        }))
    }

export const findMeal = (dispatch, mealId) =>
    MealService.findMeal(mealId)
        .then(meal => dispatch({
            type: FIND_MEAL,
            mealId
        }))

