// const url = 'https://wbdv-generic-server.herokuapp.com/api/ericli0303/courses2'
// const dailyPlanUrl = 'https://wbdv-generic-server.herokuapp.com/api/ericli0303/modules'
const localurl = "http://localhost:8080/api";
const localdailyPlanUrl = 'http://localhost:8080/api/dailyplans';

const heroku = "https://planme-al.herokuapp.com/api";

const url = localurl;
const dailyPlanUrl = `${url}/dailyplans`

export const findDailyPlan = (dailyPlanId) =>
    fetch(`${dailyPlanUrl}/${dailyPlanId}`)
        .then(response => response.json())


export const findDailyPlansForMealPlan = (mealPlanId) => {
    debugger
    return fetch(`${url}/mealplans/${mealPlanId}/dailyplans`, {
        method: "GET"
    })
        .then(response => response.json())
}

export const deleteDailyPlan = (dailyPlanId) => {
    debugger
    return fetch(`${dailyPlanUrl}/${dailyPlanId}`, {
        method: "DELETE"
    })
        .then(response => console.log(response))
}

export const createDailyPlan = (mealPlanId, dailyPlan) => {
    debugger
    return fetch(`${url}/mealplans/${mealPlanId}/dailyplans`, {
        method: "POST",
        body: JSON.stringify(dailyPlan),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())
}


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
