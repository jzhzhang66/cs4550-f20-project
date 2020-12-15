// const url = 'https://wbdv-generic-server.herokuapp.com/api/ericli0303/modules'
// const mealUrl = 'https://wbdv-generic-server.herokuapp.com/api/ericli0303/lessons'
const localurl = 'http://localhost:8080/api/dailyplans'
const localmealUrl = 'http://localhost:8080/api/meals'

const heroku = "https://planme-al.herokuapp.com/api"

const url = `${heroku}/dailyplans`;
const mealUrl = `${heroku}/meals`

export const findMeal = (mealId) =>
    fetch(`${mealUrl}/${mealId}`).then(response => response.json())

export const findMealsForDailyPlan = (dailyPlanId) =>
    fetch(`${url}/${dailyPlanId}/meals`, {
        method: "GET"
    })
        .then(response => response.json())

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
