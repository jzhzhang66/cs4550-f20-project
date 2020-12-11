const url = "https://api.spoonacular.com/food/ingredients"
const key = "faa54ae99c9a46efbb6498e0a9965093"

export const findIngredients = (search) => {

  return fetch(`${url}/search/?apiKey=${key}&query=${search}`, {
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
  findIngredients,
  findRecipesWithCuisine,
  findRecipeInfoById,
  findRandomRecipes,
  findRecipeInstructionsById
}
