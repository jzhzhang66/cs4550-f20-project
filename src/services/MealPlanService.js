// const url2 = 'https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses'
const url = 'https://wbdv-generic-server.herokuapp.com/api/ericli0303/courses2'
// const url = 'http://localhost:8080/api/mealplans'

export const findAllMealPlans = () =>
    fetch(url).then(response => response.json())


export const findMealPlanById = (mealPlanId) =>
    fetch(`${url}/${mealPlanId}`, {
        method: "GET"
    })
        .then(response => response.json())

export const deleteMealPlan = (mealPlanId) =>
    fetch(`${url}/${mealPlanId}`, { method: "DELETE" })
        .then(response => response.json())

export const createMealPlan = (newMealPlan) =>
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newMealPlan),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())


export const updateMealPlan = (mealPlanId, mealPlan) =>
    fetch(`${url}/${mealPlanId}`, {
        method: "PUT",
        body: JSON.stringify(mealPlan),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

export const getMealPlanByCreator = (creatorId) =>
    fetch(`${url}/creator/${creatorId}/mealplans`).then(response => response.json())


export default {
    findAllMealPlans,
    deleteMealPlan,
    createMealPlan,
    updateMealPlan,
    findMealPlanById
}
