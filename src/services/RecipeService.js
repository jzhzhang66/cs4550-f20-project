const url = "https://api.spoonacular.com/recipes"
const key = "faa54ae99c9a46efbb6498e0a9965093"

export const findRecipes = (search) =>
  fetch(`${url}/complexSearch/?apiKey=${key}&query=${search}`, {
    "method": "GET",
    "headers": {
      "Content-Type": "application/json"
    }
  }
  )
    .then(response => response.json())

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


export default {
  findRecipes,
  findRecipesWithCuisine,
  findRecipeInfoById
}
