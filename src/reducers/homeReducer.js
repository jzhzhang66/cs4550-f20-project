import {
  GET_RECENT_FAVORITES,
  GET_RECENT_FOLLOWINGS
} from "../actions/homeActions";

const initialState = {
  recentFavorites: [],
  recentFollowings: []
}

const homeReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_RECENT_FOLLOWINGS:
      return {
        ...state,
        recentFollowings: action.followings.reverse()
      }
    case GET_RECENT_FAVORITES:
      return{
        ...state,
        recentFavorites: action.favorites.reverse()
      }
    default:
      return state
  }
}

export default homeReducer
