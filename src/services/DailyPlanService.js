const url = 'https://wbdv-generic-server.herokuapp.com/api/ericli0303/courses2'
const dailyPlanUrl = 'https://wbdv-generic-server.herokuapp.com/api/ericli0303/modules'

export const findDailyPlan = (dailyPlanId) =>
    fetch(`${dailyPlanUrl}/${dailyPlanId}`).then(response => response.json())


export const findDailyPlansForMealPlan = (mealPlanId) =>
    fetch(`${url}/${mealPlanId}/dailyPlans`, {
        method: "GET"
    })
        .then(response => response.json())

export const deleteDailyPlan = (dailyPlanId) =>
    fetch(`${dailyPlanUrl}/${dailyPlanId}`, {
        method: "DELETE"
    })
        .then(response => response.json())



export const createDailyPlan = (mealPlanId, dailyPlan) =>
    fetch(`${url}/${mealPlanId}/dailyPlans`, {
        method: "POST",
        body: JSON.stringify(dailyPlan),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())


export const updateDailyPlan = (dailyPlanId, dailyPlan) =>
    fetch(`${dailyPlanUrl}/${dailyPlanId}`, {
        method: "PUT",
        body: JSON.stringify(dailyPlan),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())


export default {
    findDailyPlan,
    findDailyPlansForMealPlan,
    deleteDailyPlan,
    createDailyPlan,
    updateDailyPlan
}
