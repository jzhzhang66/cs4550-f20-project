import RecipeService from "../services/RecipeService"

export const FIND_RECIPES = "FIND_RECIPES"
export const UPDATE_KEYWORD = "UPDATE_KEYWORD"
export const FIND_RECIPE_INFO_BY_ID = "FIND_RECIPE_INFO_BY_ID"
export const FIND_RECIPE_INSTRUCTIONS_BY_ID = "FIND_RECIPE_INSTRUCTIONS_BY_ID"

export const findRecipes = (dispatch, recipeName) =>
  RecipeService.findRecipes(recipeName)
    .then(recipes =>
      dispatch({
        type: FIND_RECIPES,
        recipes
      }))

export const updateKeyword = (dispatch, keyword) => {
  return dispatch({
    type: UPDATE_KEYWORD,
    keyword
  })
}

export const findRecipeInfoById = (dispatch, recipeId) =>
  RecipeService.findRecipeInfoById(recipeId)
    .then(recipe =>
      dispatch({
        type: FIND_RECIPE_INFO_BY_ID,
        recipe
      }))

export const findRecipeInstructionsById = (dispatch, recipeId) => {
  debugger
  return RecipeService.findRecipeInstructionsById(recipeId)
    .then(instructions =>
      dispatch({
        type: FIND_RECIPE_INSTRUCTIONS_BY_ID,
        instructions: instructions[0]
      }))
    }



