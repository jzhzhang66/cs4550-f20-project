import FollowingService from "../services/FollowingService";
import FavoriteService from "../services/FavoriteService";
export const GET_RECENT_FOLLOWINGS = "GET_RECENT_FOLLOWINGS";
export const GET_RECENT_FAVORITES = "GET_RECENT_FAVORITES";


export const getRecentFollowings = (dispatch, userId) => {
  return FollowingService.getAllRecentFollowing(userId).then(followings => dispatch({
    type: GET_RECENT_FOLLOWINGS,
    followings
  }))
}

export const getRecentFavorites = (dispatch, userId) => {
  FavoriteService.getAllRecentFavorites(userId).then(favorites => dispatch({
    type: GET_RECENT_FAVORITES,
    favorites
  }))
}
