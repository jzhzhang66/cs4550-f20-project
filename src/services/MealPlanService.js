// const url2 = 'https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses'
// const url = 'https://wbdv-generic-server.herokuapp.com/api/ericli0303/courses2'
const localurl = 'http://localhost:8080/api'

const heroku = "https://planme-al.herokuapp.com/api"

const url = heroku;

export const findAllMealPlans = () =>
    fetch(`${url}/mealplans`)
        .then(response => response.json())

export const findMealPlanById = (mealPlanId) =>
    fetch(`${url}/mealplans/${mealPlanId}`, {
        method: "GET"
    })
        .then(response => response.json())

export const findMealPlansByCreator = (creatorId) => {
    debugger
    return fetch(`${url}/creator/${creatorId}/mealplans`)
        .then(response => response.json())
}

export const deleteMealPlan = (mealPlan) =>
    fetch(`${url}/mealplans/${mealPlan.id}`, { 
        method: "DELETE" 
    })
        .then(response => response.json())

export const createMealPlan = (creatorId, newMealPlan) => {
    debugger
    return fetch(`${url}/creator/${creatorId}/mealplan`, {
        method: "POST",
        body: JSON.stringify(newMealPlan),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())
}



export const updateMealPlan = (mealPlanId, mealPlan) =>
    fetch(`${url}/mealplans/${mealPlanId}`, {
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
    findMealPlanById,
    findMealPlansByCreator
}
