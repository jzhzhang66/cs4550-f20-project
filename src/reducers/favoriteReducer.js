import {
    GET_FAVORITES_BY_FOLLOWER_ID,
    GET_FAVORITE_BY_ID,
    GET_ALL_RECENT_FAVORITES,
    DELETE_FAVORITE,
    ADD_FAVORITE,

  } from "../actions/favoriteActions"

const initialState = {
    favorites: [],
    favorite: {}
}


const favoriteReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.favorite]
            }
        case GET_FAVORITES_BY_FOLLOWER_ID: 
        debugger
            return {
                ...state,
                favorites: action.favorites
            }
        case GET_FAVORITE_BY_ID:
            return {
                ...state,
                favorite: action.favorite
            }
        case GET_ALL_RECENT_FAVORITES:
            return {
                ...state,
                favorites: action.favorites
            }
        case DELETE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(favorite => favorite.id !== action.favorite.id)
            }
        default:
            return state
    }
}

export default favoriteReducer
