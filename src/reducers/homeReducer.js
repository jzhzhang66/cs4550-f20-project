import {
  FIND_RANDOM_RECIPE
} from "../actions/homeActions";

const initialState = {
  popularRecipe: [], // the most liked recipe from our database
  favoriteRecipes: [], // the user's liked recipes
  recentRecipes: [], // most recent recipes from our database
  randomRecipes: [] // rando
}

const homeReducer = (state = initialState, action) => {
  switch(action.type) {
    case FIND_RANDOM_RECIPE:
      console.log(action.randomRecipes.recipes)
      return {
        ...state,
        randomRecipes: action.randomRecipes.recipes,
      }
    default:
      return state
  }
}

export default homeReducer
