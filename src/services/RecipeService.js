const url = "https://api.spoonacular.com/recipes"
const key1 = "faa54ae99c9a46efbb6498e0a9965093"
const key2 = "b8915584174a4f338d7d9f2080152bd9"
const key = key2

export const findRecipes = (search) => {
  return fetch(`${url}/complexSearch/?apiKey=${key}&query=${search}`, {
    "method": "GET",
    "headers": {
      "Content-Type": "application/json"
    }
  }
  )
    .then(response => response.json())
}

export const findRecipesWithCuisine = (search, cuisine) =>
  fetch(`${url}/complexSearch/?apiKey=${key}&query=${search}&cuisine=${cuisine}`, {
    "method": "GET",
    "headers": {
      "Content-Type": "application/json"
    }
  }
  )
    .then(response => response.json())

export const findRecipeInfoById = (recipeId) =>
  fetch(`${url}/${recipeId}/information?apiKey=${key}&includeNutrition=true`, {
    method: "GET"
  })
    .then(response => response.json())

export const findRandomRecipes = (numRecipes) =>
  fetch(`${url}/random?apiKey=${key}&number=${numRecipes}`, {
    "method": "GET",
    "headers": {
      "Content-Type": "application/json"
    }
  }).then(response => response.json())

export const findRecipeInstructionsById = (recipeId) =>{
  debugger
  return fetch(`${url}/${recipeId}/analyzedInstructions?apiKey=${key}`, {
    method: "GET",
    "headers": {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
  }



export default {
  findRecipes,
  findRecipesWithCuisine,
  findRecipeInfoById,
  findRandomRecipes,
  findRecipeInstructionsById
}
