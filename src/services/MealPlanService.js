import {URL} from "./DailyPlanService"

const url = URL;

export const findAllMealPlans = () =>
  fetch(`${url}/mealplans`)
    .then(response => response.json())

export const findMealPlanById = (mealPlanId) => {
  debugger
  return fetch(`${url}/mealplans/${mealPlanId}`, {
    method: "GET"
  })
    .then(response => response.json())
}

export const findMealPlansByCreator = (creatorId) => {
  debugger
  return fetch(`${url}/creator/${creatorId}/mealplans`)
    .then(response => response.json())
}

export const findMealPlansByName = (mealPlanName) => 
  fetch(`${url}/mealplans/name/${mealPlanName}`)
    .then(response => response.json())



export const deleteMealPlan = (mealPlanId) => {
  debugger
  return fetch(`${url}/mealplans/${mealPlanId}`, {
    method: "DELETE"
  })
    .then(response => console.log(response))
}


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

export const getFavoriteMealPlansByFollowerId = (uid) => {
  return fetch(`${url}/followers/${uid}/favorites/mealplans`)
    .then(response => response.json())
}

export const updateMealPlan = (mealPlanId, mealPlan) =>
  fetch(`${url}/mealplans/${mealPlan.id}`, {
    method: "PUT",
    body: JSON.stringify(mealPlan),
    headers: {
      "content-type": "application/json"
    }
  })
    .then(response => response.json())

export const getMealPlanByCreator = (creatorId) =>
  fetch(`${url}/creator/${creatorId}/mealplans`).then(
    response => response.json())

export default {
  findAllMealPlans,
  deleteMealPlan,
  createMealPlan,
  updateMealPlan,
  findMealPlanById,
  findMealPlansByCreator,
  findMealPlansByName,
  getFavoriteMealPlansByFollowerId
}
