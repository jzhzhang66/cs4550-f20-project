import {getAllRecentFavorites} from "../services/FavoriteService";
import {getAllRecentFollowing} from "../services/FollowingService";

export const GET_RECENT_FOLLOWINGS = "GET_RECENT_FOLLOWINGS";
export const GET_RECENT_FAVORITES = "GET_RECENT_FAVORITES";


export const getRecentFollowings = (dispatch, userId) => {
  return getAllRecentFollowing(userId).then(followings => dispatch({
    type: GET_RECENT_FOLLOWINGS,
    followings
  }))
}

export const getRecentFavorites = (dispatch, userId) => {
  return getAllRecentFavorites(userId).then(favorites => dispatch({
    type: GET_RECENT_FAVORITES,
    favorites
  }))
}
