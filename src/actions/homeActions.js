import RecipeService from "../services/RecipeService";
export const FIND_RANDOM_RECIPE = "FIND_RANDOM_RECIPE";

export const findRandomRecipes = (dispatch, numRecipes) =>
    RecipeService.findRandomRecipes(numRecipes)
    .then(randomRecipes =>
        dispatch({
          type: FIND_RANDOM_RECIPE,
          randomRecipes
        }))
