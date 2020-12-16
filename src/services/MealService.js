import {URL} from "./DailyPlanService"

const url = `${URL}/dailyplans`;
const mealUrl = `${URL}/meals`

export const findMeal = (mealId) =>
    fetch(`${mealUrl}/${mealId}`).then(response => response.json())

export const findMealsForDailyPlan = (dailyPlanId) => {
    debugger
    return fetch(`${url}/${dailyPlanId}/meals`, {
        method: "GET"
    })
        .then(response => response.json())
}

export const deleteMeal = (mealId) =>
    fetch(`${mealUrl}/${mealId}`, {
        method: "DELETE"
    })
        .then(response => console.log(response))

export const createMeal = (dailyPlanId, meal) =>

    fetch(`${url}/${dailyPlanId}/meals`, {
        method: "POST",
        body: JSON.stringify(meal),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

export const updateMeal = (mealId, meal) =>
    fetch(`${mealUrl}/${mealId}`, {
        method: "PUT",
        body: JSON.stringify(meal),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())


export default {
    findMeal,
    findMealsForDailyPlan,
    deleteMeal,
    createMeal,
    updateMeal
}
