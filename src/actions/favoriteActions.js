import FavoriteService from "../services/FavoriteService"
export const GET_FAVORITES_BY_FOLLOWER_ID = "GET_FAVORITES_BY_FOLLOWER_ID";
export const GET_FAVORITE_BY_ID = "GET_FAVORITE_BY_ID";
export const GET_ALL_RECENT_FAVORITES = "GET_ALL_RECENT_FAVORITES";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const ADD_FAVORITE = "ADD_FAVORITE";

export const getFavoriteById = (dispatch, favoriteId) =>
    FavoriteService.getFavoriteById(favoriteId)
        .then(favorite =>
            dispatch({
                type: GET_FAVORITE_BY_ID,
                favorite
            }))


export const getFavoritesByFollowerId = (dispatch, followerId) => {
    debugger
    return FavoriteService.getFavoritesByFollowerId(followerId)
        .then(favorites => dispatch({
            type: GET_FAVORITES_BY_FOLLOWER_ID,
            favorites
        }))
}



export const getAllRecentFavorites = (dispatch, followerId) =>
    FavoriteService.getAllRecentFavorites(followerId)
        .then(favorites => dispatch({
            type: GET_ALL_RECENT_FAVORITES,
            favorites
        }))


export const deleteFavorite = (dispatch, favorite) => {
    debugger
    return FavoriteService.deleteFavorite(favorite.id)
        .then(status =>
            dispatch({
                type: DELETE_FAVORITE,
                favorite
            }))

}

export const addFavorite = (dispatch, favorite) =>
    FavoriteService.addFavorite(favorite)
        .then(status =>
            dispatch({
                type: ADD_FAVORITE,
                favorite
            }))

