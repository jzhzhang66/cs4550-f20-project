import {
    UPDATE_FOLLOWERS_EXPANDED,
    UPDATE_FOLLOWING_EXPANDED,
    ADD_FOLLOWING,
    GET_FOLLOWERS,
    GET_CREATORS
} from "../actions/profileActions";

const initialState = {
    followersExpanded: false,
    followingExpanded: false,
    followers: [
    ],
    following: [
    ]

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FOLLOWERS_EXPANDED:
            return {
                ...state,
                followersExpanded: action.followersExpanded
            }
        case UPDATE_FOLLOWING_EXPANDED:
            return {
                ...state,
                followingExpanded: action.followingExpanded
            }
        case ADD_FOLLOWING:
            return {
                ...state,
                followers: action.newFollowing
            }
        case GET_FOLLOWERS:
            debugger
            return {
                ...state,
                followers: action.users
            }
        case GET_CREATORS:
            debugger
            return {
                ...state,
                following: action.users
            }
        default:
            return state
    }
}

export default profileReducer
