import {
  FIND_RANDOM_RECIPE
} from "../actions/homeActions";

const initialState = {
  popularMealPlan: [], // the most liked recipe from our database
  userFollowings: [], // the user's liked recipes
  recentRecipes: [], // most recent recipes from our database
  randomRecipes: [] // rando
}

const homeReducer = (state = initialState, action) => {
  switch(action.type) {
    case FIND_RANDOM_RECIPE:
      return {
        ...state,
        randomRecipes: action.randomRecipes.recipes,
      }
    default:
      return state
  }
}

export default homeReducer
