const url = "https://api.spoonacular.com/recipes/complexSearch"
const key = "faa54ae99c9a46efbb6498e0a9965093"

export const searchRecipe = (search) =>
    fetch(`${url}/?apiKey=${key}&query=${search}`, {
          "method": "GET",
          "headers": {
            "Content-Type": "application/json"
          }
        }
    )
    .then(response => response.json())

export default {
  searchRecipe
}
